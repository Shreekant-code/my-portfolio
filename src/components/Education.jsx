import "./Education.css";
import { IoSchool } from "react-icons/io5";
import { motion } from "framer-motion";

export const Education = () => {
  return (
    <section className="edu-part" id="education">
      <div className="header">
        <IoSchool className="icon-college" />
        <h1> Education</h1>
      </div>

      <div className="edu-container">
       
        <motion.div
          className="box1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="heading-part">
            <h2>Btech In Artificial Intelligence & Data Science</h2>
            <p>Expected 2027</p>
          </div>
          <h3>
            <span>🏫</span> Thakur College of Engineering & Technology
          </h3>
          <p className="grade">CGPA: 9.45/10</p>
        </motion.div>

        {/* Senior Secondary */}
        <motion.div
          className="box2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="heading-part">
            <h2>Senior Secondary</h2>
            <p>2023</p>
          </div>
          <h3>
            <span>🏫</span> K.J Somaiya College of Science and Commerce
          </h3>
          <p className="grade">Grade: 75.33%</p>
        </motion.div>

        {/* Secondary */}
        <motion.div
          className="box3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="heading-part">
            <h2>Secondary</h2>
            <p>2021</p>
          </div>
          <h3>
            <span>🏫</span> Shreerang Vidyalaya Eng Med & Jr. College
          </h3>
          <p className="grade">Grade: 91.60%</p>
        </motion.div>
      </div>
    </section>
  );
};
