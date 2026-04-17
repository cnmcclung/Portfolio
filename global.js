console.log('IT’S ALIVE!');

function $$(selector, context = document) {
  return Array.from(context.querySelectorAll(selector));
}

// Get all nav links
let navLinks = $$("nav a");


let currentLink = navLinks.find((a) => {
  return a.host === location.host &&
         a.pathname.replace(/index\.html$/, "") === location.pathname.replace(/index\.html$/, "");
});

currentLink?.classList.add("current");