const divStyle = {
  backgroundColor: '#5ebedb',
  width: '100%',
  minHeight: '142px',
  marginTop: '40px',
  textAlign: 'center',
  fontSize: '14px',
  color: 'white'
}

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-around'
}

const Footer = () => {
  return (
    <div style={divStyle}>
      Contact information
      <div style={containerStyle}>
        <div>
        <ul>
          <li>
            <a href="/experience">My Experience</a>
          </li>
          <li>
            <a href="/hireme">Faq Recruiters</a>
          </li>
          <li>
            <a href="/more">More about myself</a>
          </li>
        </ul>
        </div>
        <div>
          Right
        </div>
      </div>
    </div>
  )
}
export default Footer