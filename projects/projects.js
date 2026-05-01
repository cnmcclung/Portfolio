import { fetchJSON, renderProjects } from '../global.js';
import * as d3 from 'https://cdn.jsdelivr.net/npm/d3@7.9.0/+esm';


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

let arc = d3.arc().innerRadius(0).outerRadius(50)({
  startAngle: 0,
  endAngle: 2 * Math.PI,
});

d3.select('svg').append('path').attr('d', arc).attr('fill', 'red');