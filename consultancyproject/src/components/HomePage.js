import { useState, useEffect } from "react";

export default function HomePage() {
  const images = [
    "https://sparkledlights.in/img/carousel-1.png",
    "https://sparkledlights.in/img/carousel-1.png",
    "https://sparkledlights.in/img/carousel-1.png",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // New Arrivals Data
  const newArrivals = [
    {
      id: 1,
      image: "https://sparkledlights.in/img/slider/swift.png",
      name: "Product 1",
    },
    {
      id: 2,
      image: "https://sparkledlights.in/img/slider/11.png",
      name: "Product 2",
    },
    {
      id: 3,
      image: "https://sparkledlights.in/img/slider/volvo-type-1.png",
      name: "Product 3",
    },
    {
      id: 4,
      image: "https://sparkledlights.in/img/slider/volvo-type2-b.png",
      name: "Product 4",
    },
    {
      id: 5,
      image: "https://sparkledlights.in/img/slider/1.png",
      name: "Product 5",
    },
    {
      id: 6,
      image: "https://sparkledlights.in/img/slider/222.png",
      name: "Product 6",
    },
  ];

  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [visibleProducts, setVisibleProducts] = useState(4); // Default number of visible products

  // Update the number of visible products based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleProducts(1); // 1 product for mobile
      } else if (window.innerWidth < 1024) {
        setVisibleProducts(2); // 2 products for tablets
      } else {
        setVisibleProducts(4); // 4 products for desktop
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Image carousel logic
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(interval);
  });

  // Automatic New Arrivals carousel logic
  useEffect(() => {
    const interval = setInterval(() => {
      nextProduct();
    }, 5000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }); // Re-run effect when currentProductIndex or visibleProducts changes

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextProduct = () => {
    setCurrentProductIndex((prevIndex) =>
      (prevIndex + 1) % (newArrivals.length - visibleProducts + 1)
    );
  };

  const prevProduct = () => {
    setCurrentProductIndex((prevIndex) =>
      prevIndex === 0 ? newArrivals.length - visibleProducts : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900">
      {/* Image Carousel */}
      <div className="w-full relative overflow-hidden bg-blue-50">
        <div className="w-full" style={{ paddingTop: "56.25%" }}>
          {" "}
          {/* 16:9 Aspect Ratio */}
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={prevImage}
          className="absolute left-4 md:left-10 w-12 h-12 md:w-14 md:h-14 bg-gray-800 bg-opacity-30 text-white rounded-full hover:bg-opacity-80 transition flex items-center justify-center text-2xl"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          ◀
        </button>

        {/* Next Button */}
        <button
          onClick={nextImage}
          className="absolute right-4 md:right-10 w-12 h-12 md:w-14 md:h-14 bg-gray-800 bg-opacity-30 text-white rounded-full hover:bg-opacity-80 transition flex items-center justify-center text-2xl"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          ▶
        </button>
      </div>

      {/* New Arrivals Section */}
      <section className="w-full px-6 lg:px-20 py-12 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-[#133E87] text-center mb-8">
          New Arrivals
        </h2>
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentProductIndex * (100 / visibleProducts)}%)`,
            }}
          >
            {newArrivals.map((product) => (
              <div
                key={product.id}
                className={`flex-shrink-0 p-4`}
                style={{ width: `${100 / visibleProducts}%` }}
              >
                <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-contain rounded-t-lg"
                  />
                  <p className="text-lg font-semibold text-[#608BC1] mt-2 text-center">
                    {product.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Previous Button for New Arrivals */}
        <button
          onClick={prevProduct}
          className="absolute left-2 md:left-5 w-12 h-12 md:w-14 md:h-14 bg-gray-800 bg-opacity-30 text-white rounded-full hover:bg-opacity-80 transition flex items-center justify-center text-2xl"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          ◀
        </button>

        {/* Next Button for New Arrivals */}
        <button
          onClick={nextProduct}
          className="absolute right-2 md:right-5 w-12 h-12 md:w-14 md:h-14 bg-gray-800 bg-opacity-30 text-white rounded-full hover:bg-opacity-80 transition flex items-center justify-center text-2xl"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          ▶
        </button>
      </section>
    </div>
  );
}