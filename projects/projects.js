// import { fetchJSON, renderProjects } from '../global.js';
// import * as d3 from 'https://cdn.jsdelivr.net/npm/d3@7.9.0/+esm';

// let selectedIndex = -1;

// const projects = await fetchJSON('../lib/projects.json');

// // select container
// const projectsContainer = document.querySelector('.projects');

// // render projects
// renderProjects(projects, projectsContainer, 'h2');

// // count projects
// const count = projects.length;

// // update title
// const title = document.querySelector('.projects-title');
// title.textContent = `Projects (${count})`;




//---------------------------------------------------------------------------------


// let arcGenerator = d3.arc().innerRadius(0).outerRadius(50);

// let arc = d3.arc().innerRadius(0).outerRadius(50)({
//   startAngle: 0,
//   endAngle: 2 * Math.PI,
// });


// let data = [1, 2];
// let total = 0;

// for (let d of data) {
//   total += d;
// }

// let angle = 0;
// let arcData = [];

// for (let d of data) {
//   let endAngle = angle + (d / total) * 2 * Math.PI;
//   arcData.push({ startAngle: angle, endAngle });
//   angle = endAngle;
// }

// let arcs = arcData.map((d) => arcGenerator(d));
// let colors = ['gold', 'purple'];

// let svg = d3.select('svg');

// arcs.forEach((arc, idx) => {
//   svg.append('path')
//     .attr('d', arc)
//     .attr('fill', colors[idx]);
// });


// let rolledData = d3.rollups(
//   projects,
//   (v) => v.length,
//   (d) => d.year,
// );

// let data = rolledData.map(([year, count]) => {
//   return { value: count, label: year };
// });



// let sliceGenerator = d3.pie().value((d) => d.value);
// let arcData = sliceGenerator(data);

// let arcGenerator = d3.arc()
//   .innerRadius(0)
//   .outerRadius(50);

// let arcs = arcData.map((d) => arcGenerator(d));

// let colors = d3.scaleOrdinal(d3.schemeTableau10);

// let svg = d3.select('svg');

// arcs.forEach((arc, idx) => {
//   svg.append('path')
//     .attr('d', arc)
//     .attr('fill', colors(idx));
// });

// let legend = d3.select('.legend');

// data.forEach((d, idx) => {
//   legend.append('li')
//     .attr('style', `--color:${colors(idx)}`)
//     .attr('class', 'legend-item')
//     .html(`<span class="swatch"></span> ${d.label} <em>(${d.value})</em>`);
// });







// searchInput.addEventListener('change', (event) => {
//   // update query value
//   query = event.target.value;
//   // filter projects
//   let filteredProjects = projects.filter((project) => {
//     let values = Object.values(project).join('\n').toLowerCase();
//     return values.includes(query.toLowerCase());
//   });
//   // render filtered projects
//   renderProjects(filteredProjects, projectsContainer, 'h2');
// });






// function renderPieChart(projectsGiven) {
//   // re-calculate rolled data
//   let newRolledData = d3.rollups(
//     projectsGiven,
//     (v) => v.length,
//     (d) => d.year,
//   );

//   // re-calculate data
//   let newData = newRolledData.map(([year, count]) => {
//     return { year, count };
//   });

//   // pie generator
//   let newSliceGenerator = d3.pie().value(d => d.count);

//   // arc data
//   let newArcData = newSliceGenerator(newData);

//   // arc generator (assumes you already defined radius elsewhere)
//   let newArc = d3.arc()
//     .innerRadius(0)
//     .outerRadius(40);

//   // SELECT SVG + CLEAR OLD PATHS
//   let newSVG = d3.select('#projects-pie-plot');
//   newSVG.selectAll('path').remove();

//   // DRAW PIE SLICES
//   newSVG
//     .selectAll('path')
//     .data(newArcData)
//     .enter()
//     .append('path')
//     .attr('d', newArc)
//     .attr('fill', (d, i) => d3.schemeTableau10[i % 10]);

//   // CLEAR LEGEND
//   let legend = d3.select('.legend');
//   legend.selectAll('*').remove();

// }

// renderPieChart(projects);





// legend
//   .selectAll('li')
//   .data(newData)
//   .enter()
//   .append('li')
//   .attr('class', 'legend-item')
//   .html((d, i) => `
//     <span class="swatch" style="background:${d3.schemeTableau10[i % 10]}"></span>
//     ${d.year} <em>(${d.count})</em>
//   `);


























// function renderPieChart(projectsGiven) {
//     let newRolledData = d3.rollups(
//         projectsGiven,
//         v => v.length,
//         d => d.year
//     );

