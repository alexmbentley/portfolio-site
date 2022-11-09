import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import testImg from '../public/assets/projects/test.jpeg';
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
            title="Test Denzel1"
            backgroundImg={testImg}
            projectUrl="/test"
          />
          <ProjectItem
            title="Test Denzel1"
            backgroundImg={testImg}
            projectUrl="/denzel"
          />
          <ProjectItem
            title="Test Denzel1"
            backgroundImg={testImg}
            projectUrl="/denzel"
          />
          <ProjectItem
            title="Test Denzel1"
            backgroundImg={testImg}
            projectUrl="/denzel"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
