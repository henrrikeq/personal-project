

// const Skills = () => {
//   return (
//     <div>
//       <div className="w-[70vw] ml-40 h-[100vh]">
//         <p className="flex text-[3rem] justify-center text-[#ffb016] font-bold mt-20 mb-9">
//           My Skills
//         </p>
//         <p className="flex text-[18px]">
//           Skilled in React, with a solid foundation in HTML, CSS, and JavaScript, I am passionate
//           about designing intuitive and engaging user experiences. I excel in dynamic, innovative
//           environments and am dedicated to ongoing growth in the ever-evolving tech industry.
//         </p>

//         {/* Skills Meter Section */}
//         <div className="flex flex-col items-center mt-10">
//           {/* HTML */}
//           <div className="w-full mb-6">
//             <p className="text-[1.5rem] font-semibold">HTML</p>
//             <div className="w-[60%] h-4 bg-gray-200 rounded-full">
//               <div className="h-full bg-[#ffb016]" style={{ width: '90%' }}></div>
//             </div>
//             <p className="text-gray-500 mt-2">90%</p>
//           </div>

//           {/* CSS */}
//           <div className="w-full mb-6">
//             <p className="text-[1.5rem] font-semibold">CSS</p>
//             <div className="w-[60%] h-4 bg-gray-200 rounded-full">
//               <div className="h-full bg-[#ffb016]" style={{ width: '70%' }}></div>
//             </div>
//             <p className="text-gray-500 mt-2">70%</p>
//           </div>

//           {/* JavaScript */}
//           <div className="w-full mb-6">
//             <p className="text-[1.5rem] font-semibold">JavaScript</p>
//             <div className="w-[60%] h-4 bg-gray-200 rounded-full">
//               <div className="h-full bg-[#ffb016]" style={{ width: '60%' }}></div>
//             </div>
//             <p className="text-gray-500 mt-2">60%</p>
//           </div>

//           {/* React */}
//           <div className="w-full mb-6">
//             <p className="text-[1.5rem] font-semibold">React</p>
//             <div className="w-[60%] h-4 bg-gray-200 rounded-full">
//               <div className="h-full bg-[#ffb016]" style={{ width: '85%' }}></div>
//             </div>
//             <p className="text-gray-500 mt-2">85%</p>
//           </div>

//           {/* Tailwind */}
//           <div className="w-full mb-6">
//             <p className="text-[1.5rem] font-semibold">Tailwind</p>
//             <div className="w-[60%] h-4 bg-gray-200 rounded-full">
//               <div className="h-full bg-[#ffb016]" style={{ width: '75%' }}></div>
//             </div>
//             <p className="text-gray-500 mt-2">75%</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;


const Skills = () => {
  return (
    <div className="px-5 py-10">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Title */}
        <p className="text-center text-[2rem] sm:text-[3rem] font-bold text-[#ffb016] mt-10 mb-6">
          My Skills
        </p>

        {/* Description */}
        <p className="text-center text-[16px] sm:text-[18px] leading-relaxed">
          Skilled in React, with a solid foundation in HTML, CSS, and JavaScript, I am passionate
          about designing intuitive and engaging user experiences. I excel in dynamic, innovative
          environments and am dedicated to ongoing growth in the ever-evolving tech industry.
        </p>

        {/* Skills Meter Section */}
        <div className="flex flex-col items-center mt-10 space-y-8">
          {/* HTML */}
          <div className="w-full max-w-[600px]">
            <p className="text-[1.25rem] sm:text-[1.5rem] font-semibold">HTML</p>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-[#ffb016] h-full rounded-full"
                style={{ width: "90%" }}
              ></div>
            </div>
            <p className="text-gray-500 text-right mt-2">90%</p>
          </div>

          {/* CSS */}
          <div className="w-full max-w-[600px]">
            <p className="text-[1.25rem] sm:text-[1.5rem] font-semibold">CSS</p>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-[#ffb016] h-full rounded-full"
                style={{ width: "70%" }}
              ></div>
            </div>
            <p className="text-gray-500 text-right mt-2">70%</p>
          </div>

          {/* JavaScript */}
          <div className="w-full max-w-[600px]">
            <p className="text-[1.25rem] sm:text-[1.5rem] font-semibold">JavaScript</p>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-[#ffb016] h-full rounded-full"
                style={{ width: "60%" }}
              ></div>
            </div>
            <p className="text-gray-500 text-right mt-2">60%</p>
          </div>

          {/* React */}
          <div className="w-full max-w-[600px]">
            <p className="text-[1.25rem] sm:text-[1.5rem] font-semibold">React</p>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-[#ffb016] h-full rounded-full"
                style={{ width: "85%" }}
              ></div>
            </div>
            <p className="text-gray-500 text-right mt-2">85%</p>
          </div>

          {/* Tailwind */}
          <div className="w-full max-w-[600px]">
            <p className="text-[1.25rem] sm:text-[1.5rem] font-semibold">Tailwind</p>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-[#ffb016] h-full rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>
            <p className="text-gray-500 text-right mt-2">75%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

