"use strict";

const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add("navbar--dark");
    } else {
        navbar.classList.remove("navbar--dark");
    }
});

// Handle scrolling when tapping on the navbar menu

const navbarMenu = document.querySelector(".navbar__menu");

navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if(link == null){
        return;
    }
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior : "smooth"});
});

// Handle click on "contact me" button on home

const homeDescription = document.querySelector(".home__contact");

homeDescription.addEventListener('click', (event) => {
    const link = event.target.dataset.link;
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior : "smooth"});
})