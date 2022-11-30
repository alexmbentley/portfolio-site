import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ncGames from '../public/assets/projects/nc-games.jpg';
import pos from '../public/assets/projects/pos-ipad.jpg';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#bb8336]">
          Projects
        </p>
        <h2 className="py-4">What I've created</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="NC Games"
            backgroundImg={ncGames}
            projectUrl="/NCGames"
          />
          <ProjectItem
            title="POJS - POS System"
            backgroundImg={pos}
            projectUrl="/POS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
