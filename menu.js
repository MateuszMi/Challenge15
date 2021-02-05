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