// Header animation
const target = document.getElementById("target");
let array = ["Web", "Mobile", "iOS"];
let wordIndex = 0;
let letterIndex = 0;

// Letter creation
const createLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);

  letter.classList.add("letter");
  letter.style.opacity = "0";
  letter.style.animation = "anim 5s ease forwards";
  letter.textContent = array[wordIndex][letterIndex];

  setTimeout(() => {
    letter.remove();
  }, 3000);
};

// Loop function to appear and desappear each letters
const loop = () => {
  setTimeout(() => {
    if (wordIndex >= array.length) {
      wordIndex = 0;
      letterIndex = 0;
      loop();
    } else if (letterIndex < array[wordIndex].length) {
      createLetter();
      letterIndex++;
      loop();
    } else {
      letterIndex = 0;
      wordIndex++;
      setTimeout(() => {
        loop();
      }, 3000);
    }
  }, 80);
};
loop();

// animJS animation
AOS.init({
  easing: "linear",
  duration: 1000,
});
