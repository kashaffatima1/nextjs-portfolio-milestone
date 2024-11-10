import React from 'react';

interface EducationItem {
  degree: string;
  institution: string;
  description: string;
}

const educationData: EducationItem[] = [
  {
    degree: 'Intermediate in Computer Science',
    institution: 'Govt Degree College, Malir Cantt',
    description: 'Focused on software development, algorithms, and data structures.',
  },
  {
    degree: 'Matriculation in Computer Science',
    institution: 'Oxford English Public School',
    description: 'Specialized in advanced software engineering principles and practices.',
  },
];

const Education: React.FC = () => {
  return (
    <section className=' py-12'>
      <div className='container mx-auto'>
      <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className=" mb-4 text-5xl sm:lg:text-6xl lg:text-7xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Education</span>
          </h1>
        </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 gap-8'>
          {educationData.map((item, index) => (
            <div key={index} className='bg-[#181818] p-6 rounded-lg shadow-lg'>
              <h3 className='text-xl font-semibold text-white'>{item.degree}</h3>
              <p className='text-black mt-2'>{item.description}</p>
            </div>
          ))}
        </div>
      
    </section>
  );
};

export default Education;
