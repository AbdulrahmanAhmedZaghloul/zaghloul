import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (<>
 <div>
      <h1 className="text-center my-5 text-5xl">My information</h1>
      <div className="flex w-full flex-wrap">
        <div className="w-full md:w-1/2 px-4 py-4 ">
          <div className="box-footer-item bg-black-100 text-center text-white p-4 rounded-lg">
              <span className="block text-3xl "><i className=" fa-solid fa-map-location"></i></span>
              <h2 className="text-xl font-bold">ADDRESS</h2>
              <p>Egypt, Cairo</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4 py-4 ">
          <div className="box-footer-item bg-black-100 text-center text-white p-4 rounded-lg">
            <a target="_blank" href="mailto:abdozaghloul990@gmail.com">
              <span className="block text-3xl"><i className="fa-solid fa-envelope"></i></span>
              <h2 className="text-xl font-bold">EMAIL</h2>
              <p>abdozaghloul990@gmail.com</p>
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4 py-4 ">
          <div className="box-footer-item bg-black-100 text-center text-white p-4 rounded-lg">
            <a target="_blank" href="tel:201142631113">
              <span className="block text-3xl"><i className="fa-solid fa-mobile"></i></span>
              <h2 className="text-xl font-bold">PHONE</h2>
              <p>+2 011 42 631 113</p>
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4 py-4 ">
          <div className="box-footer-item bg-black-100 text-center text-white p-4 rounded-lg">
            <a target="_blank" href="https://wa.me/201142631113">
              <span className="block text-3xl"><i className="fa-brands fa-whatsapp"></i></span>
              <h2 className="text-xl font-bold">Whatsapp</h2>
              <p>+2 011 42 631 113</p>
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4 py-4 ">
          <div className="box-footer-item bg-black-100 text-center text-white p-4 rounded-lg">
            <a target="_blank" href="https://www.linkedin.com/in/abdulrahmanzaghloul/">
              <span className="block text-3xl"><i className="fa-brands fa-linkedin-in"></i></span>
              <h2 className="text-xl font-bold">Linkedin</h2>
              <p>www.linkedin.com/in/abdulrahmanzaghloul</p>
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4 py-4 ">
          <div className="box-footer-item bg-black-100 text-center text-white p-4 rounded-lg">
            <a target="_blank" href="https://github.com/AbdulrahmanAhmedZaghloul">
              <span className="block text-3xl"><i className="fa-brands fa-github"></i></span>
              <h2 className="text-xl font-bold">Github</h2>
              <p>github.com/AbdulrahmanAhmedZaghloul</p>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
   
  </>

  );
};

export default SectionWrapper(Contact, "contact");
