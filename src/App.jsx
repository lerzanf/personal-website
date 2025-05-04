import './App.css'

import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Profile from "./sections/Profile";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="font-inter bg-white px-6 pt-3">
      <Header />
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
