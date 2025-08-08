import React from "react";
import { FaHtml5, FaJs, FaReact, FaCode } from "react-icons/fa";
import { SiCsswizardry, SiRedux, SiPostman } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { AiOutlineJava } from "react-icons/ai";
import { VscVscode } from "react-icons/vsc";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./Skill.css";

const techStack = [
  { logo: <FaHtml5 />, name: "HTML", color: "#E44D26" },
  { logo: <SiCsswizardry />, name: "CSS", color: "#1572B6" },
  { logo: <RiTailwindCssFill />, name: "Tailwind", color: "#06B6D4" },
  { logo: <FaJs />, name: "JavaScript", color: "#F7DF1E" },
   { logo: <SiPostman />, name: "Postman", color: "#FFA500" },
    { logo: <SiPostman />, name: "Postman", color: "#FFA500" },
     { logo: <SiPostman />, name: "Postman", color: "#FFA500" },
];

const downstack = [
  { logo: <FaReact />, name: "React", color: "#61DBFB" },
  { logo: <AiOutlineJava />, name: "Java", color: "#f89820" },
  { logo: <VscVscode />, name: "VS Code", color: "#007ACC" },
  { logo: <SiRedux />, name: "Redux", color: "#764ABC" },
  { logo: <SiPostman />, name: "Postman", color: "#FFA500" },
   { logo: <SiPostman />, name: "Postman", color: "#FFA500" },
    { logo: <SiPostman />, name: "Postman", color: "#FFA500" },
     { logo: <SiPostman />, name: "Postman", color: "#FFA500" },
];

const breakpoints = {
  320: { slidesPerView: 2, spaceBetween: 10 },
  480: { slidesPerView: 3, spaceBetween: 10 },
  768: { slidesPerView: 4, spaceBetween: 12 },
  1024: { slidesPerView: 5, spaceBetween: 15 },
};

export const Skill = () => {
  return (
    <>
      <div className="header-skill">
        <FaCode className="skill-icon" />
        <h1 className="skill-heading">Tech Stack</h1>
      </div>

      <main className="skill-container" id="skill">
        <h3 className="skill-subheading">Tools & Technologies I Use</h3>

        {/* Top Row */}
        <Swiper
          modules={[Autoplay]}
          loop
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={3000}
          breakpoints={breakpoints}
          className="skill-swiper"
        >
          {techStack.map((tech, index) => (
            <SwiperSlide key={index}>
              <div className="tech-slide">
                <div
                  className="tech-icon"
                  style={{ color: tech.color }}
                >
                  {tech.logo}
                </div>
                <p>{tech.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom Row */}
        <Swiper
          modules={[Autoplay]}
          loop
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={3000}
          breakpoints={breakpoints}
          className="skill-swiper"
        >
          {downstack.map((tech, index) => (
            <SwiperSlide key={index}>
              <div className="tech-slide">
                <div
                  className="tech-icon"
                  style={{ color: tech.color }}
                >
                  {tech.logo}
                </div>
                <p>{tech.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </>
  );
};
