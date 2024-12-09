var i = 0;
var wordIndex = 0;
var words = ['Ethical Hacker', 'Software Developer', 'Tech Enthusiast', 'Hackathon fanatic', 'Rock Climber']; /* The words to type */
var speed = 50; /* The speed/duration of the effect in milliseconds */
var isDeleting = false;

function typeWriter() {
  var element = document.getElementById("demo");
  var txt = words[wordIndex];

  if (i < txt.length && !isDeleting) {
    element.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else if (i > 0 && isDeleting) {
    element.innerHTML = txt.substring(0, i - 1);
    i--;
    setTimeout(typeWriter, speed);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      wordIndex = (wordIndex + 1) % words.length; // Move to the next word
    }
    setTimeout(typeWriter, 1000); // Pause before starting to delete or retype
  }
}

// Call the typeWriter function with a 1-second delay when the page loads
window.onload = function() {
  setTimeout(typeWriter, 2000); // 1000 milliseconds = 1 second
};