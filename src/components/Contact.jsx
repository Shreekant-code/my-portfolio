import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID_ADMIN = import.meta.env.VITE_EMAILJS_TEMPLATE_ADMIN_ID;
  const TEMPLATE_ID_AUTOREPLY = import.meta.env.VITE_EMAILJS_TEMPLATE_AUTOREPLY_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID_ADMIN, form.current, PUBLIC_KEY);

    
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID_AUTOREPLY, form.current, PUBLIC_KEY);

      form.current.reset();
      setShowModal(true); 
    } catch (error) {
      console.error("Email sending error:", error.text || error);
      alert("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <section className="w-full flex flex-col items-center justify-center bg-black py-12" id="contact">
      <h1 className="text-4xl text-red-600 font-[Yesteryear] text-center mb-6 overline overline-white">
        <span className="text-white">Contact </span> Me
      </h1>

      <div className="w-[310px] sm:w-[400px] bg-black border border-gray-400 rounded-md shadow-[0_9px_30px_rgba(255,149,5,0.3)] p-2 mb-5">
        <h4 className="text-center text-blue-500 font-bold mb-4">
          Let’s Build Something Amazing Together!
        </h4>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col items-center gap-4 w-full">
          <input
            type="text"
            name="from_name"
            placeholder="Enter Your Name"
            required
            className="w-4/5 p-3 rounded-lg text-center outline-none bg-white"
          />
          <input
            type="tel"
            name="phone"
            maxLength="10"
            pattern="\d{10}"
            inputMode="numeric"
            placeholder="Enter 10-digit number"
            className="w-4/5 p-3 rounded-lg text-center outline-none bg-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
            className="w-4/5 p-3 rounded-lg text-center outline-none bg-white"
          />
          <textarea
            name="message"
            placeholder="Write Your msg or idea to me"
            className="w-4/5 p-3 rounded-lg h-28 outline-none text-center bg-white"
          />
          <button
            type="submit"
            className="w-4/5 py-3 cursor-pointer bg-cyan-500 text-white rounded-lg font-medium text-lg hover:bg-cyan-600 transition"
          >
            Submit
          </button>
        </form>
      </div>

   
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20 z-20">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
            <h2 className="text-xl font-bold mb-4 text-cyan-600">
              Thank You!
            </h2>
            <p className="mb-6">
              Thanks for contacting me or sharing your ideas. I’ll get back to you soon!
            </p>
            <button
              className="px-6 py-2 cursor-pointer bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
