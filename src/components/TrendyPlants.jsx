import { ShoppingBag } from "lucide-react";

export default function TrendyPlants() {
  return (
    <section
      id="trendy"
      className="relative w-full bg-cover bg-center py-20"
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Our Trendy Plants
          </h2>
          <div className="mt-3 flex justify-center items-center gap-3">
            <div className="w-8 h-[3px] bg-white/70 rounded-full" />
            <div className="w-4 h-[3px] bg-white/50 rounded-full" />
          </div>
        </div>

        <div className="flex flex-col gap-10 items-center">
          {/* Card 1 */}
          <div className="w-full flex flex-col md:flex-row items-center gap-6 sm:gap-8 bg-white/10 backdrop-blur-lg rounded-[2rem] p-6 sm:p-8 border border-white/30 shadow-lg max-w-3xl">
            {/* Product Image */}
            <img
              src="/images/small-desk-plant.jpg"
              alt="For Small Desk AI Plant"
              className="w-36 h-36 sm:w-44 sm:h-44 object-cover rounded-2xl"
            />
            {/* Details */}
            <div className="flex flex-col flex-1">
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                For Small Desk AI Plant
              </h3>
              <p className="text-white/80 text-sm sm:text-base mt-3 max-w-md leading-relaxed">
                Perfect for adding a splash of nature to your workspace. Minimal maintenance with maximum charm.
              </p>
              <div className="flex flex-col justify-between mt-6 w-full">
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4">Rs. 599/-</span>
                <div className="flex items-center gap-3">
                  <button className="border border-white text-white px-5 sm:px-6 py-2 rounded-xl hover:bg-white/10 transition-colors">
                    Buy Now
                  </button>
                  <button className="w-9 h-9 sm:w-10 sm:h-10 border border-white rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                    <ShoppingBag size={16} className="sm:hidden" />
                    <ShoppingBag size={18} className="hidden sm:block" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full flex flex-col md:flex-row-reverse items-center gap-6 sm:gap-8 bg-white/10 backdrop-blur-lg rounded-[2rem] p-6 sm:p-8 border border-white/30 shadow-lg max-w-3xl">
            {/* Product Image */}
            <img
              src="/images/fresh-decs-plant.jpg"
              alt="For Fresh Decs AI Plant"
              className="w-36 h-36 sm:w-44 sm:h-44 object-cover rounded-2xl"
            />
            {/* Details */}
            <div className="flex flex-col flex-1">
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                For Fresh Decs AI Plant
              </h3>
              <p className="text-white/80 text-sm sm:text-base mt-3 max-w-md leading-relaxed">
                Refresh your decor with this vibrant plant, designed to bring life and freshness to any space.
              </p>
              <div className="flex flex-col justify-between mt-6 w-full">
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4">Rs. 499/-</span>
                <div className="flex items-center gap-3">
                  <button className="border border-white text-white px-5 sm:px-6 py-2 rounded-xl hover:bg-white/10 transition-colors">
                    Buy Now
                  </button>
                  <button className="w-9 h-9 sm:w-10 sm:h-10 border border-white rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                    <ShoppingBag size={16} className="sm:hidden" />
                    <ShoppingBag size={18} className="hidden sm:block" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
