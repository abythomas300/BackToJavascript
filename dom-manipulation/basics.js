//creating a new div node inside the memory and giving properties.
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the text content I inserted in this div using DOM Manipulation.";
//adding newly created node to DOM.
const container = document.querySelector("#container");  //selecting the parent node.
container.appendChild(content); //adding to DOM

//- - exercises - -
//text with red color
const paragraph = document.createElement("p");
paragraph.classList.add("paragraph");
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = "red";
container.appendChild(paragraph);
//heading with blue color
const blueHeading = document.createElement("h3");
blueHeading.classList.add("blueHeading");
blueHeading.textContent = "I'm a blue h3!";
blueHeading.style.color = "blue";
container.appendChild(blueHeading);
//new div and its elements
const newDiv = document.createElement("div");
newDiv.classList.add("newDiv");
newDiv.textContent = "This is the text content.";
newDiv.style.border = "2px solid black";
newDiv.style.backgroundColor = "pink";
container.appendChild(newDiv);
  const newh1 = document.createElement("h1");
  newh1.classList.add("newh1");
  newh1.textContent = "I'm in a div";
  newh1.style.color = "green";
  newh1.style.fontStyle = "italics";
  newDiv.appendChild(newh1);

  const newParagraph = document.createElement("p");
  newParagraph.classList.add("newParagraph");
  newParagraph.style.fontStyle = "cursive";
  newDiv.append(newParagraph);
