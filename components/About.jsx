import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import laptop from '../public/assets/laptop.jpeg';

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto p-5 md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#a245ff]">
            About
          </p>
          <h2 className="py-4">A bit about me</h2>
          <p className="py-2 text-gray-600">Hi, I'm Alex Bentley.</p>
          <p className="py-2 text-gray-600">
            I am a junior software developer with both full-stack experience
            from the Northcoders 13 week software development bootcamp. Since
            finishing this I have stuck with coding and been creating mostly
            mobile responsive front-end applications that interact with other
            backend technologies. I am most proficient in building these
            front-end applications using HTML, Javascript, React and CSS but I
            am always looking to learn new tech stacks to further my
            understanding and learn new ways of doing things.
          </p>
          <p className="py-2 text-gray-600">
            My interest in software development first began during my time
            working at a software company on a temporary contract. I began to
            get an insight into what is possible through software, with my
            previous employer making subtilling software in house and
            outsourcing licenses to other companies across the world. Once my
            contract came to an end, I decided to pursue my interest in Web3.
            There were many exciting tools and sites I would use on a day to day
            basis which led me to starting coding and eventually finding
            Northcoders. I am currently looking for a junior developer role. I
            feel like my technical skillset, combined with the soft skills such
            as teamwork and communication I have gained from my previous
            employment would make me an ideal candidate to take on such a role.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            <Link href="/#projects">See some of my latest projects.</Link>
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounded-xl" src={laptop} alt="laptop" />
        </div>
      </div>
    </div>
  );
};

export default About;
