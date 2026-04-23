import { fetchJSON, renderProjects, fetchGithubData } from './global.js';

const projects = await fetchJSON('./lib/projects.json');

// get first 3 projects
const latestProjects = projects.slice(0, 3);

// select container
const projectsContainer = document.querySelector('.projects');

// render them
renderProjects(latestProjects, projectsContainer, 'h2');