import { motion } from 'framer-motion';
import './Project.css';

function Project() {
  const projects = [
    {
      title: 'Online Test System',
      description: 'MERN Stack app with admin & student roles, MCQ/coding tests, and Judge0 API integration.',
    },
    {
      title: 'Portfolio Website',
      description: 'React-based personal portfolio with sections for About Me, Projects, and Contact.',
    },
    {
      title: 'To-Do App',
      description: 'Simple CRUD app using React and local storage to manage your daily tasks.',
    },
    {
      title: 'Blog Platform',
      description: 'Full-stack blog app with Node.js, MongoDB, authentication, and rich-text editor.',
    },
    {
      title: 'Weather App',
      description: 'Real-time weather updates using React and OpenWeatherMap API with responsive UI.',
    },
    {
      title: 'E-commerce Dashboard',
      description: 'Admin dashboard with product and order management using MERN stack & charts.',
    },
  ];

  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Git/GitHub', 'Tailwind CSS', 'Framer Motion'
  ];

  return (
    <div className="project-container">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
          </motion.div>
        ))}
      </div>

      <h2 className="skills-title">My Skills</h2>
      <motion.div 
        className="skills-grid"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {skills.map((skill, i) => (
          <motion.div 
            className="skill-card" 
            key={i}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.3 }}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Project;