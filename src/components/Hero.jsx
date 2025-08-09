// // import React from 'react';

// // const Hero = () => {
// //   return (
// //     <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
// //       <div className="absolute inset-0 z-0">
// //         <img src="/images/hero-bg.jpg" alt="Plant background" className="w-full h-full object-cover" />
// //       </div>
      
// //       <div className="relative z-10 max-w-7xl mx-auto px-5 flex items-center">
// //         <div className="text-white flex-1">
// //           <h1 className="text-6xl lg:text-9xl font-semibold leading-tight mb-5">
// //             Breath Natural
// //           </h1>
// //           <p className="text-lg lg:text-2xl leading-relaxed mb-10 max-w-2xl">
// //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
// //           </p>
          
// //           <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
// //             <button className="px-8 py-4 border-2 border-white bg-white/5 text-white text-3xl font-normal rounded-xl hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300">
// //               Explore
// //             </button>
// //             <div className="flex items-center gap-4 text-white/75 text-lg font-semibold">
// //               <div className="w-14 h-14 border-2 border-white/75 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/10 transition-all duration-300">
// //                 <svg width="30" height="28" viewBox="0 0 30 28" fill="none">
// //                   <path d="M15 0L30 14L15 28V0Z" fill="rgba(255, 255, 255, 0.75)"/>
// //                 </svg>
// //               </div>
// //               <span>Live Demo...</span>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Featured Plant Card */}
// //         <div className="hidden xl:block flex-shrink-0 ml-20">
// //           <div className="bg-white/5 border-2 border-white/40 rounded-5xl p-8 backdrop-blur-md">
// //             <div className="mb-5">
// //               <img src="/images/calathea-plant.jpg" alt="Calathea Plant" className="w-80 h-80 object-cover rounded-2xl" />
// //             </div>
// //             <div className="text-center">
// //               <h3 className="text-2xl font-normal text-white/80 mb-2">Trendy House Plant</h3>
// //               <div className="flex items-center justify-center gap-2">
// //                 <h2 className="text-4xl font-normal text-white font-inria">Calathea Plant</h2>
// //                 <img src="/images/forward-arrow.png" alt="Forward" className="w-6 h-4" />
// //               </div>
// //             </div>
// //             {/* Navigation Line */}
// //             <div className="mt-4 flex justify-center">
// //               <div className="w-16 h-1 bg-white/30 rounded-full"></div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Customer Review Card */}
// //       <div className="absolute bottom-20 left-10 z-20">
// //         <div className="bg-white/5 border-2 border-white/75 rounded-5xl p-6 backdrop-blur-md max-w-sm">
// //           <div className="flex items-center gap-4 mb-4">
// //             <img src="/images/rohan-sharma.jpg" alt="Rohan Sharma" className="w-12 h-12 rounded-full object-cover" />
// //             <div>
// //               <h4 className="text-lg font-semibold text-white mb-1">Rohan Sharma</h4>
// //               <div className="flex gap-1">
// //                 {[...Array(5)].map((_, index) => (
// //                   <svg
// //                     key={index}
// //                     width="18"
// //                     height="18"
// //                     viewBox="0 0 18 18"
// //                     fill="#FFF84E"
// //                     className="w-4 h-4"
// //                   >
// //                     <path d="M9 0L11.0206 6.2918H17.5595L12.2694 10.4164L14.2901 16.7082L9 12.5836L3.70993 16.7082L5.73056 10.4164L0.440492 6.2918H6.97937L9 0Z" />
// //                   </svg>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //           <p className="text-xs leading-relaxed text-white">
// //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
// //           </p>
// //         </div>
// //       </div>

// //       {/* "Our Trendy Plants" Label */}
// //       <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
// //         <div className="bg-white/5 border border-white/40 rounded-full px-6 py-2 backdrop-blur-md">
// //           <div className="flex items-center gap-3">
// //             <div className="w-1 h-4 bg-accent-green rounded-full"></div>
// //             <span className="text-white text-sm font-medium">Our Trendy Plants</span>
// //             <div className="w-1 h-4 bg-accent-green rounded-full"></div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;

















// import React from "react";
// import { ShoppingBag } from "lucide-react";

