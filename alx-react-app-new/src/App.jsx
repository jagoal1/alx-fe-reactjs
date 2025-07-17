import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter'; // ✅ Correct import

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile
        name="Alice"
        age={25}
        bio="Loves hiking and photography"
      />
      <Counter /> {/* ✅ Make sure it's used */}
      <Footer />
    </div>
  );
}

export default App;
