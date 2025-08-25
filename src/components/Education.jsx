import "./Education.css";
import { IoSchool } from "react-icons/io5";
import { motion } from "framer-motion";
const MotionDiv = motion.div;
export const Education=()=>{
    return(
        <>
<section className="edu-part" id="education">
    <div className="header">
 <IoSchool  className="icon-college"/>
    <h1> Education</h1>
    </div>
    <div className="edu-container">
    <MotionDiv className="box1"
    initial={{ opacity: 0, x: 100}}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      
    >
        <div className="heading-part">
       <h2> Btech In Artificial Intelligence & Data Science</h2>
       <p> Expected 2027</p>
        </div>
        <h3>  <span>🏫</span> Thakur college of Engineering & Technology</h3>
        <p className="grade">CGPA: 9.45/10</p>

  </MotionDiv>

      <MotionDiv className="box2"
      initial={{ opacity: 0, x: -100}}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
       
      
      >
        <div className="heading-part">
       <h2> Senior Secondary</h2>
       <p> 2023</p>
        </div>
        <h3>  <span>🏫</span> K.J Somaiya college of science and commerce</h3>
<p className="grade">Grade: 75.33%</p>
</MotionDiv>

      <MotionDiv className="box3"
      initial={{ opacity: 0, x: 100}}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
     
      >
        <div className="heading-part">
       <h2> Secondary</h2>
       <p> 2021</p>
        </div>
        <h3>  <span>🏫</span> Shreerang Vidyalaya Eng med & Jr.college</h3>
        
<p className="grade">Grade: 91.60%</p>

    </MotionDiv>
    </div>

</section>



        
    </>
    )
}