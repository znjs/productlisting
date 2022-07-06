const Navbar = () => {
  return (
    <div className="bg-blue-500 h-14 flex items-center justify-center">
      <div className="flex flex-col mx-2">
        <img
          src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
          alt="logo"
          className="h-6"
        />
        <div className="flex items-center mx-auto">
          <span className="hover:underline text-xs mr-1 text-gray-50 italic cursor-pointer">
            <span>Explore</span>
            <span className="text-yellow-500">&nbsp;plus</span>
          </span>
          <img
            className="h-4"
            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
            alt="plus"
          />
        </div>
      </div>
      <div className="rounded-sm bg-white">
        <input
          type="text"
          className="border-none outline-none p-2 w-[420px]"
          placeholder="Search for products, brands and more"
        />
        <i className="fa-solid fa-magnifying-glass mx-2 text-blue-600"></i>
      </div>
      <button className="px-8 py-1 mx-3 bg-white text-blue-600 font-semibold">Login</button>
      <p className="text-white font-semibold mx-3 cursor-pointer">Become a Seller</p>
      <p className="text-white font-semibold mx-3">
        More&nbsp; <i className="fa-solid fa-angle-down cursor-pointer"></i>
      </p>
      <p className="text-white font-semibold mx-3 cursor-pointer">
        <i className="fa-solid fa-cart-shopping text-lg"></i>&nbsp; Cart
      </p>
    </div>
  );
};

export { Navbar };
