import React from "react";
import "./Home.css";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";


export const Home = () => {
  return (
    <section className="home-section">
      
   
      <motion.div
        className="availability-banner"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="dot"></span>
        Available for Work
      </motion.div>

      
     



       

      <div className="home-container">
      
        <motion.div
          className="description"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <h1>
            Hi, I'm <span className="highlight">Shreekant</span>
          </h1>

          <h2>
            An <span className="highlight-secondary">aspiring MERN Stack Developer</span> 🚀<br />
            I craft <span className="highlight-secondary">full-stack web applications</span> using <br />
            <span className="highlight-secondary">MongoDB, Express, React, and Node.js</span>.<br />
            Focused on <span className="highlight-secondary">building responsive UIs</span> and delivering <br />
            <span className="highlight-secondary">seamless user experiences</span>.
          </h2>

          <h2 className="typewriter-heading">
            <span>I am a </span>
            <span className="typewriter-text">
              <Typewriter
                words={[
                  "Frontend Developer",
                  "React.js Enthusiast",
                  "MERN Stack Developer",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h2>

          {/* SOCIAL LINKS */}
          <ul className="social-links">
            <li>
              <a
                href="https://github.com/Shreekant-code"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/shreekant"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <CiLinkedin />
              </a>
            </li>
            <li>
              <a href="mailto:shreekanty06@gmail.com" aria-label="Email Me">
                <IoMdMail />
              </a>
            </li>
          </ul>

          {/* CTA BUTTONS */}
          <div className="cta-buttons">
            <a href="/resume.pdf" download className="btn-primary">
              Download Resume
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="img-container"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/portpolio.png"
            width="300"
            height="300"
            alt="Shreekant Yadav portrait"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};
