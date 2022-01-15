// Import the variables 
const btnEl = document.querySelector(".btn");
const closeIconEl = document.querySelector(".close-icon");
const videoContainerEl = document.querySelector(".video-container");
const videoEl = document.querySelector("video");
const rippleButton = document.querySelector(".rippleButton"); /*Import the button*/

// The 'active' tag from the video player gets removed on button click. Thus the video player becomes visible to the user 
btnEl.addEventListener("click", () => {
  videoContainerEl.classList.remove("active");
});

// The 'active' tag from the video player gets added on clicking the cross button. Thus the video player becomes hidden from the user 
closeIconEl.addEventListener("click", () => {
  videoContainerEl.classList.add("active");
  videoEl.pause();
  videoEl.currentTime = 0;
});

// Ripple button script taken from: https: github.com/AISHIK999/Front_end_learning/tree/main/Button_ripple_effect
/*What to do when the "mouseover" (cursor hover) event is triggered*/
rippleButton.addEventListener("mouseover", (event) => {
  // event.pageX basically determines the position of the cursor from the left of the window along the x-axis
  // By using the "rippleButton.offsetLeft" with instanceof, we are setting the starting position from the left of the window to the left of "rippleButton", i.e., our basic button
  const x = event.pageX - rippleButton.offsetLeft;
  const y = event.pageY - rippleButton.offsetTop;

  // Now we attach the beginning of the ripple effect inside the button to the position of the cursor while hovering over the button
  // The variables --xCoord and --yCoord have been pre-defined in our css file (lines 35 and 36)
  // We insert the value of the x and y coordinates (x, y) of the cursor in relation to the button, to the variables defined in the css file to mark the position of the beginning of the ripple effect
  rippleButton.style.setProperty("--xCoord", x + "px");
  rippleButton.style.setProperty("--yCoord", y + "px");
});
