

var buttonScroll = document.querySelector(".scrollToTop");

window.onscroll = function() {
    if(scrollY > 80 ) {
        buttonScroll.style.right = "3%";
    } else {
        buttonScroll.style.right = "-100%";
    }
}

buttonScroll.onclick = function() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}