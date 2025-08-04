export const fetchUserData = async (username, location, minRepos) => {
  const apiUrl = `https://api.github.com/search/users?q=${username ? `${username}+` : ''}type:user&per_page=10`;

  try {
    const response = await fetch(apiUrl);
    const result = await response.json();

    if (!result.items || result.items.length === 0) return [];

    const userDetails = await Promise.all(
      result.items.map(async (user) => {
        const res = await fetch(user.url);
        return await res.json();
      })
    );

    // Apply additional filters: location and minimum repositories
    const filteredUsers = userDetails.filter((user) => {
      const locationMatch = location
        ? user.location?.toLowerCase().includes(location.toLowerCase())
        : true;
      const repoMatch = minRepos ? user.public_repos >= parseInt(minRepos) : true;
      return locationMatch && repoMatch;
    });

    return filteredUsers;
  } catch (error) {
    console.error('Error fetching user data:', error);
    return [];
  }
};
