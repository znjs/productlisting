import { useCart } from "../../context";

export const SaveForLaterCard = ({ item }) => {
  const { cartDispatch } = useCart();
  return (
    <div className=" bg-white hover:shadow-custom self-start flex p-3">
      <div className="relative">
        <img
          alt="product"
          src={item.imageUrl}
          className="h-36 w-40 object-cover object-top bg-white cursor-pointer"
        />
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
        <div className="flex py-4">
          <p
            className="px-3 py-3 font-semibold cursor-pointer text-gray-600"
            onClick={() => cartDispatch({ type: "MOVE_TO_CART", payload: { item } })}>
            MOVE TO CART
          </p>
          <p
            className="px-3 py-3 font-semibold cursor-pointer text-gray-600"
            onClick={() =>
              cartDispatch({ type: "REMOVE_ITEM_FROM_SAVE_LATER", payload: { _id: item._id } })
            }>
            REMOVE
          </p>
        </div>
      </div>
    </div>
  );
};
