

const Services = () => {
  return (
    <div>
      <div className="bg-[#ffb016] py-20">
        {/* Section Title */}
        <p className="text-center text-[2rem] sm:text-[3rem] font-bold text-white">Personal Services</p>

        {/* Services Container */}
        <div className="mt-10 flex flex-wrap justify-center gap-8">
          {/* Service Item */}
          <div className="flex flex-col h-[12rem] w-[16rem] sm:w-[18rem] text-black bg-white border-2 border-white text-[18px] sm:text-[20px] justify-center items-center shadow-2xl hover:bg-black hover:border-black hover:text-white transition-all">
            <p>Web Developing</p>
            <p className="border-2 w-10 mt-3 border-[#ffb016] rounded-full"></p>
          </div>

          {/* Service Item */}
          <div className="flex flex-col h-[12rem] w-[16rem] sm:w-[18rem] text-black bg-white border-2 border-white text-[18px] sm:text-[20px] justify-center items-center shadow-2xl hover:bg-black hover:border-black hover:text-white transition-all">
            <p>App Developing</p>
            <p className="border-2 w-10 mt-3 border-[#ffb016] rounded-full"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
