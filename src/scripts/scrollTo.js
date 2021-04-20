export default function scrollTo(){
	let scrollDistance = window.scrollY;

	if (window.innerWidth > 992) {
		document.querySelectorAll('.section').forEach((el, i) => {
			if (el.offsetTop - document.querySelector('.navbar').clientHeight <= scrollDistance) {
				document.querySelectorAll('.nav-link').forEach((el) => {
					if (el.classList.contains('active')) {
						el.classList.remove('active');
					}
				});
				document.querySelectorAll('.nav-link')[i].classList.add('active');
			}
		});
	}
}