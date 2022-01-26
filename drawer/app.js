const menu = document.querySelector(".hamburger");
const drawer = document.querySelector(".toggle");

let hide = false;

menu.addEventListener("click", function () {
	drawer.style.display = hide ? "flex" : "none";
	hide = !hide;
});
