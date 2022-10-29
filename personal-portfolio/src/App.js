import './App.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { TestingSkills} from "./components/TestingSkills";
import { Projects } from "./components/Projects";
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Experience} from './components/Experience';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <TestingSkills/>
      <Skills />
      <Experience/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

