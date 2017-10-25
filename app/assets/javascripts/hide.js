function hideWhenClicked() {
  let elem = document.getElementById("hideThis")
  if (elem.style.display === "none") {
    elem.style.display = "block"
  } else {
    elem.style.display = "none"
  }
}
