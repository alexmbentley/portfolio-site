import Image from 'next/image';
import React from 'react';
import ncGames from '../public/assets/projects/nc-games.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const NCGames = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={ncGames}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-10">
          <h2 className="py-2">NC Games</h2>
          <h3>React JS / Bootstrap / PSQL</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-10 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h2 className="mb-2">Overview</h2>
          <p>
            This is the first full stack project I worked on, it is a game
            reviews site. First, I created the backend with a data set of game
            reviews from which I created a database with PostgreSQL. During this
            project I learned a lot about SQL queries and accessing information
            I wanted to show on my front-end.
          </p>
          <br />
          <p>
            For the front-end I used React JS as I wanted to have reusable
            components in order to reduce the amount of code written so it is
            easier to follow. I used axios for my API requests as once again it
            is easier to read and allowed me to use less code. I used Bootstrap
            in order to use the grid and card functions to style the blog posts.
          </p>
          <br />
          <p>Initial load may take a while as the back-end API starts up.</p>
          <a
            href="https://github.com/alexmbentley/nc-games"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">FE Code</button>
          </a>
          <a
            href="https://github.com/alexmbentley/Backend-Games-Project"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">BE Code</button>
          </a>
          <a
            href="https://prismatic-hummingbird-1be272.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 ">
          <div className="shadow-xl shadow-gray-400 rounded-xl py-4">
            <div className="p-2">
              <p className="text-center font-bold pb-2">Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> React
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Javascript
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Bootstrap
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> PostgeSQL
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Express
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

export default NCGames;
