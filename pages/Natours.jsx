import Image from 'next/image';
import React from 'react';
import natours from '../public/assets/projects/natours.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const Natours = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="relative z-1"
          layout="fill"
          objectFit="cover"
          src={natours}
          alt="Natours home"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-10">
          <h2 className="py-2">Natours</h2>
          <h3>HTML / SASS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-10 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h2 className="mb-2">Overview</h2>
          <p>
            I created this site whilst completing a advanced CSS / SASS course.
            The reason I included this in my portfolio is due to the fact that I
            didn't follow the guide for this site making it with flex instead of
            float which is used on the course.
          </p>
          <br />
          <p className="mb-10">
            Completing this mock up travel site allowed me to understand more
            about complex transitions, as well as get a feeling for SASS through
            using differnt variables and reusable mixins. It also allowed me to
            test my replication skills when using flex showing I can create
            projects to a design brief.
          </p>
          <a
            href="https://github.com/alexmbentley/nc-games"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://github.com/alexmbentley/advanced-css-course"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4  md:col-span-1 ">
          <div className="shadow-xl shadow-gray-400 rounded-xl py-4">
            <div className="p-2">
              <p className="text-center font-bold pb-2">Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> HTML
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

export default Natours;
