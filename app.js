const imgContainer = document.querySelector('.flexbox-container');
const images = document.querySelectorAll('.flexbox-item img');

const prevButn = document.querySelector('#prevButn');
const nextButn = document.querySelector('#nextButn');

//counter
let counter = 1;

const initialSize = images[0].clientWidth;
imgContainer.style.transform = 'translateX(' + -initialSize * counter + 'px)';

//Button lister

nextButn.addEventListener('click', () => {
	var size = images[0].clientWidth;

	if (counter !== images.length - 2) {
		imgContainer.style.transition = 'transform 0.4s ease-in-out';
		counter++;
		imgContainer.style.transform = 'translateX(' + -size * counter + 'px)';
	} else if (counter === images.length - 2) {
        imgContainer.style.transition = 'transform 0.4s ease-in-out';
        counter=1;
        imgContainer.style.transform = 'translateX(' + -size * counter + 'px)';
	}
});

prevButn.addEventListener('click', () => {
	var size = images[0].clientWidth;

	if (counter !== 1) {
		imgContainer.style.transition = 'transform 0.4s ease-in-out';
		counter--;
		imgContainer.style.transform = 'translateX(' + -size * counter + 'px)';
	} else if (counter === 1) {
        imgContainer.style.transition = 'transform 0.4s ease-in-out';
		counter = images.length-2;
		imgContainer.style.transform = 'translateX(' + -size * counter + 'px)';
	}
});
