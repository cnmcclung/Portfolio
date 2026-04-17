console.log('IT’S ALIVE!');

function $$(selector, context = document) {
  return Array.from(context.querySelectorAll(selector));
}

// Get all nav links
let navLinks = $$("nav a");

// Find the current page link
let currentLink = navLinks.find(
  (a) => a.host === location.host && a.pathname === location.pathname
);

// Add the class (safe version)
currentLink?.classList.add("current");