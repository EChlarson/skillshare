// Preload the active image
window.onload = function () {
   const img = new Image();
   img.src = "../img/parallaxRunning.png";
 };
 
 // Select elements
 const startButton = document.getElementById("control-button");
 const timeMachine = document.getElementById("tm");
 
 startButton.addEventListener("click", () => {
   // Change to the startup gif
   timeMachine.src = "../img/tmAnSingle.gif";
 
   // Change to the active image after the gif duration
   setTimeout(() => {
     timeMachine.src = img;
   }, 3000); // Adjust this duration to match your gif's length
 
   // Update the button
   startButton.textContent = "Travel";
   startButton.onclick = () => {
     alert("Time machine activated!");
   };
 });