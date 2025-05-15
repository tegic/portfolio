import './AboutMe.css';
import myPhoto from '../../img/my-photo.png';

const AboutMe = () => {
    return (
        <div className='about-me-main-container'>
            <div className='about-me-photo-and-text-container'>
                <img src={myPhoto} className='my-photo' />
               <div className="about-me">
  <div className="about-me__intro">
    <p>Hi, I’m Maksym Kruhlyk — a full-stack web developer and data enthusiast based in Poznań, open to remote work. With several years of experience in both frontend and backend development, I bring a well-rounded technical skill set and a strong analytical mindset to every project I work on.</p>
  </div>

  <div className="about-me__experience">
    <p>From 2022 to 2024, I worked at Gas Dev as a web developer, contributing to both frontend and backend codebases, while also applying data analysis to improve product performance. Prior to that, I completed an internship at Kharkiv College of Patents and Computers, where I focused on algorithmic problem-solving in C++.</p>
  </div>

  <div className="about-me__education">
    <p>I hold a Junior Software Developer degree from Kharkiv College of Patents and Computers, where I completed hands-on projects involving embedded systems, databases, and full-stack applications. Currently, I’m studying Informatics at Poznań University of Technology, and I'm an active member of the PUTrequest Computer Technologies group.</p>
  </div>

  <div className="about-me__skills">
    <p>My technical toolkit includes:</p>
    <ul>
      <li><strong>Frontend:</strong> React, HTML/CSS, JavaScript</li>
      <li><strong>Backend:</strong> Node.js, PHP, SQL</li>
      <li><strong>Other Languages:</strong> Python (commercial experience), C++, C# and Delphi</li>
      <li><strong>Tools & Tech:</strong> Git, Linux, VPS hosting, MS Office, data automation</li>
    </ul>
    <p>I have also completed a mathematical analysis course and regularly apply my analytical skills in both code and data workflows.</p>
  </div>

  <div className="about-me__mindset">
    <p>I enjoy working on projects where my task is to build a user interface or automate a process using Python. I'm analytical by nature, detail-oriented, and constantly looking to improve both the product and my own capabilities.</p>
  </div>

  <div className="about-me__values">
    <p>I thrive in environments that value collaboration, learning, and initiative. I see challenges as opportunities to grow and I’m always open to feedback.</p>
  </div>


  <div className="about-me__languages">
    <p><strong>Languages:</strong> Ukrainian (native), Russian (native), English (B2), Polish (B2)</p>
  </div>
</div>

            </div>
        </div>
    )
}

export default AboutMe;