// const Hero = () => {
//   return (
//     <>
//     <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-[#0c1c11]">
//       {/* Background */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src="/images/hero-bg.jpg"
//           alt="Plant background"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/40" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex items-center gap-12">
//         {/* Left Side */}
//         <div className="text-white flex-1">
//           <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-5">
//             Breath Natural
//           </h1>
//           <p className="text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl text-white/80">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
//             {/* Explore Button */}
//             <button className="px-8 py-3 border border-white text-white rounded-lg text-lg font-medium bg-transparent hover:bg-white/10 transition-all">
//               Explore
//             </button>

//             {/* Live Demo */}
//             <div className="flex items-center gap-4 text-white/80">
//               <div className="w-14 h-14 border border-white/70 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/10 transition">
//                 <svg
//                   width="30"
//                   height="28"
//                   viewBox="0 0 30 28"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M15 0L30 14L15 28V0Z"
//                     fill="rgba(255, 255, 255, 0.75)"
//                   />
//                 </svg>
//               </div>
//               <span className="text-lg font-medium">Live Demo...</span>
//             </div>
//           </div>

//           <div className="bg-white/5 border border-white/40 rounded-[1.5rem] p-5 backdrop-blur-md max-w-xs mt-10">
//           <div className="flex items-center gap-4 mb-3">
//             <img
//               src="/images/rohan-sharma.jpg"
//               alt="Rohan Sharma"
//               className="w-12 h-12 rounded-full object-cover"
//             />
//             <div>
//               <h4 className="text-white text-sm font-semibold">Rohan Sharma</h4>
//               <div className="flex gap-1">
//                 {[...Array(5)].map((_, i) => (
//                   <svg
//                     key={i}
//                     width="16"
//                     height="16"
//                     viewBox="0 0 18 18"
//                     fill="#FFF84E"
//                   >
//                     <path d="M9 0L11.0206 6.2918H17.5595L12.2694 10.4164L14.2901 16.7082L9 12.5836L3.70993 16.7082L5.73056 10.4164L0.440492 6.2918H6.97937L9 0Z" />
//                   </svg>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <p className="text-xs text-white/80 leading-relaxed">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua.
//           </p>
//         </div>

//         </div>

//         {/* Right Side Featured Plant Card */}
//         <div className="hidden xl:block flex-shrink-0">
//           <div className="bg-white/5 border border-white/40 rounded-[2rem] p-6 backdrop-blur-md">
//             <img
//               src="/images/calathea-plant.jpg"
//               alt="Calathea Plant"
//               className="w-72 h-72 object-cover rounded-2xl mx-auto mb-5"
//             />
//             <div className="text-center">
//               <h3 className="text-lg text-white/80 mb-2">Trendy House Plant</h3>
//               <div className="flex items-center justify-center gap-2">
//                 <h2 className="text-3xl text-white font-normal">
//                   Calathea Plant
//                 </h2>
//                 <img
//                   src="/images/forward-arrow.png"
//                   alt="Forward"
//                   className="w-5 h-4"
//                 />
//               </div>
//               <div className="mt-4 flex justify-center">
//                 <div className="w-16 h-[2px] bg-white/30 rounded-full"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Customer Review Card
//       <div className="absolute bottom-28 left-28 bottom-42 z-20">
//         <div className="bg-white/5 border border-white/40 rounded-[1.5rem] p-5 backdrop-blur-md max-w-xs">
//           <div className="flex items-center gap-4 mb-3">
//             <img
//               src="/images/rohan-sharma.jpg"
//               alt="Rohan Sharma"
//               className="w-12 h-12 rounded-full object-cover"
//             />
//             <div>
//               <h4 className="text-white text-sm font-semibold">Rohan Sharma</h4>
//               <div className="flex gap-1">
//                 {[...Array(5)].map((_, i) => (
//                   <svg
//                     key={i}
//                     width="16"
//                     height="16"
//                     viewBox="0 0 18 18"
//                     fill="#FFF84E"
//                   >
//                     <path d="M9 0L11.0206 6.2918H17.5595L12.2694 10.4164L14.2901 16.7082L9 12.5836L3.70993 16.7082L5.73056 10.4164L0.440492 6.2918H6.97937L9 0Z" />
//                   </svg>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <p className="text-xs text-white/80 leading-relaxed">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua.
//           </p>
//         </div>
//       </div> */}

      
//     </section>
//     <section
//     id="trendy"
//     className="relative w-full  py-20"
//   >
//     {/* Dark overlay for contrast */}
//     <div className="absolute inset-0 bg-black/40" />

