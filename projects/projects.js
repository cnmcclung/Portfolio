
import { fetchJSON, renderProjects } from '../global.js';
const projects = await fetchJSON('../lib/projects.json');
const projectsContainer = document.querySelector('.projects');
renderProjects(projects, projectsContainer, 'h2');

// 🔢 count projects
const count = projects.length;

// 🎯 select the title element
const title = document.querySelector('.projects-title');

// 📝 update the text
title.textContent = `Projects (${count})`;

// render projects
const projectsContainer = document.querySelector('.projects');
renderProjects(projects, projectsContainer, 'h2');