//     let newData = newRolledData.map(([year, count]) => ({
//         year,
//         count
//     }));

//     let pie = d3.pie().value(d => d.count);
//     let arcData = pie(newData);

//     let arc = d3.arc()
//         .innerRadius(0)
//         .outerRadius(40);

//     let svg = d3.select('#projects-pie-plot');
//     svg.selectAll('path').remove();

//     // svg.selectAll('path')
//     //     .data(arcData)
//     //     .enter()
//     //     .append('path')
//     //     .attr('d', arc)
//     //     .attr('fill', (d, i) => d3.schemeTableau10[i % 10]);

//     let legend = d3.select('.legend');
//     legend.selectAll('*').remove();

//     newSVG
//         .selectAll('path')
//         .data(newArcData)
//         .enter()
//         .append('path')
//         .attr('d', newArc)
//         .attr('fill', (d, i) => d3.schemeTableau10[i % 10])
//         .on('click', (_, i) => {


//         // toggle selection
//         selectedIndex = selectedIndex === i ? -1 : i;

//         // update pie slices
//         newSVG.selectAll('path')
//         .attr('class', (_, idx) =>
//             idx === selectedIndex ? 'selected' : ''
//             );

//         // update legend
//         legend.selectAll('li')
//             .attr('class', (_, idx) =>
//                 `legend-item ${idx === selectedIndex ? 'selected' : ''}`
//             );
//         });




//     legend.selectAll('li')
//         .data(newData)
//         .enter()
//         .append('li')
//         .attr('class', 'legend-item')
//         .html((d, i) => `
//             <span class="swatch" style="background:${d3.schemeTableau10[i % 10]}"></span>
//             ${d.year} <em>(${d.count})</em>
//         `);
//     }

//---------------------------------------------------------------------------------
// function renderPieChart(projectsGiven) {
//     let newRolledData = d3.rollups(
//         projectsGiven,
//         v => v.length,
//         d => d.year
//     );

//     let newData = newRolledData.map(([year, count]) => ({
//         year,
//         count
//     }));

//     let pie = d3.pie().value(d => d.count);
//     let arcData = pie(newData);

//     let arc = d3.arc()
//         .innerRadius(0)
//         .outerRadius(40);
        

//     let svg = d3.select('#projects-pie-plot');
//     svg.selectAll('path').remove();
    

//     let legend = d3.select('.legend');
//     legend.selectAll('*').remove();


//     svg
//       .selectAll('path')
//       .data(arcData)
//       .enter()
//       .append('path')
//       .attr('d', arc)
//       .attr('fill', (d, i) => d3.schemeTableau10[i % 10])

//       .on('click', (_, i) => {

//         selectedIndex = selectedIndex === i ? -1 : i;
//         renderPieChart(projectsGiven);

//         // svg.selectAll('path')
//         //   .attr('class', (_, idx) =>
//         //     idx === selectedIndex ? 'selected' : ''
//         //   );

//         // legend.selectAll('li')
//         //   .attr('class', (_, idx) =>
//         //     `legend-item ${idx === selectedIndex ? 'selected' : ''}`
//         //   );
//       });






//     legend.selectAll('li')
//         .data(newData)
//         .enter()
//         .append('li')
//         .attr('class', 'legend-item')
//         .html((d, i) => `
//             <span class="swatch" style="background:${d3.schemeTableau10[i % 10]}"></span>
//             ${d.year} <em>(${d.count})</em>
//         `);
// }
//-----------------------------------------------------------------

// function renderPieChart(projectsGiven) {
//     let newRolledData = d3.rollups(
//         projectsGiven,
//         v => v.length,
//         d => d.year
//     );

//     let newData = newRolledData.map(([year, count]) => ({
//         year,
//         count
//     }));

//     let pie = d3.pie().value(d => d.count);
//     let arcData = pie(newData);

//     let arc = d3.arc()
//         .innerRadius(0)
//         .outerRadius(40);

//     let svg = d3.select('#projects-pie-plot');
//     let legend = d3.select('.legend');

//     // remove old elements
//     svg.selectAll('path').remove();
//     legend.selectAll('*').remove();

//     // PIE CHART
//     svg.selectAll('path')
//         .data(arcData)
//         .enter()
//         .append('path')
//         .attr('d', arc)
//         .attr('fill', (d, i) => d3.schemeTableau10[i % 10])
//         // .attr('class', (d, i) =>
//         //     i === selectedIndex ? 'selected' : ''
//         // )
//         .attr('fill', (d, i) => i === selectedIndex ? 'rgb(255, 166, 0)' : d3.schemeTableau10[i % 10])
//         .on('click', (_, i) => {

