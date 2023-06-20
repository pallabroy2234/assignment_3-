let button = document.getElementById("highlightButton");
let paragraph = document.getElementById("myParagraph");

button.addEventListener("click", function () {
  paragraph.classList.add("highlight");
});
