import { IoSchool } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

export const Education = () => {
  const educationData = [
    {
      title: "BTech In Artificial Intelligence & Data Science",
      year: "2023 - 2027",
      institution: "Thakur College of Engineering & Technology",
      grade: "CGPA: 9.45/10",
      color: "blue-500",
      iconColor: "indigo-500",
      animation: { rotate: [-10, 10, -10, 0], scale: [0.9, 1.1, 0.9] },
    },
    {
      title: "Senior Secondary",
      year: "2021 - 2023",
      institution: "K.J Somaiya College of Science and Commerce",
      grade: "Grade: 75.33%",
      color: "green-500",
      iconColor: "green-500",
      animation: { y: [-3, 3, -3] },
    },
    {
      title: "Secondary",
      year: "2021",
      institution: "Shreerang Vidyalaya Eng Med & Jr. College",
      grade: "Grade: 91.60%",
      color: "red-500",
      iconColor: "red-500",
      animation: { rotate: [0, 10, -10, 0] },
    },
  ];

  const getCardVariant = (direction = "left") => ({
    hidden: { opacity: 0, x: direction === "left" ? -80 : 80, y: 30 },
    show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  });

  return (
    <section className="edu-part bg-black px-4 py-10" id="education">
      
      <div className="flex items-center justify-center gap-4 mb-10">
        <IoSchool className="text-4xl p-1 rounded-sm bg-gradient-to-r from-purple-600 via-purple-900 to-purple-700 text-white" />
        <h1 className="text-4xl font-[Yesteryear] font-normal text-red-600 text-shadow-md overline">
          Education
        </h1>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {educationData.map((edu, idx) => (
          <motion.div
  key={idx}
  className={`border-l-[6px] border-blue-500 rounded-lg p-5 bg-black/40 shadow-[0_10px_25px_rgba(0,255,255,0.4),0_0_15px_rgba(0,255,255,0.3)]`}
  variants={getCardVariant(idx % 2 === 0 ? "left" : "right")}
  initial="hidden"
  whileInView="show"
  viewport={{ amount: 0.3 }}
>

            <div className="flex items-center justify-start gap-3 mb-4">
              <motion.div
                initial={{ rotate: 0, y: 0, scale: 1 }}
                animate={edu.animation}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaGraduationCap className={`text-${edu.iconColor} text-2xl`} />
              </motion.div>
              <h2 className="text-white font-extrabold text-lg md:text-xl">{edu.title}</h2>
            </div>
            <p className="text-cyan-400 font-bold text-center mb-1 animate-bounce">{edu.year}</p>
            <h3 className="text-center text-gray-300 mt-1">{edu.institution}</h3>
            <p className="text-yellow-400 text-center mt-2">{edu.grade}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
