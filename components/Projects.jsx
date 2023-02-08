import React from 'react';
import ncGames from '../public/assets/projects/nc-games.jpg';
import pos from '../public/assets/projects/pos-ipad.jpg';
import ProjectItem from './ProjectItem';
import ChainCheck from '../public/assets/projects/ChainCheck.png';
import Natours from '../public/assets/projects/natours.png';

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] p-5 mx-auto">
        <p className="text-xl tracking-widest uppercase text-[#bb8336]">
          Projects
        </p>
        <h2 className="py-4">What I've created</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Natours"
            backgroundImg={Natours}
            projectUrl="/Natours"
            techStack="HTML / SASS"
          />
          <ProjectItem
            title="ChainCheck"
            backgroundImg={ChainCheck}
            projectUrl="/ChainCheck"
            techStack="ReactJS / Firebase / ChartJS / Tailwind"
          />
          <ProjectItem
            title="NC Games"
            backgroundImg={ncGames}
            projectUrl="/NCGames"
            techStack="ReactJS / PSQL / Bootstrap"
          />
          <ProjectItem
            title="POJS - POS System"
            backgroundImg={pos}
            projectUrl="/POS"
            techStack="ReactJS / Firebase / Bootstrap"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
