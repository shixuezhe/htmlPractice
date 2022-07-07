var container = document.querySelector(".container");
var title = document.querySelector(".title");
var content = document.querySelector(".content");
var right_nav = document.querySelector(".right_nav");
var toTop = document.querySelector(".toTop");
var right_nav_Y = right_nav.offsetTop;
var contentY = content.offsetTop;

document.addEventListener('scroll', function(e){
    if(window.scrollY >= contentY) {
        right_nav.style.position = 'fixed';
        right_nav.style.top = right_nav_Y - contentY + 'px';
        toTop.style.display = 'block';
    }else {
        right_nav.style.position = 'absolute';
        right_nav.style.top = '300px';
        toTop.style.display = 'none';
    }
})

toTop.addEventListener('click', function(e){
    window.scrollTo(0, 0)
})