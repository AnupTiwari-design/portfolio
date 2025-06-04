// Navbar.js
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="logo">MySite</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </ul>
    </motion.nav>
  );
}

export default Navbar;