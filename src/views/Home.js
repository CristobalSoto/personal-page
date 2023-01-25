import avatar from '../assets/avatarCircle.png'

const containerStyle = {
  display: 'flex',
  //justifyContent: 'space-between'
}

const Home = () => (
  <section>
    <div style={containerStyle}>
      <div>
        <h1>Hello!</h1>
        <p>Welcome to my web page, in this page you can find information about my experiences, preferences and quirks.</p>
        <p>I am a software developer, my level is at semi senior and I have a 
          variety of experience with a lots of different programming languages</p>
        <p>I am big nerd regarding programming and my hobbies.</p>
        <p>If you want to know more about myself take a look around and if you think I will be a good fit for in the offer you have contact me.</p>
        <p>You can get my contact information at the bottom of the page.</p>
      </div>
      <div>
        <img width="350" src={avatar} />
      </div>
    </div>
  </section>
)

export default Home;