function cv() {
  var x = document.getElementById("cHover");
  if (x.innerHTML === "Sth can hAcK NASA") {
    x.innerHTML = "HTML";
  } else if (x.innerHTML === "詩,唔係呢個詩") {
    x.innerHTML = "language C";
  } else if (x.innerHTML === "Not VBA") {
    x.innerHTML = "Pure Excel";
  }
}
