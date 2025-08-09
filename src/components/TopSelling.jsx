// import React from 'react';

// const TopSelling = () => {
//   const products = [
//     {
//       id: 1,
//       name: "For Small Desk AI Plant",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       price: "Rs. 599/-",
//       image: "/images/small-desk-plant.jpg"
//     },
//     {
//       id: 2,
//       name: "For Fresh Decs AI Plant",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       price: "Rs. 499/-",
//       image: "/images/fresh-decs-plant.jpg"
//     }
//   ];

//   return (
//     <section id="top" className="py-20">
//       <div className="max-w-7xl mx-auto px-5">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Our Top Selling</h2>
//           <div className="flex justify-center items-center gap-5">
//             <div className="w-8 h-1.5 bg-gradient-to-r from-accent-green to-accent-lightGreen rounded shadow-glow"></div>
//             <div className="w-6 h-1.5 bg-gradient-to-r from-accent-green to-accent-lightGreen rounded shadow-glow"></div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//           {products.map((product) => (
//             <div key={product.id} className="bg-white/5 border border-white/50 rounded-[2rem] p-8 flex gap-8 backdrop-blur-md hover:-translate-y-1 transition-transform duration-300">
//               <div className="flex-shrink-0">
//                 <img src={product.image} alt={product.name} className="w-72 h-72 object-cover rounded-2xl" />
//               </div>
//               <div className="flex-1 flex flex-col justify-between">
//                 <div>
//                   <h3 className="text-xl font-bold text-white mb-3">{product.name}</h3>
//                   <p className="text-xs leading-relaxed text-white/90 mb-4">{product.description}</p>
//                   <div className="text-xl font-bold text-white mb-6">{product.price}</div>
//                   <div className="flex gap-4">
//                     <button className="bg-white/5 border border-white text-white text-lg font-medium px-6 py-3 rounded-lg hover:bg-white/10 transition-all duration-300">
//                       Buy Now
//                     </button>
//                     <button className="bg-white/5 border border-white text-white p-3 rounded-lg hover:bg-white/10 transition-all duration-300">
//                       <img src="/images/shopping-bag.png" alt="Shopping bag" className="w-6 h-6" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TopSelling;














import React from 'react';

const TrendyPlants = () => {
  const plants = [
    {
      id: 1,
      name: "Peace Lily Plant",
      price: "Rs. 299/-",
      image: "/images/peace-lily.jpg",
      rating: 5
    },
    {
      id: 2,
      name: "Rose Plant",
      price: "Rs. 100/-",
      image: "/images/rose-plant.jpg",
      rating: 5
    },
    {
      id: 3,
      name: "Areca Palm Plant",
      price: "Rs. 499/-",
      image: "/images/areca-palm.jpg",
      rating: 4
    },
    {
      id: 4,
      name: "Anthurium Red Plant",
      price: "Rs. 799/-",
      image: "/images/anthurium-red.jpg",
      rating: 4
    },
    {
      id: 5,
      name: "Thuja Plant",
      price: "Rs. 1099/-",
      image: "/images/thuja-plant.jpg",
      rating: 4
    },
    {
      id: 6,
      name: "Echeveria Lotus Chinensis Plant",
      price: "Rs. 399/-",
      image: "/images/echeveria-plant.jpg",
      rating: 4
    }
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex justify-center gap-1 mb-5">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill={index < rating ? "#FFF84E" : "none"}
            className="w-4 h-4"
          >
            <path d="M9 0L11.0206 6.2918H17.5595L12.2694 10.4164L14.2901 16.7082L9 12.5836L3.70993 16.7082L5.73056 10.4164L0.440492 6.2918H6.97937L9 0Z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section id="trendy" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Our Top Selling</h2>
          <div className="flex justify-center items-center gap-5">
            <div className="w-8 h-1.5 bg-gradient-to-r from-accent-green to-accent-lightGreen rounded shadow-glow"></div>
            <div className="w-6 h-1.5 bg-gradient-to-r from-accent-green to-accent-lightGreen rounded shadow-glow"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {plants.map((plant) => (
            <div key={plant.id} className="bg-white/5 border border-white/40 rounded-[2rem] p-5 sm:p-6 text-center backdrop-blur-md hover:-translate-y-2 transition-transform duration-300">
              <div className="mb-5">
                <img src={plant.image} alt={plant.name} className="w-full h-52 sm:h-60 md:h-64 object-cover rounded-2xl" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{plant.name}</h3>
                <div className="text-lg sm:text-xl font-bold text-white mb-4">{plant.price}</div>
                <StarRating rating={plant.rating} />
                <div className="flex justify-end">
                  <button className="bg-white/5 border border-white text-white p-2.5 sm:p-3 rounded-lg hover:bg-white/10 transition-all duration-300">
                    <img src="/images/shopping-bag.png" alt="Add to cart" className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendyPlants;
