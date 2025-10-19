import json
import pytest
from moto import mock_aws  
import boto3
import os

# Set mock AWS credentials
os.environ['AWS_ACCESS_KEY_ID'] = 'testing'
os.environ['AWS_SECRET_ACCESS_KEY'] = 'testing'
os.environ['AWS_DEFAULT_REGION'] = 'us-east-1'



from lambda_function import lambda_handler

@pytest.fixture
def dynamodb_table():
    """Create mock DynamoDB table"""
    with mock_aws():
        dynamodb = boto3.resource('dynamodb', region_name='us-east-1')
        
        table = dynamodb.create_table(
            TableName='cloud-resume-visitors',
            KeySchema=[{'AttributeName': 'id', 'KeyType': 'HASH'}],
            AttributeDefinitions=[{'AttributeName': 'id', 'AttributeType': 'S'}],
            BillingMode='PAY_PER_REQUEST'
        )
        
        yield table

def test_first_visitor(dynamodb_table):
    """Test first visitor - count should be 1"""
    result = lambda_handler({}, {})
    body = json.loads(result['body'])
    
    assert result['statusCode'] == 200
    assert body['count'] == 1


def test_increment_count(dynamodb_table):
    """Test count increments correctly"""
    # Add existing count
    dynamodb_table.put_item(Item={'id': 'visitor_count', 'count': 5})
    
    result = lambda_handler({}, {})
    body = json.loads(result['body'])
    
    assert body['count'] == 6

def test_multiple_visitors(dynamodb_table):
    """Test multiple calls increment correctly"""
    for i in range(1, 4):
        result = lambda_handler({}, {})
        body = json.loads(result['body'])
        assert body['count'] == i

def test_response_format(dynamodb_table):
    """Test response has CORS headers"""
    result = lambda_handler({}, {})
    
    assert result['statusCode'] == 200
    assert 'Access-Control-Allow-Origin' in result['headers']
    assert result['headers']['Access-Control-Allow-Origin'] == '*'