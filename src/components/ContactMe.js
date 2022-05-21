const containerStyle = {
  display: 'flex',
  justifyContent: 'space-around'
}
const innerDiv = {
  display: 'block',
}

const ContactMe = () => (
  <div style={containerStyle}>
    <div style={innerDiv} >
      <a href="mailto:test@example.com">Send me an email</a> <br/>
      <a href="https://wa.me/+56965684955">Whatsapp</a>
    </div>
    <div>
      Right
    </div>
  </div>
)

export default ContactMe;