//initializing the count as 0.
//listen for button click.
//increment value of count by 1 per button click.
//change the value of count-el to reflect the new count value.



let countEl = document.getElementById("count-el");

let count = 0;

function incrementCount() {
  count += 1;     
  countEl.innerText = count;
}
