import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Publications from './components/Publications/Publications';



function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <NavBar />
          <main className="main-content">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/publications" element={<Publications />} />
              {/* <Route path="/research" element={<Research />} /> */}
              {/* Default route to Home */}
              <Route path="/" element={<Navigate replace to="/home" />} />
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
