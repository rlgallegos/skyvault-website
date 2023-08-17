import './App.css';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Gallery2 from './components/Gallery2';
import QA from './components/QA';
import Contact from './components/Contact';
import Help from './components/Help';
import Help2 from './components/Help2';
import Privacy from './components/Privacy';


function App() {
  return (
    <div className="App">
        <Home />
        <Gallery />
        <Gallery2 />
        <QA />
        <Help />
        <Help2 />
        <Contact />
        <Privacy />
    </div>
  );
}

export default App;
