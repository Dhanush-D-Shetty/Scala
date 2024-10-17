import "./App.css";
import About from "./components/About";
import Featured from "./components/Featured";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Solutions from "./components/Solutions";
import Blog from "./components/Blog";
import SocialMedia from "./components/SocialMedia";

function App() {
  return (
    <div className="relative overflow-hidden">
      <div className="fixed top-0 left-0 z-50">
        <Header />
      </div>
      <SocialMedia />
      <Landing />
      <Solutions />
      <About />
      <Featured />

      <GetInTouch />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
