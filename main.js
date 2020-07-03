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

navbarMenu.addEventListener("click", (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({ behavior: "smooth" });
});

// Handle click on "contact me" button on home

const homeDescription = document.querySelector(".home__contact");

homeDescription.addEventListener("click", (event) => {
    const link = event.target.dataset.link;
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({ behavior: "smooth" });
});

// Make home slowly fade to transparent as the window scrolls down

const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Show "arrow up" button when scrolling down
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
    if (window.scrollY > homeHeight / 2) {
        arrowUp.classList.add("visible");
    } else {
        arrowUp.classList.remove("visible");
    }
});

// Handle click on the "arrow up" button
arrowUp.addEventListener("click", () => {
    scrollIntoView("#home");
});

// Projects
const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");
workBtnContainer.addEventListener("click", (e) => {
    const filter = e.target.dataset.filter;
    console.log(filter);
});

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: "smooth" });
}
