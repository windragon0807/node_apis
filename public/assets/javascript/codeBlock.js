var parentDivs = document.querySelectorAll('div[class^="CodeBlock_container_"]'); // 모든 div 엘리먼트 선택
parentDivs.forEach((parentDiv) => {
  var newDiv = document.createElement("div");
  parentDiv.appendChild(newDiv);
  newDiv.classList.add("CodeBlock_left");
});
