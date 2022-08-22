((TRAINING) => {

	var crt_btns = document.querySelectorAll(".crt-item-btn > input");

	var updateCert = function (target, name, image) {
		document.querySelector(`#${target} > .crt-item-info > div:nth-child(1)`).innerText = name;

		if (image !== null)
			document.querySelector(`#${target} > img`).setAttribute("src", image);
	}

	crt_btns.forEach((elt) => {
		elt.addEventListener("click", function () {
			updateCert(
				this.getAttribute("data-crt"),
				this.getAttribute("data-crt-name"),
				this.getAttribute("data-crt-img") || null
			);
		});
	});

})(null)