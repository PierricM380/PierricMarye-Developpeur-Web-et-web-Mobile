// typewriter animation
let headerAnim = document.querySelector('h1');

let typewriter = new Typewriter(headerAnim, {
	deleteSpeed: 50
});

typewriter
	.changeDelay(50)
	.typeString("<strong>Pierric Marye,</strong> ")
	.pauseFor(500)
	.typeString('<strong>développeur web et web mobile</strong>')
	.pauseFor(1000)
	.deleteChars(17)
    .pauseFor(1000)
	.typeString('<strong>Front-End</strong>')
    .pauseFor(1000)
	.deleteChars(9)
	.typeString('<strong>Back-End</strong>')
    .pauseFor(1000)
	.deleteChars(8)
	.typeString('<strong>iOS</strong>')
	.start();

// animJS animation
AOS.init();