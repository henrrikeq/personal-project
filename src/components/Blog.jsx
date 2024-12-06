import React from 'react';

const Blog = () => {
  return (
    <div>
      <div className='h-[100vh]'>
        <p className='flex text-[3rem] justify-center text-[#FFB016] font-bold mt-20'>Projects</p>
        <div className='grid grid-cols-2 ml-40 w-[80vw] mt-12 gap-5'>
          {[
            { src: "./src/assets/images/demo.png", text: "Demo Project", link: "/demo" },
            { src: "./src/assets/images/advert.png", text: "Advert Project", link: "/advert" },
            { src: "./src/assets/images/agric.png", text: "Agric Project", link: "/agric" },
            { src: "./src/assets/images/lib.png", text: "Library Project", link: "/library" },
          ].map((item, index) => (
            <div key={index} className="relative w-[38vw] h-[40vh] group overflow-hidden">
              <img src={item.src} alt="" className='w-full h-full object-cover' />
              <div className="absolute inset-0 bg-[#e8ad36] bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <p className="text-white text-lg font-bold mb-2">{item.text}</p>
                <a href={item.link} className="text-white underline">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
