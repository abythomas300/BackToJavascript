const unorderList = document.querySelector("ul");
const inputField = document.querySelector("input");
const addBtn = document.querySelector(".addButton");
addBtn.addEventListener("click", action)
function action(){
    var currentInputFieldValue = inputField.innerText;
    inputField.innerText = '';

    const li = document.createElement("li");
    const span = document.createElement("span");
    const removeBtn = document.createElement("button");
    removeBtn.classList.add("removeButton");

    li.appendChild(span);
    li.appendChild(removeBtn);

    span.text = currentInputFieldValue;
    removeBtn.textContent = "Delete";

    unorderList.appendChild(li);
}        

