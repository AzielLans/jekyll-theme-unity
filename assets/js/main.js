const nav = document.querySelector("#nav");
const nav_scrim = document.querySelector("#nav-scrim");
const active_page = window.location.pathname;
const nav_links = document.querySelectorAll(".nav-links");
const wrapper_body = document.querySelectorAll("#wrapper");
const toc = document.querySelectorAll("#toc");
let value = window.innerWidth;

document.querySelector("#checkbtn").onclick = function () {
  new Animation("site-animations-show", "site-animations-hide");
  nav_scrim.style.display = "block";
  disableScroll();
};
document.querySelector("#closebtn").onclick = function () {
  new Animation("site-animations-hide", "site-animations-show");
  nav_scrim.style.display = "none";
  enableScroll();
  setTimeout(() => {
    nav.classList.remove("site-animations-hide");
  }, 60);
};
nav_scrim.onclick = function () {
  new Animation("site-animations-hide", "site-animations-show");
  nav_scrim.style.display = "none";
  enableScroll();
  setTimeout(() => {
    nav.classList.remove("site-animations-hide");
  }, 60);
};
class Animation {
  constructor(add, remove) {
    nav.classList.remove(remove);
    nav.classList.add(add);
  }
}

function disableScroll() {
  // Get the current page scroll position
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
    // if any scroll is attempted,
    // set this to the previous value
    (window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    });
}

function enableScroll() {
  window.onscroll = function () {};
}

nav_links.forEach((link) => {
    link.classList.remove("active");
  if (link.href.includes(`${active_page}`)) {
    link.classList.add("active");
  }
  else {
    if (window.location.pathname.includes("/Post/")) {
      if (link.href.includes("Post")) {
        link.classList.add("active");
      }
    }
  }
});
function checkvalue() {
  if (value == 90) {
    nav_scrim.style.display = "none";
    enableScroll();
  }
}
window.addEventListener('DOMContentLoaded', () => {

  const observer = new IntersectionObserver(entries => {
    if (document.querySelector("#toc")) {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        if (entry.isIntersecting === true) {
          document.querySelector(`main li a[href="#${id}"]`).parentElement.classList.add('active');
          document.querySelector(`main li a[href="#${id}"]`).parentElement.classList.remove('decative');
        } 
        else {
          document.querySelector(`main li a[href="#${id}"]`).parentElement.classList.remove('active');
          document.querySelector(`main li a[href="#${id}"]`).parentElement.classList.add('decative');
        }
      });
    }
  });

  // Track all sections that have an `id` applied
  document.querySelectorAll('h1[id], h2[id], h3[id]').forEach((h1, h2, h3) => {
    observer.observe(h1, h2, h3);
  });
  
});
// window.onload = add_animation();

// function add_animation() {
//   wrapper_body.classList.add("wrapper-animation");
// }
