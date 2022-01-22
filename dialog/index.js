const dialog = document.querySelector(".dialog");
const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");

openBtn.addEventListener("click", () => {
	dialog.style.visibility = "visible";
});

closeBtn.addEventListener("click", () => {
	dialog.style.visibility = "hidden";
});
