import json
import boto3
from decimal import Decimal
import os

# Initialize DynamoDB client
dynamodb = boto3.resource('dynamodb')
table_name = os.environ.get('TABLE_NAME', 'cloud-resume-visitors')
table = dynamodb.Table(table_name)

def lambda_handler(event, context):
    # TODO implement
    try:
        # Get current count from DynamoDB
        response = table.get_item(Key={'id': 'visitor_count'})

        if 'Item' in response:
            current_count = int(response['Item']['count'])
        else:
            current_count = 0
        
        # Increment count
        new_count = current_count + 1
        table.put_item(Item={'id': 'visitor_count', 'count': int(new_count)})
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',  # CORS for your website
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
            },
            'body': json.dumps({'count': int(new_count)})
        }

    except Exception as e:  # ← Python syntax
        print(f"Error: {str(e)}")
        return {
            'statusCode': 500,
            'headers': {
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': str(e)})
        }
    
