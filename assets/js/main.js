let a = document.getElementsByTagName("a");

function init() {
    for (let item of a) {
        if (item.href == "http://127.0.0.1:5500/index.html" || item.href == "")
            item.href = "javascript:;"
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
init();
createAccordion();