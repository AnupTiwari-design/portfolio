import { motion } from 'framer-motion';
import './Profile.css';
import myphoto from '../assets/myphoto.jpg';

function Profile() {
  return (
    <div className="profile-container">
      <motion.div 
        className="profile-left"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img src={myphoto} className="profile-photo" alt="Profile" />
      </motion.div>

      <motion.div 
        className="profile-right"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Anup Kumar Tiwari</h2>
        <p className="title">Full Stack Developer (MERN)</p>
        
        <p className="bio">
          I'm a passionate developer who loves building modern web applications using React, Node.js, and MongoDB.
          I enjoy turning complex problems into simple, beautiful, and intuitive solutions. Currently focused on full-stack development and creating educational content for aspiring developers.
        </p>

        <h4 className="stack-title">Tech Stack:</h4>
        <ul className="stack-list">
          <li>React.js</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>JavaScript</li>
          <li>HTML & CSS</li>
          <li>Git & GitHub</li>
        </ul>

        <div className="profile-links">
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:your-email@example.com">Email</a>
          <a href="/resume.pdf" download>Download Resume</a>
        </div>
      </motion.div>
    </div>
  );
}

export default Profile;