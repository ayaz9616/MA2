// import React from 'react';

// const Footer = () => {
//   return (
//     <footer id="contact" className="bg-primary/95 py-16">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         {/* Main Footer Content */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-15">
//           {/* Company Info */}
//           <div className="lg:col-span-2">
//             <div className="mb-8">
//               <div className="flex items-center gap-4 mb-6">
//                 <img src="/images/logo.png" alt="Planto" className="w-10 h-10" />
//                 <span className="text-3xl font-black text-white">Planto.</span>
//               </div>
//               <p className="text-sm md:text-base font-medium text-white/90 leading-relaxed mb-6">
//                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
//               </p>
//               <div className="flex gap-3 text-4xl font-medium text-white/75">
//                 <span>‹</span>
//                 <span>‹</span>
//               </div>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-xl md:text-2xl font-bold text-white mb-4">Quick Links</h4>
//             <ul className="space-y-2.5">
//               <li><a href="#home" className="text-base md:text-lg font-medium text-white/75 hover:text-white transition-colors duration-300">Home</a></li>
//               <li><a href="#trendy" className="text-base md:text-lg font-medium text-white/75 hover:text-white transition-colors duration-300">Plant Types</a></li>
//               <li><a href="#top" className="text-base md:text-lg font-medium text-white/75 hover:text-white transition-colors duration-300">Top Selling</a></li>
//               <li><a href="#reviews" className="text-base md:text-lg font-medium text-white/75 hover:text-white transition-colors duration-300">Reviews</a></li>
//             </ul>
//           </div>

//           {/* Newsletter */}
//           <div>
//             <h4 className="text-xl md:text-2xl font-bold text-white mb-4">For Every Update</h4>
//             <div className="space-y-4">
//               <input 
//                 type="email" 
//                 placeholder="Enter Email...." 
//                 className="w-full px-4 py-3 border border-white/50 rounded-full bg-white/5 text-white text-base md:text-lg font-medium placeholder-white/80"
//               />
//               <button className="w-full px-4 py-3 bg-white text-black text-base md:text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300">
//                 SUBSCRIBE
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Contact and Social Media */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-15">
//           {/* Contact Info */}
//           <div>
//             <h4 className="text-xl md:text-2xl font-bold text-white mb-4">Get in touch</h4>
//             <div className="space-y-2 mb-5">
//               <p className="text-sm md:text-base font-semibold text-white">Call: +91-9129912991</p>
//               <p className="text-sm md:text-base font-semibold text-white">Email: support@planto.com</p>
//             </div>
            
//             {/* Social Media */}
//             <h4 className="text-xl md:text-2xl font-bold text-white mb-4">FOLLOW US</h4>
//             <div className="flex gap-3">
//               <a href="#youtube" className="w-6 h-6 hover:scale-110 transition-transform duration-300">
//                 <img src="/images/youtube-icon.png" alt="YouTube" />
//               </a>
//               <a href="#facebook" className="w-6 h-6 hover:scale-110 transition-transform duration-300">
//                 <img src="/images/facebook-icon.png" alt="Facebook" />
//               </a>
//               <a href="#twitter" className="w-6 h-6 hover:scale-110 transition-transform duration-300">
//                 <img src="/images/twitter-icon.png" alt="Twitter" />
//               </a>
//               <a href="#instagram" className="w-6 h-6 hover:scale-110 transition-transform duration-300">
//                 <img src="/images/instagram-icon.png" alt="Instagram" />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Values Section */}
//         <div className="bg-[#B19292] rounded-[2rem] p-8 mb-10 text-center">
//           <div className="flex justify-center gap-8 mb-5 flex-wrap">
//             <img src="/images/tree-icon.png" alt="Tree" className="w-16 h-16" />
//             <img src="/images/handmade-icon.png" alt="Handmade" className="w-16 h-16" />
//             <img src="/images/earth-care-icon.png" alt="Earth Care" className="w-16 h-16" />
//           </div>
//           <div className="flex justify-center gap-8 flex-wrap">
//             <span className="text-xl md:text-2xl font-bold text-black">Plants Grow People</span>
//             <span className="text-xl md:text-2xl font-bold text-black">Save Earth</span>
//             <span className="text-xl md:text-2xl font-bold text-black">Save People</span>
//             <span className="text-xl md:text-2xl font-bold text-black">Save Environment</span>
//           </div>
//         </div>

