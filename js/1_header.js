((Navbar) => {
	// Open Navbar
	var head_open = document.querySelector("header > .container > i");
	var nav = document.querySelector("#nav-nav");
	var nav_ctn = document.querySelector("nav");

	head_open.addEventListener("click", (evt) => {
		nav_ctn.style.display = "unset";

		var position = nav.offsetWidth;
		nav.style.right = (-1*position) + "px";
		
		id = setInterval(() => {
			if (position > 0) {
				position -= 6;
				nav.style.right = (-1*position) + "px";
			} else {
				nav.style.right = "0px";
				clearInterval(id);
			}
		}, 5);
	});


	// Close Navbar
	var nav_close = document.querySelector("#nav-nav > i");
	var nav_filler = document.querySelector("#nav-filler");

	var closeNavbar = () => {
		var position = nav.offsetWidth;
		var offset = 0;

		id = setInterval(() => {
			if (offset < position) {
				offset += 10;
				nav.style.right = (-1 * offset) + "px";
			} else {
				nav_ctn.style.display = "none";
				clearInterval(id);
			}
		}, 5);
	};

	nav_close.addEventListener("click", closeNavbar);
	nav_filler.addEventListener("click", closeNavbar);


	// Navbar scrolling
	var head_ctn = document.querySelector("header > .container");

	window.onscroll = () => {
		if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
			head_ctn.classList.add("shrink_head");
		} else {
			head_ctn.classList.remove("shrink_head");
		}
	}

})(null);