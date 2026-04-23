import { fetchJSON, renderProjects } from '../global.js';

const projects = await fetchJSON('../lib/projects.json');

// select container
const projectsContainer = document.querySelector('.projects');

// render projects
renderProjects(projects, projectsContainer, 'h2');

// count projects
const count = projects.length;

// update title
const title = document.querySelector('.projects-title');
title.textContent = `Projects (${count})`;