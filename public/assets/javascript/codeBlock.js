var parentDiv = document.querySelector('div[class^="CodeBlock_container_"]');
var newDiv = document.createElement("div");
parentDiv.appendChild(newDiv);
newDiv.classList.add("CodeBlock_left");
