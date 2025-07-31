import axios from 'axios';

export const fetchUserData = async (username = '', location = '', minRepos = '') => {
  try {
    let query = '';
    if (username) query += `${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>${minRepos}`;

    const searchRes = await axios.get(`https://api.github.com/search/users?q=${query}`);
    const users = searchRes.data.items;

    // Fetch detailed data for each user
    const detailedUsers = await Promise.all(
      users.map(async (user) => {
        const userRes = await axios.get(`https://api.github.com/users/${user.login}`);
        return userRes.data;
      })
    );

    return detailedUsers;
  } catch (error) {
    throw error;
  }
};
