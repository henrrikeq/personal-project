

const Blog = () => {
  return (
    <div>
      <div className="py-20">
        {/* Section Title */}
        <p className="text-center text-[2rem] sm:text-[3rem] font-bold text-[#FFB016]">Projects</p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12 px-5 sm:px-20">
          {[
            { src: "./src/assets/images/demo.png", text: "Demo Project", link: "/demo" },
            { src: "./src/assets/images/advert.png", text: "Advert Project", link: "/advert" },
            { src: "./src/assets/images/agric.png", text: "Agric Project", link: "/agric" },
            { src: "./src/assets/images/lib.png", text: "Library Project", link: "https://librarybooksapp.netlify.app/" },
          ].map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              {/* Project Image */}
              <img
                src={item.src}
                alt={item.text}
                className="w-full h-[200px] md:h-[250px] lg:h-[300px] object-cover"
              />

              {/* Hover Effect */}
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
