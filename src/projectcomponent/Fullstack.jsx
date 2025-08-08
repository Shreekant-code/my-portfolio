import { FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import"./Fullstack.css"
export const Fullstack=()=>{
    return(
        <>
        {cardData.map((item)=>(

        <div className="fullstack-card" key={item.id}>
            <div className="img-project-container">
                 <img src={item.img} alt={item.title} className="project-photo"/>
            </div>

    
     <div className="description-project">
        <p>{item.title}</p>
        <div className="project-visit">
            <FaGithub  className="git-visit"/>
            <GoArrowUpRight  className="visit-web"/>
        </div>
         </div>
        <h4>Technology Used </h4>
      <div className="tech-used">
    { item.tech.map((techitem,index)=>(
        <p key={index}>{techitem}</p>

    ))}
       
      </div>

    


        </div>
        
        
        
        
        )) }
        

        
        
        
        
        
        
        
        
        </>
    )
}


const cardData=[
 {  id: 1, 
    title:"Project 1" ,
    img:"public/Img1.png",
    tech:["React","Html","Abc"],
 },
  {  id: 2, 
    title:"Project 2" ,
    img:"public/img2.png",
    tech:["React","Html","Abc"],
 },
  {  id: 3, 
    title:"Project 3" ,
    img:" public/img3.png",
    tech:["React","Html","Abc"],
 },
  
];