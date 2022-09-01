((Project) => {

	var len_items = document.querySelectorAll(".prj-item").length;
	var nb_hidden = len_items - 3;
	var more_btn = document.querySelector("button#prj-more");
	document.querySelectorAll(`.prj-item:nth-child(n + 4)`).forEach((elt) => {
		elt.classList.add("hidden");
	});

	function showMore() {
		nb_hidden -= 3;
		document.querySelectorAll(`.prj-item:nth-last-child(n + ${Math.max(nb_hidden+1, 0)})`).forEach((elt) => {
			elt.classList.remove("hidden");
		});
		if (nb_hidden <= 0) {
			more_btn.removeEventListener("click", showMore);
			more_btn.style.display = "none";
		}
	}

	if (nb_hidden > 0) {
		more_btn.addEventListener("click", showMore);
	}	else
		more_btn.style.display = "none";

})(null);