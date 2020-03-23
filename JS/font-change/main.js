title = document.querySelector(".title");
sel = document.getElementById("fontId");
sel.addEventListener("input", () => {
  font = sel.value;
  title.style.fontFamily = `${font}`;
});
