import { fetchJSON, renderProjects, fetchGithubData } from './global.js';

const projects = await fetchJSON('./lib/projects.json');

// get first 3 projects
const latestProjects = projects.slice(0, 3);

// select container
const projectsContainer = document.querySelector('.projects');

// render them
renderProjects(latestProjects, projectsContainer, 'h2');

const githubData = await fetchGitHubData('giorgianicolaou');
const profileStats = document.querySelector('#profile-stats');

if (profileStats) {
  profileStats.innerHTML = `
        <dl>
          <dt>Public Repos:</dt><dd>${githubData.public_repos}</dd>
          <dt>Public Gists:</dt><dd>${githubData.public_gists}</dd>
          <dt>Followers:</dt><dd>${githubData.followers}</dd>
          <dt>Following:</dt><dd>${githubData.following}</dd>
        </dl>
    `;
}