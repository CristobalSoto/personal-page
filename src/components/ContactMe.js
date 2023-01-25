const containerStyle = {
  display: 'flex',
  justifyContent: 'space-around'
}
const innerDiv = {
  display: 'block',
  textAlign: 'left'
}

const whatsappIcon = {
  color: '#075e54',
  marginRight: '5px',
}
const emailIcon = {
  color: 'black',
  marginRight: '5px',
}

const headerStyle ={
  margin: '6px 0 6px 0',
  color: '#3b7b8f'
}

const ContactMe = () => (
  <div style={containerStyle}>
    <div style={innerDiv} >
      <h3 style={headerStyle}>Contact Me</h3>
      <div>
        <i style={emailIcon} className="fa-regular fa-envelope"></i>
        <a href="mailto:cristobalsv92@gmail.com">Send me an email</a> <br/>
      </div>
      <div>
        <i style={whatsappIcon} className="fa-brands fa-whatsapp"></i> 
        <a href="https://wa.me/+56965684955">Whatsapp</a>
      </div>
    </div>
    <div>
    <h3 style={headerStyle}>Socials</h3>
    <div>
        <i style={emailIcon} className="fa-brands fa-instagram"></i>
        <a href="https://www.instagram.com/cristobalsotito/">Instagram</a> <br/>
      </div>
    </div>
  </div>
)

export default ContactMe;