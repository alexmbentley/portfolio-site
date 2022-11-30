import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import emailjs from '@emailjs/browser';
import contactMe from '../public/assets/contact-me.jpeg';
import Image from 'next/image';

const Contact = () => {
  const form = useRef();
  const [formSub, setFormSub] = useState(false);
  const [formErr, setFormErr] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_j7iloq5',
        'template_htz3vlx',
        form.current,
        '15HbcDYX0iqyJj7wl'
      )
      .then(
        (result) => {
          setFormSub(true);
          console.log(result.text);
        },
        (error) => {
          setFormErr(true);
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#bb8336]">
          Contact
        </p>
        <h2 className="py-4">Get in touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={contactMe}
                  alt="contact"
                />
              </div>
              <div>
                <h2 className="py-2">Alex Bentley</h2>
                <p>Junior full-stack developer</p>
                <p className="py-4">
                  I am available for full-time positions. Let's talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect</p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                    <Link href="https://www.linkedin.com/in/alexmbentley/">
                      <FaLinkedinIn />
                    </Link>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                    <Link href="https://github.com/alexmbentley">
                      <FaGithub />
                    </Link>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                    <Link href="mailto:alexandermbentley@gmail.com">
                      <AiOutlineMail />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {!formSub ? (
            <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
              <div className="p-4">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2">Name</label>
                      <input
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                        type="text"
                        name="user_name"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2">
                        Phone number
                      </label>
                      <input
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                        type="text"
                        name="phone_number"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Email</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="email"
                      name="user_email"
                      required
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Subject</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="subject"
                      required
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Message</label>
                    <textarea
                      className="border-2 rounded-lg p-3 border-gray-300"
                      rows="10"
                      name="message"
                      required
                    />
                  </div>
                  <button className="w-full p-4 text-gray-100 mt-4 hover:scale-105 ease-in duration-300">
                    Send message
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 relative flex items-center justify-center ">
              <div className="">
                <h3 className="lg:text-3xl sm:text-lg text-black tracking-wider text-center">
                  Form submitted, expect a response within 48 hours.
                </h3>
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#bb8336]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
