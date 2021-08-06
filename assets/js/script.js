// Rules Modal
let modal = document.getElementById("rulesModal");

let rulesBtn = document.getElementById("rules-btn");

let close = document.getElementsByClassName("close")[0];
rulesBtn.onclick = function() {
  modal.style.display = "block";
}

close.onclick = function() {
  modal.style.display = "none";
}
