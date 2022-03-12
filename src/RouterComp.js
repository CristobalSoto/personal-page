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
            <Link to="/experience">My Experience</Link>
          </li>
          <li>
            <Link to="/hireme">Faq Recruiters</Link>
          </li>
          <li>
            <Link to="/more">More about myself</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/more" element={<More />}/>
        <Route path="/hireme" element={<Faq />}/>
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </div>
  </Router>
)

export default RouterComp