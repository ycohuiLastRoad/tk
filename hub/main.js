function onBuilding() {
  alert("It's Still on Building, Sorry!");
}
function cLopen() {
  document.getElementById("changeLog").style.display = "block";
}
function cLclose(){
  document.getElementById("changeLog").style.display = "none";
}


// accordion (collapsable tab)
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight*100 + "px";
    } 
  });
}
