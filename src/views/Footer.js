import ContactMe from '../components/ContactMe'

const divStyle = {
  backgroundColor: '#5ebedb',
  width: '100%',
  minHeight: '142px',
  marginTop: '40px',
  textAlign: 'center',
  fontSize: '14px',
  color: 'white'
}


const Footer = () => {
  return (
    <div style={divStyle}>
      <ContactMe />
    </div>
  )
}
export default Footer