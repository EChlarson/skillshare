// Select elements
const timeMachine = document.getElementById('tm');
const controlButton = document.getElementById('control-button');

// Add event listener to the "Start" button
controlButton.addEventListener('click', () => {
  if (controlButton.textContent === 'Start') {
    // Change image to startup GIF
    timeMachine.src = '../img/tmAnimation.gif';
    
    // Wait for GIF to complete
    setTimeout(() => {
      // Change to active image
      timeMachine.src = '../img/parallaxRunning.png';
      
      // Change button to "Travel"
      controlButton.textContent = 'Travel';
    }, 1100); // Adjust duration based on the length of your GIF
  } else if (controlButton.textContent === 'Travel') {
    // Placeholder for the time machine function
    alert('Time Machine Activated!');
  }
});