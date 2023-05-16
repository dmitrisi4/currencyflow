if (document) {

	let observerOptions = {
    rootMargin: '0px',
    threshold: 0.1
	}

	let observer = new IntersectionObserver(observerCallback, observerOptions);

	function observerCallback(entries, observer) {
			entries.forEach(entry => {
					if(entry && entry.isIntersecting) {
						entry.target.classList.add('active');
					} else {
						entry.target.classList.remove('active');
					}
			});
	};

	let target = '.targetSelector';
	document.querySelectorAll(target).forEach((i) => {
			if (i) {
					observer.observe(i);
			}
	});

	document.addEventListener('DOMContentLoaded', function () {
			const burgerBtn = document.querySelector('.burger-btn');
			const mainMenu = document.querySelector('.main-menu');

			burgerBtn.addEventListener('click', function(event) {
				event.stopPropagation();
				if (mainMenu.classList.contains('opened-menu')) {
					mainMenu.classList.remove('opened-menu');
					burgerBtn.classList.remove('opened-burger');
					document.body.style.overflow = 'visible';
				} else {
					mainMenu.classList.add('opened-menu');
					burgerBtn.classList.add('opened-burger');
					document.body.style.overflow = 'hidden';
				}
			});

	}, false);
};