//     <div className="relative max-w-6xl mx-auto px-6">
//       {/* Heading */}
//       <div className="text-center mb-10">
//         <h2 className="text-3xl md:text-4xl font-extrabold text-white">
//           Our Trendy Plants
//         </h2>
//         <div className="mt-3 flex justify-center items-center gap-3">
//           <div className="w-8 h-[3px] bg-white/70 rounded-full" />
//           <div className="w-4 h-[3px] bg-white/50 rounded-full" />
//         </div>
//       </div>

//       <div className="flex flex-col gap-10 justify-center items-center">
//         {/* Card 1 */}
//         <div className="flex flex-col md:flex-row items-center gap-8 bg-white/10 backdrop-blur-lg rounded-[2rem] p-8 border border-white/30 shadow-lg max-w-3xl">
//           {/* Product Image */}
//           <img
//             src="/images/small-desk-plant.jpg"
//             alt="For Small Desk AI Plant"
//             className="w-44 h-44 object-cover rounded-2xl"
//           />
//           {/* Details */}
//           <div className="flex flex-col flex-1">
//             <h3 className="text-2xl font-semibold text-white">
//               For Small Desk AI Plant
//             </h3>
//             <p className="text-white/80 text-sm md:text-base mt-3 max-w-md leading-relaxed">
//               Perfect for adding a splash of nature to your workspace. Minimal maintenance with maximum charm.
//             </p>
//             <div className="flex flex-col  justify-between mt-6 w-full">
//               <span className="text-xl md:text-2xl font-bold text-white mb-4">Rs. 599/-</span>
//               <div className="flex items-center gap-3">
//                 <button className="border border-white text-white px-6 py-2 rounded-xl hover:bg-white/10 transition-colors">
//                   Buy Now
//                 </button>
//                 <button className="w-10 h-10 border border-white rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors">
//                   <ShoppingBag size={18} />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Card 2 */}
//         <div className="flex flex-col md:flex-row-reverse items-center gap-8 bg-white/10 backdrop-blur-lg rounded-[2rem] p-8 border border-white/30 shadow-lg max-w-3xl">
//           {/* Product Image */}
//           <img
//             src="/images/fresh-decs-plant.jpg"
//             alt="For Fresh Decs AI Plant"
//             className="w-44 h-44 object-cover rounded-2xl"
//           />
//           {/* Details */}
//           <div className="flex flex-col flex-1">
//             <h3 className="text-2xl font-semibold text-white">
//               For Fresh Decs AI Plant
//             </h3>
//             <p className="text-white/80 text-sm md:text-base mt-3 max-w-md leading-relaxed">
//               Refresh your decor with this vibrant plant, designed to bring life and freshness to any space.
//             </p>
//             <div className="flex flex-col justify-between mt-6 w-full">
//               <span className="text-xl md:text-2xl font-bold text-white mb-4">Rs. 499/-</span>
//               <div className="flex items-center gap-3">
//                 <button className="border border-white text-white px-6 py-2 rounded-xl hover:bg-white/10 transition-colors">
//                   Buy Now
//                 </button>
//                 <button className="w-10 h-10 border border-white rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors">
//                   <ShoppingBag size={18} />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
//   </>

//   );
// };

// export default Hero;






