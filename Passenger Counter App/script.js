let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("saveEl");

let count = 0;

function incrementCount() {
  count += 1;     
  countEl.innerText = count;
}

let countMemory = 'Saved History: ';
let trimmedHistory = '';

function save() {
  countMemory = countMemory+count+" - ";
  let trimmedHistory = countMemory.substring(0, countMemory.length-2);  //to remove the excess hiphen
  saveEl.innerText = trimmedHistory;
}

