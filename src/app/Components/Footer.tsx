import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#181818] text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        <div className="mb-4 md:mb-0">
        <h1 className=" mb-4 text-5xl sm:lg:text-6xl lg:text-7xl font-extrabold">
            <span className="text-transparent bg-clip-text text-lg font-semibold mb-4 bg-gradient-to-r from-purple-400 to-pink-600">Follow us</span>
          </h1>
           <ul>
            <li className="mb-2"><a href="https://facebook.com" className="hover:underline">Facebook</a></li>
            <li className="mb-2"><a href="https://twitter.com" className="hover:underline">Twitter</a></li>
            <li className="mb-2"><a href="https://instagram.com" className="hover:underline">Instagram</a></li>
            <li className="mb-2"><a href="https://linkedin.com" className="hover:underline">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className=" mb-4  mt-3 text-5xl sm:lg:text-4xl lg:text-2xl font-bold">    Created by
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"> Kashaf</span>
          </h1>
        </div>
      
    </footer>
  );
};

export default Footer;

