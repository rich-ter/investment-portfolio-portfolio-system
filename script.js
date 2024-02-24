document.getElementById('portfolioRequestForm').addEventListener('submit', function(e) {
  e.preventDefault();
  // Mock submission handling
  const title = document.getElementById('title').value;
  const date = document.getElementById('date').value;
  const description = document.getElementById('description').value;

  const applicationContainer = document.getElementById('applicationsContainer');
  applicationContainer.innerHTML += `<div><h3>${title}</h3><p>${date}</p><p>${description}</p></div>`;
  
  // Reset form after submission
  this.reset();
});

// Placeholder for setting the user's name dynamically, e.g., from Firebase auth
document.getElementById('userName').textContent = 'Jane Doe'; // Example, replace with dynamic data
