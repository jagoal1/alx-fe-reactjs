import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import WelcomeMessage from './components/WelcomeMessage'; // ✅ THIS IS MISSING

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <WelcomeMessage /> {/* ✅ THIS IS MISSING */}
      <UserProfile
        name="Alice"
        age={25}
        bio="Loves hiking and photography"
      />
      <Footer />
    </div>
  );
}

export default App;
