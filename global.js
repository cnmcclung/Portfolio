console.log("IT’S ALIVE!");

function $$(selector, context = document) {
  return Array.from(context.querySelectorAll(selector));
}

let pages = [
  { url: 'index.html', title: 'Home' },
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
//   a.toggleAttribute(
//     "target",
//     a.host !== location.host
//   );


  //here
  if (a.host !== location.host) {
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  }


  nav.append(a);
}


// THEN get links
let navLinks = $$("nav a");

// Highlight current page

// let currentLink = navLinks.find(
//   (a) => a.host === location.host && a.pathname === location.pathname
// );

let currentLink = navLinks.find((a) => {
  let linkPath = a.pathname.replace(/index\.html$/, "").replace(/\/$/, "");
  let pagePath = location.pathname.replace(/index\.html$/, "").replace(/\/$/, "");
  return a.host === location.host && linkPath === pagePath;
});


currentLink?.classList.add("current");



document.body.insertAdjacentHTML(
  "afterbegin",
  `
  <label class="color-scheme">
    Theme:
    <select id="theme-select">
      <option value="light dark">Automatic</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  </label>
  `
);

const select = document.querySelector("#theme-select");

// Load saved preference
const saved = localStorage.getItem("theme");
if (saved) {
  document.documentElement.style.colorScheme = saved;
  select.value = saved;
}

// Listen for changes
select.addEventListener("change", () => {
  const value = select.value;
  document.documentElement.style.colorScheme = value;
  localStorage.setItem("theme", value);
});
















export async function fetchJSON(url) {

  try {
    // Fetch the JSON file from the given URL
    const response = await fetch(url);
    console.log(response);
    if (!response.ok) {
      throw new Error(`Failed to fetch projects: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching or parsing JSON data:', error);
  }
}

// export function renderProjects(project, containerElement) {
//     containerElement.innerHTML = '';

// }

export function renderProjects(projects, containerElement, headingLevel = 'h2') {
  // 1. Validate container
  if (!containerElement) {
    console.error('Container element is not valid');
    return;
  }

  // 2. Clear old content
  containerElement.innerHTML = '';

  // 3. Loop through projects
  projects.forEach(project => {
    const article = document.createElement('article');

    article.innerHTML = `
      <${headingLevel}>${project.title}</${headingLevel}>
      <img src="${project.image}" alt="${project.title}">
      <p>${project.description}</p>
    `;

    containerElement.appendChild(article);
  });
}


export async function fetchGitHubData(username) {
  return fetchJSON(`https://api.github.com/users/${username}`);
}

// export async function fetchGitHubData(username) {
//   const res = await fetch(`https://api.github.com/users/${username}`);
//   return res.json();
// }