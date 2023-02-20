import Image from 'next/image';
import React from 'react';
import pos from '../public/assets/projects/pos.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const POS = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={pos}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-10">
          <h2 className="py-2">POJS - POS System</h2>
          <h3>React JS / Firebase / SASS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-10 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h2 className="mb-2">Overview</h2>
          <p>
            Final full-stack Northcoders project. This project is a web-based
            point of sales system designed to be used by bars and restaurants.
            This POS system features email authentication where users can sign
            up with their email and have all their users, items and tables
            saved. We used Firebase Auth to achieve the login and linked the
            users data into Firestore allowing users to save cheques to tables
            and users across devices to access wherever they have an internet
            connection.
          </p>
          <br />
          <p>
            The front end styling was handled mainly with CSS Grid and Flexbox
            using SASS as the processor. Using the grid system allowed me to
            stay consistent through different components giving a more natural
            feel when going through different components in the app.
          </p>
          <br />
          <p>
            Please use the reccommended login for testing. On the staff login
            page the access codes are 123.
          </p>
          <a
            href="https://github.com/alexmbentley/point-of-sale"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a href="https://pojs.netlify.app" target="_blank" rel="noreferrer">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1">
          <div className="shadow-xl shadow-gray-400 rounded-xl py-4">
            <div className="p-2">
              <p className="text-center font-bold pb-2">Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> React
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Firebase
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Javascript
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> CSS
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> SASS
                </p>
              </div>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default POS;
