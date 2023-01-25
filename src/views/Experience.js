import {courseraCertifications} from '../utils/constants'

const Experience = () => {
  return (
    <section>
      <div>
        <h2>Summary</h2>
        <p>
        I am a software developer with 5 years of experience, specializing 
        in full-stack development using Django and React, with a strong 
        focus on teamwork. I have a comprehensive understanding of both 
        front-end and back-end development, and have experience building 
        complete web applications using Django, a high-level Python web framework, 
        and React, a JavaScript library for building user interfaces. I am skilled 
        in writing automated tests to ensure the quality and reliability of the code, 
        and have a proven track record of delivering high-quality, reliable, and well-tested software solutions. 
        <br></br>
        </p>  
        <h2>My education</h2>
        <p>
        I am a Civil Computing engineering graduate at Universidad Católica de Temuco and have studied other topics on my own
        here is a list of my self taught courses and topics I am interested keep learning.
        </p>
        <ul id="certificationsList">
          
          {
            courseraCertifications.map(cert => <li><a href={cert.url}>{cert.name}</a></li>)
          }
            
          
        </ul>


        <h2>My interest</h2>
        <p>
        My main hobby is playing online, I like to participate in 
        competitive matches, dedicate myself exclusively to one or 
        two games and watch their competitive scenes. Exercise 
        is also part of my daily routine, I like to play soccer 
        and do high-intensity aerobic work. Another thing that 
        catches my attention are board games of all types, and I 
        am also interested in politics, I listen to political 
        podcasts and read newspapers with related news.
        </p>
        
      </div>
    </section>
  )
}

export default Experience;