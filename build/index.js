// icons container shrink when scroll down

const navbar = document.querySelector(".header-nav");
window.onscroll = () => {
  if (window.scrollY > 0.1) {
    navbar.classList.add("nav-active");
  } else {
    navbar.classList.remove("nav-active");
  }
};

// icons carousel

const carousel = document.querySelector(".carousel");
const icons = document.querySelector(".place-icons");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

icons.addEventListener("scroll", scrollCheck);

function isScrollBegin(icons) {
  return icons.scrollLeft === 0;
}
function isScrollEnd(icons) {
  return Math.ceil(icons.scrollLeft) + icons.offsetWidth >= icons.scrollWidth;
}

function scrollCheck() {
  console.log(icons.scrollLeft);
  console.log(icons.offsetWidth);
  console.log(icons.scrollWidth);

  if (isScrollBegin(icons)) {
    carousel.classList.remove("left");
  } else {
    carousel.classList.add("left");
  }
  if (isScrollEnd(icons)) {
    carousel.classList.remove("right");
  } else {
    carousel.classList.add("right");
  }
}
next.addEventListener("click", () => {
  icons.scrollLeft += icons.offsetWidth - 200;
});
prev.addEventListener("click", () => {
  icons.scrollLeft -= icons.offsetWidth - 200;
});
new ResizeObserver(scrollCheck).observe(icons);
scrollCheck();

// search nav expand

const searchNav = document.querySelector(".search-nav");
const navBar = document.querySelector(".navbar");
const x = document.querySelector(".x");
const y = document.querySelector(".y");
const largeInfo = document.querySelector(".expanded-info-where");
const smallInfo = document.querySelector(".info-where");
const headerNav = document.querySelector(".header-nav");
const main = document.querySelector(".main");

searchNav.addEventListener("click", () => {
  navBar.classList.add("expand");
  smallInfo.classList.add("remove");
  largeInfo.classList.add("add");
  headerNav.classList.add("expand");
  x.classList.remove("shrink");
});
main.addEventListener("click", () => {
  navBar.classList.remove("expand");
  smallInfo.classList.remove("remove");
  largeInfo.classList.remove("add");
  headerNav.classList.remove("expand");
  x.classList.add("shrink");
});
