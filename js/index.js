window.onload = ()=> {
	
	document.querySelector('.mode-toggle').onclick = function() {
		if (this.querySelector('i').classList.contains('fa-moon-o')) {
			this.querySelector('i').classList.replace('fa-moon-o', 'fa-sun-o');
			document.body.style.setProperty('--pcol', '#232323');
			document.body.style.setProperty('--scol', '#eee');
			document.body.style.setProperty('--shtcol', '#2b2b2b');
			document.body.style.setProperty('--shbcol', '#1a1a1a');

		} else {
			this.querySelector('i').classList.replace('fa-sun-o', 'fa-moon-o');
			document.body.style.setProperty('--pcol', '#f1f1f1');
			document.body.style.setProperty('--scol', '#554');
			document.body.style.setProperty('--shtcol', '#fff');
			document.body.style.setProperty('--shbcol', '#ddd');
		}
	}

	document.querySelector('nav p.head').onclick = ()=> {
		window.location = 'index.html';
	}

	

}