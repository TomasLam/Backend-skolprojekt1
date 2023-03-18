
import './App.css';

import Home from "./Pages/Home"
import Contact from './Pages/Contact';
import { HashRouter as Router, Route,} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
          <Route path="/">
            <Home />
          </Route> 
          <Route path="/Contact">
            <Contact />
          </Route>        
      </Router>
    </div>
  );
}

export default App;
