// src/services/githubService.js
import axios from 'axios';

export const searchUsers = async (username, location, minRepos) => {
  let query = '';
  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}&per_page=10`;

  const response = await axios.get(url);

  const usersWithDetails = await Promise.all(
    response.data.items.map(async (user) => {
      const details = await axios.get(`https://api.github.com/users/${user.login}`);
      return details.data;
    })
  );

  return usersWithDetails;
};
