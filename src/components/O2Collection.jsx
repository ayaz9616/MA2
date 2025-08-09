// import React from 'react';

// const O2Collection = () => {
//   return (
//     <section className="py-20">
//       <div className="max-w-7xl mx-auto px-5">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Our Best O2</h2>
//           <div className="flex justify-center items-center gap-5">
//             <div className="w-8 h-1.5 bg-gradient-to-r from-accent-green to-accent-lightGreen rounded shadow-glow"></div>
//             <div className="w-6 h-1.5 bg-gradient-to-r from-accent-green to-accent-lightGreen rounded shadow-glow"></div>
//           </div>
//         </div>

//         <div className="relative text-center">
//           <div className="relative mb-10">
//             <img src="/images/o2-collection.jpg" alt="O2 Collection" className="w-full max-w-4xl h-80 object-cover rounded-[4rem] border border-white/40 mx-auto" />
//           </div>
          
//           <div className="mb-10">
//             <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 max-w-4xl mx-auto">
//               We Have Small And Best O2 Plants Collections
//             </h3>
//             <p className="text-base md:text-lg text-white/90 mb-6 max-w-2xl mx-auto">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//             </p>
//             <button className="px-6 py-3 border border-white bg-white/5 text-white text-lg font-medium rounded-lg hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300">
//               Explore
//             </button>
//           </div>

//           {/* Navigation Arrows */}
//           <div className="absolute top-1/2 right-6 -translate-y-1/2 flex flex-col gap-3">
//             <button className="w-7 h-7 border border-white/50 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:border-white transition-colors duration-300">
//               ‹
//             </button>
//             <button className="w-7 h-7 border border-white/50 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:border-white transition-colors duration-300">
//               ›
//             </button>
//           </div>

//           {/* Page Indicator */}
//           <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
//             <div className="w-12 h-[2px] bg-white/30 rounded-full"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default O2Collection;







// import React from "react";

// const O2Collection = () => {
//   return (
//     <section className="py-20 bg-[#071209] text-white">
//       {/* Heading outside the blur box */}
//       <div className="text-center mb-12">
//         <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
//           Our best O₂
//         </h2>
//         <div className="flex justify-center items-center gap-3">
//           <div className="w-14 h-1.5 bg-gradient-to-r from-[#5fe082] to-[#9ef4a6] rounded shadow-lg"></div>
//           <div className="w-8 h-1.5 bg-gradient-to-r from-[#5fe082] to-[#9ef4a6] rounded shadow-lg"></div>
//         </div>
//       </div>

//       {/* Blur Layer with Image + Text */}
//       <div className="max-w-6xl max-h-100px mx-auto flex flex-col md:flex-row items-center rounded-[2rem] border border-white/20 bg-white/5 backdrop-blur-md p-8 relative">
//         {/* Plant Image */}
//         <div className="flex-1 flex justify-center mb-6 md:mb-0">
//           <img
//             src="/images/o2-collection.jpg"
//             alt="O2 Plant"
//             className="w-[600px]  object-contain "
//           />
//         </div>

//         {/* Text Content */}
//         <div className="flex-1 text-center md:text-left">
//           <h3 className="text-2xl md:text-3xl font-bold mb-6">
//             We Have Small And Best O₂ Plants Collection’s
//           </h3>
//           <p className="text-white/90 leading-relaxed mb-8">
//             "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
//             incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
//             in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
//           </p>
//           <button className="px-6 py-2 border border-white/40 rounded-lg hover:bg-white/10 transition">
//             Explore
//           </button>
//         </div>

//         {/* Page indicator */}
//         <div className="absolute bottom-4 right-6 text-xs text-white/70">
//           &lt; 01/04 &gt;
//         </div>

//         {/* Navigation arrows
//         <div className="absolute top-1/2 right-6 -translate-y-1/2 flex flex-col gap-3">
//           <button className="w-8 h-8 border border-white/30 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:border-white transition">
//             ‹
//           </button>
//           <button className="w-8 h-8 border border-white/30 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:border-white transition">
//             ›
//           </button>
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default O2Collection;







import React from "react";

const O2Collection = () => {
  return (
    <section className="py-20 bg-[#071209] text-white">
      {/* Heading outside the blur box */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
          Our best O₂
        </h2>
        <div className="flex justify-center items-center gap-3">
          <div className="w-14 h-1.5 bg-gradient-to-r from-[#5fe082] to-[#9ef4a6] rounded shadow-lg"></div>
          <div className="w-8 h-1.5 bg-gradient-to-r from-[#5fe082] to-[#9ef4a6] rounded shadow-lg"></div>
        </div>
      </div>

      {/* Blur Layer with Image + Text */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center rounded-[2rem] border border-white/20 bg-white/5 backdrop-blur-md p-5 sm:p-6 relative md:h-[350px] overflow-visible">
        
        {/* Plant Image */}
        <div className="flex-1 flex justify-center relative md:-mt-44 md:-ml-44">
          <img
            src="/images/o2-collection.jpg"
            alt="O2 Plant"
            className="w-[320px] sm:w-[420px] md:w-[600px] object-contain md:-mt-16 z-10 drop-shadow-xl"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
            We Have Small And Best O₂ Plants Collection’s
          </h3>
          <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-6">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          </p>
          <button className="px-5 sm:px-6 py-2 border border-white/40 rounded-lg hover:bg-white/10 transition">
            Explore
          </button>
        </div>

        {/* Page indicator */}
        <div className="absolute bottom-4 right-6 text-[10px] sm:text-xs text-white/70">
          &lt; 01/04 &gt;
        </div>
      </div>
    </section>
  );
};

export default O2Collection;
