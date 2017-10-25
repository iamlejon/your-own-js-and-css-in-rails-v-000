function hideWhenClicked() {
  let elem = document.getElementById("hide_this")
  if (elem.style.display === "none") {
    elem.style.display = "block"
  } else {
    elem.style.display = "none"
  }
}