//         {/* About Text */}
//         <div className="max-w-4xl mx-auto mb-10 text-center">
//           <p className="text-xl md:text-2xl font-bold text-white leading-relaxed mb-4">
//             ●Plants at Home: Bring Home Nature's Gateway
//           </p>
//           <p className="text-sm md:text-base font-medium text-white/90 leading-relaxed">
//             Bringing plants home has been a practice for ages now. But have you ever wondered how that really works and why people keep doing so? There's something magical about having live plants in your space. Not only do they bring a slice of nature indoors or to your outdoor gardens but they also bring with them a variety of benefits. They promote an unparalleled sense of tranquility and, with an easy-to-use online platform, you can buy live plants online and experience the joy of nature's gateways at your fingertips.
//           </p>
//         </div>

//         {/* Copyright */}
//         <div className="text-center pt-10 border-t border-white/20">
//           <p className="text-base md:text-lg font-semibold text-white">© 2024, Planto. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

















// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-[#0E140E] text-white">
//       {/* About Section */}
//       <div className="max-w-7xl mx-auto px-6 pt-10 text-center">
//         <div className="flex justify-center items-center gap-3 mb-4">
//           <img src="/images/logo.png" alt="Planto Logo" className="w-8 h-8" />
//           <h1 className="text-2xl font-bold">Planto.</h1>
//         </div>
//         <h2 className="text-lg font-semibold mb-3">
//           ●Plants at Home: Bring Home Nature’s Gateway
//         </h2>
//         <p className="text-sm text-white/90 max-w-4xl mx-auto leading-relaxed">
//           Bringing plants home has been a practice for ages now. But have you
//           ever wondered how that really works and why people keep doing so?
//           There’s something magical about having live plants in your space. Not
//           only do they bring a slice of nature indoors or to your outdoor
//           gardens but they also bring with them a variety of benefits. They
//           promote an unparalleled sense of tranquility and easy-to-use online
//           platform, you can buy live plants online and experience the joy of
//           nature’s gateways at your fingertips.
//         </p>
//       </div>

//       {/* Icon Row */}
//       <div className="bg-[#B19292] rounded-[2rem] max-w-6xl mx-auto mt-8 p-6 flex flex-wrap justify-around items-center gap-6 text-black font-semibold text-lg">
//         <div className="flex flex-col items-center">
//           <img src="/images/tree-icon.png" alt="Plants Grow People" className="w-12 h-12 mb-2" />
//           Plants Grow People
//         </div>
//         <div className="flex flex-col items-center">
//           <img src="/images/save-earth.png" alt="Save Earth" className="w-12 h-12 mb-2" />
//           Save Earth
//         </div>
//         <div className="flex flex-col items-center">
//           <img src="/images/save-people.png" alt="Save People" className="w-12 h-12 mb-2" />
//           Save People
//         </div>
//         <div className="flex flex-col items-center">
//           <img src="/images/save-environment.png" alt="Save Environment" className="w-12 h-12 mb-2" />
//           Save Environment
//         </div>
//       </div>

//       {/* Footer Links Section */}
//       <div className="max-w-7xl mx-auto px-6 mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Follow Us */}
//         <div>
//           <h4 className="font-bold mb-3">FOLLOW US</h4>
//           <div className="flex gap-3 mb-4 text-xl">
//             <a href="#"><img src="/images/instagram.png" alt="Instagram" className="w-5 h-5" /></a>
//             <a href="#"><img src="/images/facebook.png" alt="Facebook" className="w-5 h-5" /></a>
//             <a href="#"><img src="/images/twitter.png" alt="Twitter" className="w-5 h-5" /></a>
//             <a href="#"><img src="/images/youtube.png" alt="YouTube" className="w-5 h-5" /></a>
//           </div>
//           <p>Get in touch</p>
//           <p className="text-sm">Call : +91-9129819291</p>
//           <p className="text-sm">Email : support@planto.com</p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h4 className="font-bold mb-3">Quick Link’s</h4>
//           <ul className="space-y-2">
//             <li><a href="#" className="hover:text-gray-300">Home</a></li>
//             <li><a href="#" className="hover:text-gray-300">Plant Type’s</a></li>
//             <li><a href="#" className="hover:text-gray-300">Contact</a></li>
//             <li><a href="#" className="hover:text-gray-300">Privacy</a></li>
//           </ul>
//         </div>

