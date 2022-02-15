const bodyElement = document.querySelector("body")  //Call the body of the HTML

bodyElement.addEventListener("mousemove", () => {
    // TODO: Learn why the 'event' interface is deprecated, and check for fixes
    //Apply the animation properties along with the mouse movement over the x-axis and y-axis of the screen
    let xPosition = event.offsetX;
    let yPosition = event.offsetY;
    let effect = document.createElement("span");    //Duplicate the span property, i.e, our trails on mousemove
    let size = Math.random() * 100; //Generate a random number to be used as the size of the trail particles
    //Set the width and height to the random size. Add "px" as string at the end as unit
    effect.style.width = size + "px";
    effect.style.height = size + "px";
    //Make the animation trail follow the cursor
    effect.style.left = xPosition + "px";
    effect.style.top = yPosition + "px";

    //Add the trail effect to the body element
    bodyElement.appendChild(effect);
    //Remove the 'span' trails of the animation after 3 seconds. Laggy and buggy animation occurs after sometime otherwise
    setTimeout(() => {
        effect.remove();
    }, 3000);
});