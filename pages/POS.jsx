import Image from 'next/image';
import React from 'react';
import pos from '../public/assets/projects/pos-ipad.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const test = () => {
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
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Test</h2>
          <h3>React JS / Tailwind / PSQL</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h2 className="mb-2">Overview</h2>
          <p>
            Final full-stack Northcoders project. This project is a web-based
            point of sales system designed for tablet devices and laptops
            created with React. This POS system features an email authentication
            where users can sign up with their email and have all their users,
            items and table plan saved. We used Firebase Auth to achieve the
            login and linked the users data into Firestore.
          </p>
          <br />
          <p>
            The front end styling was handled with Bootstrap 5 as the time I had
            to style this project was short so it benefited me to have built in
            options for different buttons and text. Another benefit of using
            Bootstrapwas the fact that I was able to use the grid system in
            order to quickly sort the layout of our items and users pages.
          </p>
          <br />
          <p>Demo coming soon...</p>
          <a
            href="https://github.com/alexmbentley/pos-till-FE"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Firebase
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Bootstrap 5
              </p>
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

export default test;
