let a = document.getElementsByTagName("a");

function init() {
    for (let item of a) {
        if (item.href == "http://127.0.0.1:5500/index.html" || item.href == "")
            item.href = "javascript:;"
    }
}
init();