import React from 'react';

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Manjari Sharma",
      image: "/images/manjari-sharma.jpg",
      rating: 5,
      review: "Finally received my order. Thank you for sending fresh and amazing plants at reasonable cost. I hope you'll send the order at exact time.."
    },
    {
      id: 2,
      name: "Rohit Ragwani",
      image: "/images/rohit-ragwani.jpg",
      rating: 5,
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 3,
      name: "Alie Bontay",
      image: "/images/alie-bontay.jpg",
      rating: 5,
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1">
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
    <section id="reviews" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Customer Reviews</h2>
          <div className="flex justify-center items-center gap-5">
            <div className="w-8 h-1.5 bg-gradient-to-r from-accent-green to-accent-lightGreen rounded shadow-glow"></div>
            <div className="w-6 h-1.5 bg-gradient-to-r from-accent-green to-accent-lightGreen rounded shadow-glow"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white/5 border border-white/50 rounded-[2rem] p-5 sm:p-6 backdrop-blur-md hover:-translate-y-1 transition-transform duration-300">
              <div className="mb-5">
                <div className="flex items-center gap-4">
                  <img src={review.image} alt={review.name} className="w-11 h-11 rounded-full object-cover" />
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-white mb-1">{review.name}</h4>
                    <StarRating rating={review.rating} />
                  </div>
                </div>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-white/90">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
