import {
  Link,
  BrowserRouter
} from "react-router-dom";

const tittleStyle = {
  'background': '-webkit-linear-gradient(#0367a1, #2cc98d)',
  'WebkitBackgroundClip': 'text',
  'WebkitTextFillColor': 'transparent',
  'marginLeft': '20%',
  'marginRight': '20%'
}

const Header = () => {
  return (
    <h1 style={tittleStyle}>
      <BrowserRouter>
        <Link to="/">Cristóbal Soto</Link>
      </BrowserRouter>
    </h1>
  )
}
export default Header