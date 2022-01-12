//We import the components into JavaScript constants and then we will work on them
const textArea = document.getElementById("inputTxt");
const totalCounter = document.getElementById("totalCounter");
const remainingCounter = document.getElementById("remainingCounter");

//The first parameter of the addEventListener is the 'event handler' next is 'function'
//keyup means the functon will be called after a key is pressed on the keyboard
//()=>{
//     We enter the code of the function to be called in here
// }

textArea.addEventListener("keyup", () => {
  updateCounter();
});

//We now define the upadteCounter() function that has been called in the textArea even listener
function updateCounter() {
  totalCounter.innerText = textArea.value.length;

  //Instead of doing this,
  val = 50 - textArea.value.length; //We can change the value from 50 to anything else to change the character limit. Be sure to also change the default values of the counters from the base.html
  remainingCounter.innerText = val;
  //we can also do:
  // remainingCounter.innerText = textArea.getAttribute("maxLength") - textArea.value.length;
}
