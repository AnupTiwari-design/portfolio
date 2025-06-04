import { motion } from 'framer-motion';
import { useState } from 'react';
import './About.css';
import { FaLaptopCode, FaYoutube, FaTools, FaRocket, FaCode } from "react-icons/fa";

function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <motion.div 
      className="about-container"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="about-title">About Me</h2>

      <motion.div 
        className="about-card"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <div className="about-content">
          <p><FaLaptopCode className="icon" /> Hi! I'm <strong>Anup Kumar Tiwari</strong>, a passionate <strong>MERN Stack Developer</strong>.</p>
          <p><FaCode className="icon" /> I love creating modern, responsive web applications and solving real-world problems through code.</p>
          <p><FaYoutube className="icon" /> I also enjoy teaching and making tech content on YouTube to help others grow.</p>

          {showMore && (
            <>
              <p><FaTools className="icon" /> I'm exploring technologies like GraphQL, Firebase, Docker, and Next.js to expand my skills.</p>
              <p><FaRocket className="icon" /> In my free time, I contribute to open source, participate in hackathons, and mentor juniors.</p>
            </>
          )}

          <button className="toggle-btn" onClick={() => setShowMore(!showMore)}>
            {showMore ? "Read Less ▲" : "Read More ▼"}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default About;