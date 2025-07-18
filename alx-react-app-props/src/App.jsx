import UserContext from './UserContext';
import ProfilePage from './ProfilePage';

function App() {
  const userData = { name: "Olayinka Sanyaolu", email: "yeankahsanya@yahoo.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
