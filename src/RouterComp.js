import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Faq from './views/Faq';
import Experience from './views/Experience';
import Home from './views/Home';
import More from './views/More';

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginLeft: '20%',
  marginRight: '20%'
}

const RouterComp = () => (
  <Router>
    <div>
      <nav >
        <ul style={navStyle}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/experience">About Me</Link>
          </li>
          <li>
            <Link to="/faq">FAQ Recruiters</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/more" element={<More />}/>
        <Route path="/faq" element={<Faq />}/>
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </div>
  </Router>
)

export default RouterComp