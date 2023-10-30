var parentDivs = document.querySelectorAll('div[class^="CodeBlock_container_"]'); // 모든 div 엘리먼트 선택
parentDivs.forEach((parentDiv) => {
  var newDiv = document.createElement("div");
  parentDiv.appendChild(newDiv);
  newDiv.classList.add("CodeBlock_left");
});

// 자바스크립트 파일 다운로드의 경우, <link>가 아닌 <script>를 사용하며, 렌더링 된 이후에 참조해야 하므로 body의 맨 마지막에 위치시키자.
