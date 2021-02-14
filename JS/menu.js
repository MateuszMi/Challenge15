const menu = document.querySelector("#moblie--menu");
const menuLinks = document.querySelector('.navbar__menu');



menu.addEventListener('click', function() {
    this.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});


menuLinks.addEventListener('click', function(e) {
    if (e.target.classList.contains('navbar__links')) {
        menuLinks.classList.remove('active');
        menu.classList.remove("is-active");

    }
});


let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
        menuLinks.classList.remove('active');
        menu.classList.remove("is-active");
    } else {
        document.getElementById("navbar").style.top = "-80px";
        menuLinks.classList.remove('active');
        menu.classList.remove("is-active");
    }
    prevScrollpos = currentScrollPos;

};

const closeMenu = document.getElementById("hideMenu")
closeMenu.onclick = function() {
    menuLinks.classList.remove('active');
    menu.classList.remove("is-active");
}

const closeMenuSlider = document.getElementById("slider")
closeMenuSlider.onclick = function() {
    menuLinks.classList.remove('active');
    menu.classList.remove("is-active");
}