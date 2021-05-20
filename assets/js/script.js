var btnContainer = document.getElementById("product");

var btns = btnContainer.getElementsByClassName(".block__item");

for (var i = 0; i < btns.length; i++) {
btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName(".target");
    current[0].className = current[0].className.replace(".target", "");
    this.className += ".target";
});
}