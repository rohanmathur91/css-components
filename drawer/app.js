const menu = document.querySelector(".hamburger");
const drawer = document.querySelector(".toggle");

let hide = true;

menu.addEventListener("click", function () {
	drawer.style.display = hide ? "flex" : "none";
	hide = !hide;
});