//         {/* Subscription */}
//         <div>
//           <h4 className="font-bold mb-3">For Every Update’s</h4>
//           <div className="flex">
//             <input
//               type="email"
//               placeholder="Enter Email...."
//               className="px-4 py-2 rounded-l-full bg-transparent border border-white/40 placeholder-white/70 text-sm focus:outline-none"
//             />
//             <button className="bg-white text-black px-4 py-2 rounded-r-md font-semibold hover:bg-gray-200">
//               SUBSCRIBE
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Copyright */}
//       <div className="text-center text-sm mt-10 pb-6">
//         © 2024, Planto. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;











import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#0E140E] text-white">
      {/* About Section */}
<div className="max-w-7xl mx-auto px-6 pt-10 text-left ml-0 md:ml-12 lg:ml-24">
  <div className="flex justify-start items-start gap-3 mb-4">
    <img src="/images/logo.png" alt="Planto Logo" className="w-8 h-8" />
    <h1 className="text-2xl font-bold">Planto.</h1>
  </div>
  <h2 className="text-lg font-semibold mb-3">
    ●Plants at Home: Bring Home Nature’s Gateway
  </h2>
  <p className="text-sm text-white/90 max-w-4xl leading-relaxed">
    Bringing plants home has been a practice for ages now. But have you
    ever wondered how that really works and why people keep doing so?
    There’s something magical about having live plants in your space. Not
    only do they bring a slice of nature indoors or to your outdoor
    gardens but they also bring with them a variety of benefits. They
    promote an unparalleled sense of tranquility and easy-to-use online
    platform, you can buy live plants online and experience the joy of
    nature’s gateways at your fingertips.
  </p>
</div>


      {/* Icon Row */}
      <div className="bg-[#B19292] rounded-[2rem] max-w-6xl mx-auto mt-8 p-5 sm:p-6 flex flex-wrap justify-around items-center gap-4 sm:gap-6 text-black font-semibold text-base sm:text-lg">
        <div className="flex items-center gap-3">
          <img src="/images/tree-icon.png" alt="Plants Grow People" className="w-10 h-10 sm:w-12 sm:h-12" />
          Plants Grow People
        </div>
        <div className="flex gap-3 sm:gap-10 items-center">
          <img src="/images/handmade-icon.png" alt="Save Earth" className="w-10 h-10 sm:w-12 sm:h-12" />
          Save Earth
        </div>
        <div className="flex gap-3 sm:gap-10 items-center">
          <img src="/images/earth-care-icon.png" alt="Save People" className="w-10 h-10 sm:w-12 sm:h-12" />
          Save People
        </div>
        <div className="flex gap-3 sm:gap-10 items-center">
          <img src="/images/earth-care-icon.png" alt="Save Environment" className="w-10 h-10 sm:w-12 sm:h-12" />
          Save Environment
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {/* Follow Us */}
        <div>
          <h4 className="font-bold mb-3">FOLLOW US</h4>
          <div className="flex gap-3 mb-4 text-xl">
            <a href="#"><img src="/images/instagram-icon.png" alt="Instagram" className="w-5 h-5" /></a>
            <a href="#"><img src="/images/facebook-icon.png" alt="Facebook" className="w-5 h-5" /></a>
            <a href="#"><img src="/images/twitter-icon.png" alt="Twitter" className="w-5 h-5" /></a>
            <a href="#"><img src="/images/youtube-icon.png" alt="YouTube" className="w-5 h-5" /></a>
          </div>
          <p>Get in touch</p>
          <p className="text-sm">Call : +91-9129819291</p>
          <p className="text-sm">Email : support@planto.com</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-gray-300">Home</a></li>
            <li><a href="#trendy" className="hover:text-gray-300">Plant Types</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
            <li><a href="#privacy" className="hover:text-gray-300">Privacy</a></li>
          </ul>
        </div>

        {/* Subscription */}
        <div>
          <h4 className="font-bold mb-3">For Every Update</h4>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter Email...."
              className="px-4 py-2 rounded-l-full bg-transparent border border-white/40 placeholder-white/70 text-sm focus:outline-none"
            />
            <button className="bg-white text-black px-4 py-2 rounded-r-md font-semibold hover:bg-gray-200">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs sm:text-sm mt-10 pb-6">
        © 2024, Planto. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
