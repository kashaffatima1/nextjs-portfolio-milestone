import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section className=' py-12'>
      <div className='container mx-auto'>
      <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className=" mb-4 text-5xl sm:lg:text-6xl lg:text-7xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Contact</span>
          </h1>
        </div>
        <form className="max-w-lg mx-auto border-green-100 p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-white mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full p-2 rounded bg-[#181818]  text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white  mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full p-2 rounded bg-[#181818] text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-white  mb-2">Message</label>
            <textarea id="message" name="message" className="w-full p-2 rounded bg-[#181818] text-white focus:outline-none focus:ring-2 focus:ring-blue-500" rows={5}></textarea>
          </div>
          <button type="submit" className="px-6 py-3 text-center place-self-center w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-black gap-8'>
             duration-300">Contact Us</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
