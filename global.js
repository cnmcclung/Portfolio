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

  // Create link element instead of using HTML string
  let a = document.createElement("a");
  a.href = url;
  a.textContent = title;

  // Highlight current page
  a.classList.toggle(
    "current",
    a.host === location.host && a.pathname === location.pathname
  );

  // Open external links in new tab
  a.toggleAttribute(
    "target",
    a.host !== location.host
  );

  nav.append(a);
}

// THEN get links
//let navLinks = $$("nav a");

// Highlight current page

// let currentLink = navLinks.find(
//   (a) => a.host === location.host && a.pathname === location.pathname
// );

// let currentLink = navLinks.find((a) => {
//   let linkPath = a.pathname.replace(/index\.html$/, "").replace(/\/$/, "");
//   let pagePath = location.pathname.replace(/index\.html$/, "").replace(/\/$/, "");
//   return a.host === location.host && linkPath === pagePath;
// });


// currentLink?.classList.add("current");

// document.body.insertAdjacentHTML(
//   "afterbegin",
//   `
//   <label class="color-scheme">
//     Theme:
//     <select id="theme-select">
//       <option value="light dark">Automatic</option>
//       <option value="light">Light</option>
//       <option value="dark">Dark</option>
//     </select>
//   </label>
//   `
// );

document.body.insertAdjacentHTML(
  "afterbegin",
  
  <label class="color-scheme">
    Theme:
    <select id="theme-select">
      <option value="light dark">Automatic</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  </label>
  
);

const select = document.getElementById("theme-select");

select.addEventListener("change", (e) => {
  document.documentElement.style.colorScheme = e.target.value;
});