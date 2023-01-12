import React, { useState } from 'react';
import Button from '../../Components/Base/Button';

const Product = () => {
  const images = [
    'https://source.unsplash.com/yiO1893a1j4/600x600',
    'https://source.unsplash.com/jlo7Bf4tUoY/600x600',
    'https://source.unsplash.com/gUPiTDBdRe4/600x600',
    'https://source.unsplash.com/tWOz2_EK5EQ/600x600',
    'https://source.unsplash.com/Fg15LdqpWrs/600x600',
  ];

  const [selectedImage, setSelectedImage] = useState(0);
  const [size, setSize] = useState('S');
  const [quantity, setQuantity] = useState(1);

  const calculateQuantity = (method: string) => {
    if (method === '-') {
      setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  return (
    <section className="pagecontainer lg:h-screen mb-20">
      <div className="shadow-2xl rounded p-10 w-full mt-10">
        <div className="flex lg:flex-row flex-col justify-between lg:space-y-0 space-y-8">
          <div className="w-full md:w-8/12 lg:w-[38%]">
            <img src={images[selectedImage]} alt="" className="w-full" />

            <div className="w-full overflow-scroll lg:overflow-hidden flex items-center space-x-4 mt-8">
              {images.map((image, index) => (
                <div key={index}>
                  <img
                    src={images[index]}
                    alt=""
                    className="w-24 cursor-pointer hover:border-4 hover:border-primary"
                    onClick={() => setSelectedImage(index)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-4/12">
            <div className="space-y-4">
              <h2 className="font-bold text-base lg:text-xl">
                Ralph Lauren Men’s Regular-Fit Long-Sleeve Shirt
              </h2>

              <p>
                <span className="font-bold"> N</span>12,000
              </p>

              <p className="">Store name: Thrifting_Store</p>

              <p className="font-bold">Choose size:</p>
              <div className="flex items-center space-x-3">
                <span
                  onClick={() => setSize('S')}
                  className={`cursor-pointer ${
                    size === 'S' && 'text-white bg-red-500'
                  }  border border-gray-600 rounded w-2 h-2 p-3 flex items-center text-sm justify-center`}
                >
                  S
                </span>
                <span
                  onClick={() => setSize('M')}
                  className={`cursor-pointer ${
                    size === 'M' && 'text-white bg-red-500'
                  }  border border-gray-600 rounded w-2 h-2 p-3 flex items-center text-sm justify-center`}
                >
                  M
                </span>
                <span
                  onClick={() => setSize('L')}
                  className={`cursor-pointer ${
                    size === 'L' && 'text-white bg-red-500'
                  }  border border-gray-600 rounded w-2 h-2 p-3 flex items-center text-sm justify-center`}
                >
                  L
                </span>
                <span
                  onClick={() => setSize('XL')}
                  className={`cursor-pointer ${
                    size === 'XL' && 'text-white bg-red-500'
                  }  border border-gray-600 rounded w-2 h-2 p-3 flex items-center text-sm justify-center`}
                >
                  XL
                </span>
              </div>
            </div>
            <div className="pt-8">
              <p className="font-bold  border-b border-red-400 pb-2 w-28">
                About Item
              </p>

              <div className="flex items-center justify-between pt-3">
                <div className="space-y-2">
                  <p>
                    Brand:
                    <span className="font-semibold pl-1">Ralph Lauren</span>
                  </p>
                  <p>
                    Category:
                    <span className="font-semibold pl-1">Men Shirt</span>
                  </p>
                  <p>
                    Condition:
                    <span className="font-semibold pl-1">Brand New</span>
                  </p>
                </div>
                <div className="space-y-2">
                  <p>
                    Colour:
                    <span className="font-semibold pl-1">Red</span>
                  </p>
                  <p>
                    Category:
                    <span className="font-semibold pl-1">Men Shirt</span>
                  </p>
                  <p>
                    Condition:
                    <span className="font-semibold pl-1">Brand New</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-">
            <div>
              <h2 className="font-bold text-center">Set order</h2>
            </div>

            <div className="flex items-center pt-6 space-x-4">
              <div className="bg-gray-200 rounded flex items-center p-3">
                <img src={images[selectedImage]} alt="" className="w-20" />
              </div>
              <div>
                <p className="text-xs text-gray-700">Selected size</p>
                <p className="font-bold text-xs text-center">{size}</p>
              </div>
            </div>

            <div className="pt-7 space-y-3">
              <p className="flex justify-between items-center ">
                <span className="w-18">Colour:</span>
                <span className="font-semibold pl-1">Green</span>
              </p>
              <div className="flex justify-between items-center ">
                <span className="w-18">Quantity:</span>
                <div className="flex items-center rounded border border-gray-400">
                  <span
                    onClick={() => {
                      quantity > 1 && calculateQuantity('-');
                    }}
                    className="px-2  border-r border-gray-400 cursor-pointer text-xl text-red-400"
                  >
                    -
                  </span>

                  <span className="px-2  text-sm">{quantity}</span>
                  <span
                    onClick={() => calculateQuantity('+')}
                    className="px-2  border-l border-gray-400 cursor-pointer text-xl text-red-400"
                  >
                    +
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center ">
                <span className="">Total Price:</span>

                <p>
                  <span className="font-bold"> N</span>12,000
                </p>
              </div>{' '}
              <Button full>Buy Now</Button>
              <Button variant="outlineprimary" full>
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
