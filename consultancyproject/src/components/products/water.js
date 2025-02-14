import React, { useEffect, useState } from "react";

const WaterproofLEDLight = () => {
  // Sample product data
  const products = [
    {
      name: "Product A",
      volt: "12V",
      partNo: "PA123",
      color: "bg-white",
      image:
        "https://sparkledlights.in/img/products/volvo/Volvo%20D%20blue.png",
    },
    {
      name: "Product B",
      volt: "24V",
      partNo: "PB456",
      color: "bg-black",
      image:
        "https://sparkledlights.in/img/products/volvo/Volvo%20D%20blue.png",
    },
    {
      name: "Product C",
      volt: "12V",
      partNo: "PC789",
      color: "bg-red-500",
      image:
        "https://sparkledlights.in/img/products/volvo/Volvo%20D%20blue.png",
    },
    {
      name: "Product D",
      volt: "24V",
      partNo: "PD101",
      color: "bg-blue-500",
      image:
        "https://sparkledlights.in/img/products/volvo/Volvo%20D%20blue.png",
    },
    {
      name: "Product E",
      volt: "12V",
      partNo: "PE112",
      color: "bg-green-500",
      image:
        "https://sparkledlights.in/img/products/volvo/Volvo%20D%20blue.png",
    },
    {
      name: "Product F",
      volt: "24V",
      partNo: "PF131",
      color: "bg-yellow-400",
      image:
        "https://sparkledlights.in/img/products/volvo/Volvo%20D%20blue.png",
    },
    {
      name: "Product G",
      volt: "12V",
      partNo: "PG415",
      color: "bg-gray-400",
      image:
        "https://sparkledlights.in/img/products/volvo/Volvo%20D%20blue.png",
    },
    {
      name: "Product H",
      volt: "24V",
      partNo: "PH161",
      color: "bg-orange-500",
      image:
        "https://sparkledlights.in/img/products/volvo/Volvo%20D%20blue.png",
    },
  ];

  // State to control animation
  const [isLoaded, setIsLoaded] = useState(false);

  // Trigger animation after component mounts
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100 flex-col">
      {/* Image Section */}
      <div className="relative w-full h-64 md:h-96">
        <img
          src="https://media.licdn.com/dms/image/D4D12AQHx9wBtXZMFNg/article-cover_image-shrink_720_1280/0/1673413000531?e=2147483647&v=beta&t=oBuE0aLK-7X2rrktBxzK9_c_h89fMBpkdncHbxXURLk"
          alt="Waterproof LED Light"
          className="w-full h-full object-cover"
        />
        <div className="absolute z-0 inset-0 bg-blue-900 bg-opacity-80 flex items-center justify-center">
          <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-center px-4">
            WATER PROOF LED LIGHTS
          </h1>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="container mx-auto p-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          Product Details
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className={`bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-500 transform ${
                isLoaded ? "scale-100 opacity-100" : "scale-75 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Product Image */}
              <div className="w-full h-48 overflow-hidden rounded-lg mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Details */}
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                <span className="font-medium">Volt:</span> {product.volt}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                <span className="font-medium">Part No:</span> {product.partNo}
              </p>
              <div className="flex items-center mt-1">
                <span className="font-medium text-sm text-gray-600 mr-2">
                  Color:
                </span>
                <div
                  className={`w-4 h-4 rounded-full ${product.color} border border-gray-300`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WaterproofLEDLight;