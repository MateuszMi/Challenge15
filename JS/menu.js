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
    } else {
        document.getElementById("navbar").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;

};


const blog = document.querySelector('.blog');
const cards = document.querySelector('.cards');
const client = document.querySelector('.client');
const contact = document.querySelector('.contact');
const conteiner = document.querySelector('.conteiner');
const experience = document.querySelector('.experience');
const fo = document.querySelector('.focus');
const slider = document.querySelector('.slider')
const guide = document.querySelector('.guide');
const industries = document.querySelector('.industries');
const news = document.querySelector('.news')


blog.addEventListener('click', function(e) {
    if (e.target.classList.contains('blog')) {
        menuLinks.classList.remove('active');
        menu.classList.remove("is-active");

    }
});
cards.addEventListener('click', function(e) {
    if (e.target.classList.contains('cards')) {
        menuLinks.classList.remove('active');
        menu.classList.remove("is-active");

    }
});
client.addEventListener('click', function(e) {
    if (e.target.classList.contains('client')) {
        menuLinks.classList.remove('active');
        menu.classList.remove("is-active");

    }
});
contact.addEventListener('click', function(e) {
    if (e.target.classList.contains('contact')) {
        menuLinks.classList.remove('active');
        menu.classList.remove("is-active");

    }
});
conteiner.addEventListener('click', function(e) {
    if (e.target.classList.contains('conteiner')) {
        menuLinks.classList.remove('active');
        menu.classList.remove("is-active");

    }
});
experience.addEventListener('click', function(e) {
    if (e.target.classList.contains('experience')) {
        menuLinks.classList.remove('active');
        menu.classList.remove("is-active");

    }
});

fo.addEventListener('click', function(e) {
    if (e.target.classList.contains('focus')) {
        menuLinks.classList.remove('active');
        menu.classList.remove("is-active");

    }
});
slider.addEventListener('click', function(e) {
    if (e.target.classList.contains('slider')) {
        menuLinks.classList.remove('active');
        menu.classList.remove("is-active");

    }
});
guide.addEventListener('click', function(e) {
    if (e.target.classList.contains('guide')) {
        menuLinks.classList.remove('active');
        menu.classList.remove("is-active");

    }
});

industries.addEventListener('click', function(e) {
    if (e.target.classList.contains('industries')) {
        menuLinks.classList.remove('active');
        menu.classList.remove("is-active");

    }
});
news.addEventListener('click', function(e) {
    if (e.target.classList.contains('news')) {
        menuLinks.classList.remove('active');
        menu.classList.remove("is-active");

    }
});