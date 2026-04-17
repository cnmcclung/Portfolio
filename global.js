console.log('IT’S ALIVE!');

function $$(selector, context = document) {
  return Array.from(context.querySelectorAll(selector));
}

// Get all nav links
let navLinks = $$("nav a");



let currentLink = navLinks.find(
  (a) => a.href === location.href
);

// Add the class (safe version)
currentLink?.classList.add("current");