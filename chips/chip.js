const chipInput = document.querySelector("#chip-name");
const container = document.querySelector(".chips");

chipInput.addEventListener("keyup", function (event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		let chipDiv = document.createElement("div");
		chipDiv.className = "chip__wrapper";
		chipDiv.innerHTML = `
                        <div class="chip">
                            <p class="chip__text">${chipInput.value}</p>
                            <div class="chip__right-icon">x</div>
                        </div>`;

		container.appendChild(chipDiv);
	}
});
