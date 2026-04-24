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
    <h2>My GitHub Stats</h2>
    <dl class="stats-grid">
      <dt>Followers</dt>
      <dt>Following</dt>
      <dt>Public Repos</dt>
      <dt>Public Gists</dt>

      <dd>${githubData.followers}</dd>
      <dd>${githubData.following}</dd>
      <dd>${githubData.public_repos}</dd>
      <dd>${githubData.public_gists}</dd>
    </dl>
  `;
}