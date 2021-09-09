// typewriter animation h1
let headerAnim = document.querySelector('h1');

let typewriter = new Typewriter(headerAnim, {
	deleteSpeed: 50
});

typewriter
	.changeDelay(50)
	.typeString('<strong>Développeur web et mobile</strong>')
	.pauseFor(1000)
	.deleteChars(13)
	.pauseFor(500)
	.typeString('<strong><span style="color: #ff7f50">Front-End</span></strong>')
	.pauseFor(1000)
	.deleteChars(9)
	.pauseFor(500)
	.typeString('<strong><span style="color: #07617d">Back-End</span></strong>')
	.pauseFor(1000)
	.deleteChars(8)
	.pauseFor(500)
	.typeString('<strong><span style="color: #ff6347">iOS</span></strong>')
	.pauseFor(1000)
	.deleteChars(3)
	.pauseFor(500)
	.typeString('<strong>web et mobile</strong>')
	.start();

// animJS animation
AOS.init({
	easing: 'linear',
	duration: 1000,
})

// Scroll Event Navigation bar
const nav = document.querySelector('nav')

window.addEventListener('scroll', () => {
	if (window.scrollY < 120) {
		nav.style.top = '0'
	} else {
		nav.style.top = '-140px'
	}
});