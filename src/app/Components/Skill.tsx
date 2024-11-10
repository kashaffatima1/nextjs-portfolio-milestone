import React from 'react';

interface Skill {
  name: string;
  level: number;
}

const skills: Skill[] = [
  { name: 'Html', level: 90 },
  { name: 'JavaScript', level: 70 },
  { name: 'React', level: 70 },
  { name: 'Next.js', level: 75 },
  { name: 'TypeScript', level: 85 },
  { name: 'Tailwind CSS', level: 60 },

];

const Skills: React.FC = () => {
  return (
    <section className=' py-12'>
      <div className='container mx-auto'>
      <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className=" mb-4 text-5xl sm:lg:text-6xl lg:text-7xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Skill</span>
          </h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {skills.map((skill, index) => (
            <div key={index} className='flex flex-col items-start bg-[#181818] p-4 rounded-lg shadow-lg'>
              <h3 className='text-xl font-semibold text-white mb-2'>{skill.name}</h3>
              <div className='w-full bg-[#181818] rounded-full h-2 mb-2'>
                <div className='bg-pink-200 h-2 rounded-full' style={{ width: `${skill.level}%` }}></div>
              </div>
              <span className='text-gray-300'>{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
