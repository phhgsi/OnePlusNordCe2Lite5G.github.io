// Add interactivity for the Download ROM button
document.querySelector('.download-button').addEventListener('click', function() {
    window.location.href = 'https://example.com/download'; // Replace with your download link
});

// Add interactivity for the animated phone image
document.querySelector('#phoneImage').addEventListener('click', function() {
    this.classList.toggle('animated'); // Toggle the animation class
});
