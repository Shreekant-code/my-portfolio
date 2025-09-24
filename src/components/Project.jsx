import { useState } from "react";
import { Fullstack } from "../projectcomponent/Fullstack";
import"./Project.css"
import { GrProjects } from "react-icons/gr";
import { Mini } from "../projectcomponent/Mini";
export const Project=()=>{
    const[clicked,setclicked]=useState("mini");

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
           <button className="advance-btn" onClick={()=>handlebtn("fullstack")}>Full-Stack</button>
           <button className="inter-btn" onClick={()=>handlebtn("mini")}>Intermediate </button>
           <button className="landing-btn" onClick={()=>handlebtn("landingPage")}>Landing Pages</button>
          
          </div>

            <div className="projects-card">
                

          {clicked === "fullstack" && <Fullstack />}

{clicked === "mini" && <Mini />}
{clicked === "landingPage" && <h1 className="text-white">Landing Page Work in Progress</h1>}



          </div>
         

          



        </section>
        
        
        
        
        </>
    )
}

