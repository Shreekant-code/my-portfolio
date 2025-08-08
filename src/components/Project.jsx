import { useState } from "react";
import { Fullstack } from "../projectcomponent/Fullstack";
import"./Project.css"
import { GrProjects } from "react-icons/gr";
export const Project=()=>{
    const[clicked,setclicked]=useState("fullstack");

    const handlebtn=(input)=>{
        setclicked(input);
    }



    return(
        <>
        <section className="project-container" id="project">
            <div className="heading-part-project">
               <GrProjects  className="project-icon"/>
               <h1>Projects</h1>
            </div>

            <div className="btnAll-projects">
           <button className="advance-btn" onClick={()=>handlebtn("fullstack")}>Full-Stack Projects</button>
           <button className="inter-btn" onClick={()=>handlebtn("mini")}>Intermediate Projects</button>
           <button className="landing-btn" onClick={()=>handlebtn("landingPage")}>Landing Pages</button>
          
          </div>

            <div className="projects-card">
                

          {clicked === "fullstack" && <Fullstack />}

{clicked === "mini" && <h1 className="text-white center">Mini Projects coming soon</h1>}

{clicked === "landingPage" && <h1 className="text-white">Landing Page Work in Progress</h1>}



          </div>
         

          



        </section>
        
        
        
        
        </>
    )
}

