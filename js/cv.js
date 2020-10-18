function cvHtml() {
  var cvHtml = document.getElementById("cHoverHtml");
  if (cvHtml.innerHTML === "Something can hAcK NASA") {
    cvHtml.innerHTML = "HTML";
  } else {
     cvHtml.innerHTML = "Something can hAcK NASA"
  }
}
function cvLangC() {
  var cvLangC = document.getElementById("cHoverLangC");
  if (cvLangC.innerHTML === "詩,唔係呢個詩") {
    cvLangC.innerHTML = "Language C";
  } else {
     cvLangC.innerHTML = "詩,唔係呢個詩"
  }
}
function cvExcel() {
  var cvExcel = document.getElementById("cHoverExcel");
  if (cvExcel.innerHTML === "Not VBA") {
    cvExcel.innerHTML = "Pure Excel";
  } else {
     cvExcel.innerHTML = "Not VBA"
  }
}
function cvJs() {
  var cvJs = document.getElementById("cHoverJs");
  if (cvJs.innerHTML === "true === 1 output false") {
    cvJs.innerHTML = "Javascript (which now using)";
  } else {
     cvJs.innerHTML = "true === 1 output false"
  }
}
// Get the Sidebar
var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
    overlayBg.style.display = "none";
  } else {
    mySidebar.style.display = 'block';
    overlayBg.style.display = "block";
  }
}

// Close the sidebar with the close button
function w3_close() {
  mySidebar.style.display = "none";
  overlayBg.style.display = "none";
}
