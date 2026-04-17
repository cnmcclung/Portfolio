console.log("IT’S ALIVE!");

function $$(selector, context = document) {
  return Array.from(context.querySelectorAll(selector));
}

let pages = [
  { url: '', title: 'Home' },
  { url: 'projects/', title: 'Projects' },
  { url: 'resume/', title: 'Resume' },
  { url: 'contact/', title: 'Contact' },
  { url: 'https://github.com/cnmcclung', title: 'GitHub' }
];

const BASE_PATH =
  (location.hostname === "localhost" || location.hostname === "127.0.0.1")
    ? "/"
    : "/Portfolio/"; // make sure this matches your repo name exactly

// Create nav FIRST
let nav = document.createElement("nav");
document.body.prepend(nav);

// Build links
for (let p of pages) {
  let url = p.url;
  let title = p.title;

  url = !url.startsWith("http") ? BASE_PATH + url : url;

  nav.insertAdjacentHTML(
    "beforeend",
    `<a href="${url}">${title}</a>`
  );
}

// THEN get links
let navLinks = $$("nav a");

// Highlight current page
let currentLink = navLinks.find(
  (a) => a.host === location.host && a.pathname === location.pathname
);

currentLink?.classList.add("current");