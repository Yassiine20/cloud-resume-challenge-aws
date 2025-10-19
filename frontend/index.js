const CONFIG = {
    API_URL: 'https://sttpumztk7.execute-api.us-east-1.amazonaws.com/prod/count'
};

// Function to update visitor count
async function updateVisitorCount() {
  const counterElement = document.getElementById("visitor-count");

  try {
    

    // Call the API (will work after Step 9)
    const response = await fetch(CONFIG.API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Animate the count update
    animateCount(counterElement, 0, data.count, 1000);
  } catch (error) {
    console.error("Error fetching visitor count:", error);
  }
}

// Animate count from start to end
function animateCount(element, start, end, duration) {
  const range = end - start;
  const increment = range / (duration / 16); // 60fps
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= end) {
      element.textContent = Math.floor(end).toLocaleString();
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current).toLocaleString();
    }
  }, 16);
}

// Run when page loads
document.addEventListener("DOMContentLoaded", function () {
  updateVisitorCount();
});
