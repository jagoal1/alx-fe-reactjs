import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searched, setSearched] = useState(false); // new state to track submission

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUsers([]);
    setSearched(true); // mark as searched

    try {
      const data = await fetchUserData(username, location, minRepos);
      if (data.length === 0) {
        setError(true);
      } else {
        setUsers(data);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h1 className="text-2xl font-bold mb-4">GitHub User Search</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Min Repositories"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center">Loading...</p>}

      {users.length === 0 && searched && !loading && (
        <p className="text-center text-red-500">Looks like we can't find the user</p>
      )}

      {users.length > 0 && (
        <div className="grid gap-4">
          {users.map((user) => (
            <div key={user.id} className="bg-white p-4 rounded shadow flex items-center gap-4">
              <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
              <div>
                <h2 className="text-lg font-semibold">{user.name || user.login}</h2>
                <p>Location: {user.location || 'Not available'}</p>
                <p>Repos: {user.public_repos}</p>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
