var headerAnim1 = document.querySelector('h1');

var typewriter = new Typewriter(headerAnim1, {
	deleteSpeed: 50
});

typewriter
	.changeDelay(50)
	.typeString("Moi c'est <strong>Pierric Marye,</strong> ")
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