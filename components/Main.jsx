import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Currently open for work
          </p>
          <h1 className="py-4 text-gray-700">
            <span className="text-[#a245ff]">Alex's</span> Portfolio
          </h1>
          <h1 className="py-2 text-gray-700">Junior full-stack developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I am an aspiring software developer currently based in South
            Yorkshrie but willing to relocate for work. I have Just completed a
            13 week full-stack coding bootcamp based around Javascript during
            which I learned Javascript fundementals, as well as some front and
            back-end technologies. See about and skills for more information.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link href="https://www.linkedin.com/in/alexmbentley/">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </Link>

            <Link href="https://github.com/alexmbentley">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </Link>

            <Link href="mailto:alexandermbentley@gmail.com">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
