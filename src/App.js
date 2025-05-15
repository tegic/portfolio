import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import Navbar from './components/high-level/Navbar';
import Projects from './components/high-level/Projects';
import AboutMe from './components/high-level/AboutMe';
import Contacts from './components/high-level/Contacts';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={ <AboutMe></AboutMe> }/>
        <Route path='/projects' element={ <Projects></Projects> }/>
        <Route path='/contact' element={ <Contacts></Contacts> }/>
      </Routes>
    </Router>
  );
}

export default App;
