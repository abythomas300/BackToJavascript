const textbox = document.querySelector("#myTextBox");
textbox.addEventListener("keydown",handlingEvent);

function handlingEvent(event){
    alert("You pressed"+ event.key);
}