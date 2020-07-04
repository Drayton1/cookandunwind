function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
function swapText() {
    var x = document.getElementById("myDiv");
 if (x.innerHTML === "Yes...") {
    x.innerHTML = "No..."; 
  } 
 else {
    x.innerHTML = "Yes...";
  }}
  
function myFunction() {
  var element = document.getElementById("myDIV");
   element.classList.toggle("myStyle");
} var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");function myFunction2() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
