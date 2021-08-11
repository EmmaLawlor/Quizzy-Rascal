// Rules Modal
let modal = document.getElementById("rulesModal");

let rulesBtn = document.getElementById("rules-btn");

let closeBtn = document.getElementsByClassName("close")[0];

if (rulesBtn) {
  rulesBtn.addEventListener('click', function () {
    modal.style.display = "block";
  });
}

if (closeBtn) {
  closeBtn.onclick = function () {
    modal.style.display = "none";
  };
}