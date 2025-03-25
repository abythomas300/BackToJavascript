const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

//event bubbling <-- from inside nodes to outside nodes.
grandparent.addEventListener("click",()=>console.log('Granparent Bubble'));
parent.addEventListener("click",()=>console.log('Parent Bubble'));
child.addEventListener("click",()=>console.log('Child Bubble'));
document.addEventListener("click",()=>console.log('Document Bubble'));

//event capturing <-- from outside to inside nodes.
grandparent.addEventListener("click",()=>console.log('Granparent Capture'),{capture:true});
parent.addEventListener("click",()=>console.log('Parent Capture'),{capture:true});
child.addEventListener("click",()=>console.log('Child Capture'),{capture:true});
document.addEventListener("click",()=>console.log('Document Capture'),{capture:true});
//capture property is set to false by default.