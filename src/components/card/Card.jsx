import { useState } from "react";

const Card = ({ item }) => {
  const [wishlist, setWishlist] = useState(false);
  return (
    <div className="w-[286px] ml-3 mt-2 bg-white hover:shadow-custom self-start">
      <div className="w-full h-[320px] relative">
        <img
          alt="product"
          src={item.imageUrl}
          className="h-full w-full object-cover object-top bg-white cursor-pointer"
        />
        <i
          onClick={() => setWishlist((prev) => !prev)}
          className={`fa-solid fa-heart absolute top-0 right-0 p-3 ${
            wishlist ? "text-red-500" : "text-gray-400"
          } text-lg cursor-pointer`}></i>
      </div>
      <div className="p-2">
        <div>
          <p className="font-semibold text-gray-500">{item.brand}</p>
          <div className="flex flex-row items-center">
            <p className="text-ellipsis overflow-hidden whitespace-nowrap font-normal cursor-pointer">
              {item.productName}
            </p>
            <img
              className="h-4"
              alt="assured logo"
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
            />
          </div>
        </div>
        <div className="flex flex-row items-center">
          <p className="mr-2 font-medium text-lg cursor-pointer"> &#8377;{item.sellingPrice}</p>
          <p className="line-through text-gray-500 mr-3 text-base cursor-pointer">
            &#8377;{item.costPrice}
          </p>
          <p className="text-green-600 font-semibold text-sm">
            {parseInt(((item.costPrice - item.sellingPrice) * 100) / item.costPrice)}% off
          </p>
        </div>
        <div>
          Size:{" "}
          {item.size.map((size, idx) => (
            <span key={idx}>{size}&nbsp;</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Card };
