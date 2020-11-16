let a = document.getElementsByTagName("a");

function init() {
  for (let item of a) {
    if (item.href == "https://39domia.github.io/uni-corp/" || item.href == "")
      item.href = "javascript:;";
  }
}

function createAccordion() {
  var acc = document.getElementsByClassName("feature__accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("feature__accordion--active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
}
document.getElementById("header__nav-table-list").addEventListener("click", turnOfOverlay);
function turnOfOverlay(e) {
  let navCheckbox = document.getElementById("header__nav-checkbox");
  if (e.target.localName == "a") {
    navCheckbox.checked = false;
  }
}

function documentReady() {
  init();
  createAccordion();
}

documentReady();