//             // toggle selection
//             selectedIndex = selectedIndex === i ? -1 : i;

//             // re-render everything with updated selection
//             renderPieChart(projectsGiven);
//         });

//     // LEGEND
//     legend.selectAll('li')
//     .data(newData)
//     .join('li')
//     .attr('class', 'legend-item')
//     .classed('selected', (d, i) => i === selectedIndex)
//     .html((d, i) => `
//         <span class="swatch" style="background:${d3.schemeTableau10[i % 10]}"></span>
//         ${d.year} <em>(${d.count})</em>
//     `);
// }



// renderPieChart(projects);

// let searchInput = document.querySelector('.searchBar');


// searchInput.addEventListener('input', (event) => {
//   let query = event.target.value;

//   let filteredProjects = projects.filter((project) => {
//     let values = Object.values(project).join('\n').toLowerCase();
//     return values.includes(query.toLowerCase());
//   });

//   renderProjects(filteredProjects, projectsContainer, 'h2');
//   renderPieChart(filteredProjects);
// });

import { fetchJSON, renderProjects } from '../global.js';
import * as d3 from 'https://cdn.jsdelivr.net/npm/d3@7.9.0/+esm';

const projects = await fetchJSON('../lib/projects.json');
const projectsContainer = document.querySelector('.projects');

const titleEl = document.querySelector('.projects-title');
if (titleEl) titleEl.textContent = `Projects (${projects.length})`;

let query = '';
let selectedYear = null;

const arcGenerator = d3.arc().innerRadius(0).outerRadius(50);
const colors = d3.scaleOrdinal(d3.schemeTableau10);

function getFilteredBySearch() {
  return projects.filter((project) => {
    const values = Object.values(project).join('\n').toLowerCase();
    return values.includes(query.toLowerCase());
  });
}

function applyFilters() {
  let filtered = getFilteredBySearch();

  if (selectedYear !== null) {
    filtered = filtered.filter((p) => p.year === selectedYear);
  }

  renderProjects(filtered, projectsContainer, 'h2');
}

function renderPieChart(projectsGiven) {
  const rolledData = d3.rollups(projectsGiven, (v) => v.length, (d) => d.year);
  const data = rolledData.map(([year, count]) => ({ value: count, label: year }));

  const svg = d3.select('#projects-pie-plot');
  svg.selectAll('path').remove();
  const legend = d3.select('.legend');
  legend.selectAll('li').remove();

  if (data.length === 0) return;

  let selectedIndex = selectedYear !== null
    ? data.findIndex((d) => d.label === selectedYear)
    : -1;

  const sliceGenerator = d3.pie().value((d) => d.value);
  const arcData = sliceGenerator(data);
  const arcs = arcData.map((d) => arcGenerator(d));

  arcs.forEach((arc, i) => {
    svg
      .append('path')
      .attr('d', arc)
      .attr('fill', colors(i))
      .attr('class', i === selectedIndex ? 'selected' : '')
      .on('click', () => {
        const clickedYear = data[i].label;
        selectedYear = selectedYear === clickedYear ? null : clickedYear;
        selectedIndex = selectedYear !== null
          ? data.findIndex((d) => d.label === selectedYear)
          : -1;

        svg.selectAll('path')
          .attr('class', (_, idx) => idx === selectedIndex ? 'selected' : '');
        legend.selectAll('li')
          .attr('class', (_, idx) =>
            idx === selectedIndex ? 'legend-item selected' : 'legend-item'
          );

        applyFilters();
      });
  });

  data.forEach((d, idx) => {
    legend
      .append('li')
      .attr('class', idx === selectedIndex ? 'legend-item selected' : 'legend-item')
      .attr('style', `--color:${colors(idx)}`)
      .html(`<span class="swatch"></span> ${d.label} <em>(${d.value})</em>`)
      .on('click', () => {
        selectedYear = selectedYear === d.label ? null : d.label;
        selectedIndex = selectedYear !== null
          ? data.findIndex((dl) => dl.label === selectedYear)
          : -1;

        svg.selectAll('path')
          .attr('class', (_, i) => i === selectedIndex ? 'selected' : '');
        legend.selectAll('li')
          .attr('class', (_, i) =>
            i === selectedIndex ? 'legend-item selected' : 'legend-item'
          );

        applyFilters();
      });
  });
}

renderProjects(projects, projectsContainer, 'h2');
renderPieChart(projects);

const searchInput = document.querySelector('.searchBar');
searchInput.addEventListener('input', (event) => {
  query = event.target.value;
  const filtered = getFilteredBySearch();
  renderPieChart(filtered);
  applyFilters();
});