import React from "react";
import { ShoppingBag } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] py-20 flex flex-col items-center overflow-hidden bg-[#0c1c11]">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Plant background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl px-6 lg:px-12 flex flex-col gap-20">
        {/* === HERO TOP === */}
        <div className="flex flex-col xl:flex-row items-center gap-12">
          {/* Left Side */}
          <div className="text-white flex-1">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-5">
              Breath Natural
            </h1>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl text-white/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
              {/* Explore Button */}
              <button className="px-6 sm:px-8 py-3 border border-white text-white rounded-lg text-base sm:text-lg font-medium bg-transparent hover:bg-white/10 transition-all">
                Explore
              </button>

              {/* Live Demo */}
              <div className="flex items-center gap-4 text-white/80">
                <div className="w-12 h-12 sm:w-14 sm:h-14 border border-white/70 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/10 transition">
                  <svg
                    width="30"
                    height="28"
                    viewBox="0 0 30 28"
                    fill="none"
                  >
                    <path
                      d="M15 0L30 14L15 28V0Z"
                      fill="rgba(255, 255, 255, 0.75)"
                    />
                  </svg>
                </div>
                <span className="text-lg font-medium">Live Demo...</span>
              </div>
            </div>

            {/* Review Card */}
            <div className="bg-white/5 border border-white/40 rounded-[1.5rem] p-5 backdrop-blur-md max-w-xs mt-10">
              <div className="flex items-center gap-4 mb-3">
                <img
                  src="/images/rohan-sharma.jpg"
                  alt="Rohan Sharma"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-white text-sm font-semibold">
                    Rohan Sharma
                  </h4>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        width="16"
                        height="16"
                        viewBox="0 0 18 18"
                        fill="#FFF84E"
                      >
                        <path d="M9 0L11.0206 6.2918H17.5595L12.2694 10.4164L14.2901 16.7082L9 12.5836L3.70993 16.7082L5.73056 10.4164L0.440492 6.2918H6.97937L9 0Z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-xs text-white/80 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* Right Side Featured Plant */}
          <div className="hidden xl:block flex-shrink-0">
            <div className="bg-white/5 border border-white/40 rounded-[2rem] p-6 backdrop-blur-md">
              <img
                src="/images/calathea-plant.jpg"
                alt="Calathea Plant"
                className="w-72 h-72 object-cover rounded-2xl mx-auto mb-5"
              />
              <div className="text-center">
                <h3 className="text-lg text-white/80 mb-2">Trendy House Plant</h3>
                <div className="flex items-center justify-center gap-2">
                  <h2 className="text-3xl text-white font-normal">
                    Calathea Plant
                  </h2>
                  <img
                    src="/images/forward-arrow.png"
                    alt="Forward"
                    className="w-5 h-4"
                  />
                </div>
                <div className="mt-4 flex justify-center">
                  <div className="w-16 h-[2px] bg-white/30 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* === TRENDY PLANTS CARDS === */}
        <div className="w-full flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-10">
            Our Trendy Plants
          </h2>

          <div className="flex flex-col gap-10 justify-center items-center">
            {/* Card 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8 bg-white/10 backdrop-blur-lg rounded-[2rem] p-8 border border-white/30 shadow-lg max-w-3xl">
              <img
                src="/images/small-desk-plant.jpg"
                alt="For Small Desk AI Plant"
                className="w-44 h-44 object-cover rounded-2xl"
              />
              <div className="flex flex-col flex-1">
                <h3 className="text-2xl font-semibold text-white">
                  For Small Desk AI Plant
                </h3>
                <p className="text-white/80 text-sm md:text-base mt-3 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex flex-col mt-6">
                  <span className="text-xl md:text-2xl font-bold text-white mb-4">
                    Rs. 599/-
                  </span>
                  <div className="flex items-center gap-3">
                    <button className="border border-white text-white px-6 py-2 rounded-xl hover:bg-white/10 transition-colors">
                      Buy Now
                    </button>
                    <button className="w-10 h-10 border border-white rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                      <ShoppingBag size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 bg-white/10 backdrop-blur-lg rounded-[2rem] p-8 border border-white/30 shadow-lg max-w-3xl">
              <img
                src="/images/fresh-decs-plant.jpg"
                alt="For Fresh Decs AI Plant"
                className="w-44 h-44 object-cover rounded-2xl"
              />
              <div className="flex flex-col flex-1">
                <h3 className="text-2xl font-semibold text-white">
                  For Fresh Decs AI Plant
                </h3>
                <p className="text-white/80 text-sm md:text-base mt-3 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex flex-col mt-6">
                  <span className="text-xl md:text-2xl font-bold text-white mb-4">
                    Rs. 499/-
                  </span>
                  <div className="flex items-center gap-3">
                    <button className="border border-white text-white px-6 py-2 rounded-xl hover:bg-white/10 transition-colors">
                      Buy Now
                    </button>
                    <button className="w-10 h-10 border border-white rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                      <ShoppingBag size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </section>
  );
};

export default Hero;
