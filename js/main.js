const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const navClose = document.getElementById("nav-close");
const hamburger = document.getElementById("hamburger");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    navMenu.classList.add("hidden");
  })
);

navClose.addEventListener("click", () => {
  navMenu.classList.add("hidden");
});

hamburger.addEventListener("click", () => {
  navMenu.classList.remove("hidden");
});

// tabs
const tabs = document.querySelectorAll(".tabs-wrap ul li");
const all = document.querySelectorAll(".item-wrap");
const food = document.querySelectorAll(".food");
const snack = document.querySelectorAll(".snack");
const beverage = document.querySelectorAll(".beverage");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");

    const tabval = tab.getAttribute("data-tabs");

    all.forEach((item) => {
      item.style.display = "none";
    });

    if (tabval == "food") {
      food.forEach((item) => {
        item.style.display = "block";
      });
    } else if (tabval == "snack") {
      snack.forEach((item) => {
        item.style.display = "block";
      });
    } else if (tabval == "beverage") {
      beverage.forEach((item) => {
        item.style.display = "block";
      });
    } else {
      all.forEach((item) => {
        item.style.display = "block";
      });
    }
  });
});

// scroll up
const scrollUp = () => {
  const scrollUpBtn = document.getElementById("scrollUp");

  if (this.scrollY >= 250) {
    scrollUpBtn.classList.remove("-bottom-1/2");
    scrollUpBtn.classList.add("bottom-4");
  } else {
    scrollUpBtn.classList.add("-bottom-1/2");
    scrollUpBtn.classList.remove("bottom-4");
  }
};
window.addEventListener("scroll", scrollUp);

// change background header
const scrollHeader = () => {
  const header = document.getElementById("header");

  if (this.scrollY >= 50) {
    header.classList.add("border-b", "border-secondaryColor");
  } else {
    header.classList.remove("border-b", "border-secondaryColor");
  }
};
window.addEventListener("scroll", scrollHeader);

// dark mode
const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-toggle");

if (localStorage.getItem("mode") == "dark") {
  darkMode();
} else {
  lightMode();
}
themeBtn.addEventListener("click", (e) => {
  if (localStorage.getItem("mode") == "light") {
    darkMode();
  } else {
    lightMode();
  }
});

function darkMode() {
  html.classList.add("dark");
  themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
  localStorage.setItem("mode", "dark");
}
function lightMode() {
  html.classList.remove("dark");
  themeBtn.classList.replace("ri-sun-line", "ri-moon-line");
  localStorage.setItem("mode", "light");
}

// scroll section active
const activeLink = () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "home";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (this.scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((item) => {
    item.classList.remove("text-secondaryColor");
    if (item.href.includes(current)) {
      item.classList.add("text-secondaryColor");
    }
  });
};
window.addEventListener("scroll", activeLink);

// scroll reveal animation
document.addEventListener("DOMContentLoaded", function () {
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
  });

  sr.reveal(".home-img");
  sr.reveal(".home-content", { origin: "bottom" });

  sr.reveal(".category-card", { interval: 300 });

  sr.reveal(".promo-card-1", { origin: "left" });
  sr.reveal(".promo-card-2", { origin: "right" });

  sr.reveal(".about-img", { origin: "bottom" });
  sr.reveal(".about-content", { origin: "top" });

  sr.reveal(".menu-items", { origin: "left" });

  sr.reveal(".customer-review", { origin: "right" });

  sr.reveal(".footer");
});
