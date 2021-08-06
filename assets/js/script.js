// Get the modal
let modal = document.getElementById("rulesModal");

// Get the button that opens the modal
let rulesBtn = document.getElementById("rules-btn");

// Get the <span> element that closes the modal
let close = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
rulesBtn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
close.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}