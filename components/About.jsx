import React from 'react';

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#bb8336]">
            About
          </p>
          <h2 className="py-4">A bit about me</h2>
          <p className="py-2 text-gray-600">Write things in here</p>
          <p className="py-2 text-gray-600">
            Pellentesque sed pulvinar turpis. Fusce vel faucibus risus.
            Suspendisse eu ante nec orci consequat tempus eget a orci. Quisque
            tincidunt lectus et velit tristique, ut commodo eros aliquet. Fusce
            eleifend nisi lectus, a ultrices libero porta sit amet. Etiam
            volutpat lacus augue, non pretium orci commodo nec. Sed ipsum lacus,
            pellentesque sed feugiat sit amet, interdum nec purus. Aenean at
            nunc facilisis, varius lorem sodales, feugiat sem.
          </p>
          <p className="py-2 text-gray-600">
            Pellentesque sed pulvinar turpis. Fusce vel faucibus risus.
            Suspendisse eu ante nec orci consequat tempus eget a orci. Quisque
            tincidunt lectus et velit tristique, ut commodo eros aliquet. Fusce
            eleifend nisi lectus.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            See some of my latest projects.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://source.unsplash.com/Im7lZjxeLhg/640x543"
            alt="laptop"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
