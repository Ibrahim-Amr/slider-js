let allImges = Array.from(document.querySelectorAll('.item img'));
let prevBtn = document.getElementById('prevBtn');
let closeBtn = document.getElementById('closeBtn');
let nextBtn = document.getElementById('nextBtn');
let lightBoxContainer = document.getElementById('lightBoxContainer');
let lightBox = document.getElementById('lightBox');
let currentIndex;

closeBtn.addEventListener('click', function () {
	lightBoxContainer.classList.add('d-none');
});

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

for (i = 0; i < allImges.length; i++) {
	allImges[i].addEventListener('click', function (e) {
		let currentImg = e.target.getAttribute('src');
		currentIndex = allImges.indexOf(e.target);
		lightBox.style.backgroundImage = `url(${currentImg})`;
		lightBoxContainer.classList.replace('d-none', 'd-flex');
	});
}

function nextSlide() {
	currentIndex++;
	if (currentIndex >= allImges.length) currentIndex = 0;
	let imgUrl = allImges[currentIndex].getAttribute('src');
	lightBox.style.backgroundImage = `url(${imgUrl})`;
}

function prevSlide() {
	currentIndex--;
	if (currentIndex < 0) currentIndex = allImges.length - 1;
	let imgUrl = allImges[currentIndex].getAttribute('src');
	lightBox.style.backgroundImage = `url(${imgUrl})`;
}

document.addEventListener('keyup', function (e) {
	if (lightBoxContainer.classList.contains('d-flex')) {
		switch (e.key) {
			case 'ArrowRight':
				nextSlide();
				break;
			case 'ArrowLeft':
				prevSlide();
				break;
			case 'Escape':
				lightBoxContainer.classList.add('d-none');
				break;
		}
	}
});
