import { FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

export const Fullstack = () => {
  return (
    <>
    
      {cardData.map((item) => (
        <div
          key={item.id}
          className="bg-black rounded-md shadow-[0_9px_30px_rgba(255,149,5,0.3)] p-4 w-[330px] sm:w-[380px] md:w-[450px] flex flex-col"
        >
       
          <div className="flex justify-center items-center w-full">
           <img
  src={item.img}
  alt={item.title}
  className="w-[280px] sm:w-[300px] md:w-[380px] h-[180px] sm:h-[180px] md:h-[300px] object-cover rounded-md 
             transform transition duration-300 hover:scale-105"
/>
          </div>

         
          <div className="flex justify-between items-center mt-4 text-white">
            <p className="font-medium">{item.title}</p>
            <div className="flex gap-3">
              
                <a
                  href={item.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-gradient-to-r from-[#8abbE3] via-[#8222e3] to-[#b8adad] p-2 rounded-full text-2xl hover:text-3xl transition"
                >
                  <FaGithub />
                </a>
            
              
                <a
                  href={item.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-gradient-to-r from-[#8abbE3] via-[#8222e3] to-[#b8adad] p-2 rounded-full text-2xl hover:text-3xl transition"
                >
                  <GoArrowUpRight />
                </a>
              
            </div>
          </div>

          
         <p className="text-gray-700">{item.description}</p>
         
          <h4 className="text-blue-400 mt-3">Technology Used</h4>
          <div className="grid grid-cols-3 gap-3 mt-2">
  {item.tech.map((techItem, index) => (
    <div
      key={index}
      className="flex justify-center items-center h-10 w-full text-sm font-medium 
                 text-white rounded-lg bg-white/10 border border-white/30 
                 backdrop-blur-sm shadow-sm hover:scale-105 transition  whitespace-nowrap"
    >
      {techItem}
    </div>
  ))}
</div>
        </div>
      ))}
  </>
  );
};

const cardData = [
  {
    id: 1,
    title: "Job-Hunt",
    img: "https://res.cloudinary.com/dtlessn0g/image/upload/v1758729276/Screenshot_2025-09-24_212250_tphvl4.png",
    tech: ["React", "TailwindCSS", "Mongodb","Nodejs","Express","Jwt"],
    liveLink: "",
    githubLink: "https://github.com/Shreekant-code/Job-Hunt.git",
   description: "JobHunt – A job portal platform where users can explore job listings, apply for opportunities, and manage applications, while employers can post jobs and track candidates with ease."

  },
  {
    id: 2,
    title: "Student Management Portal",
    img: "https://res.cloudinary.com/dtlessn0g/image/upload/v1758745840/coming-soon-background-illustration-template-design-free-vector_ljl77r.jpg",
    tech:["React", "TailwindCSS", "Mongodb","Nodejs","Express","Jwt"],
  //   description: "TrendHive – A modern e-commerce platform providing reusable UI components like buttons, product cards, backgrounds, grids, and theme utilities to help developers build responsive and stylish interfaces quickly.",
   liveLink: "",
    githubLink: "",
  },
  {
    id: 3,
    title: "Blog-App",
    img: "https://res.cloudinary.com/dtlessn0g/image/upload/v1758745840/coming-soon-background-illustration-template-design-free-vector_ljl77r.jpg", 
    tech:["React", "TailwindCSS", "Mongodb","Nodejs","Express","Jwt"],
      //  description: "A component library offering ready-to-use UI elements like buttons, backgrounds, patterns, and cards — helping developers build modern, responsive designs faster with reusable CSS components.",
   liveLink: "",
    githubLink: "",
  },
];
