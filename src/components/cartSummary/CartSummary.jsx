import { useNavigate } from "react-router-dom";
import { useCart } from "../../context";

export const CartSummary = () => {
  const { cartState, cartDispatch } = useCart();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col mx-3 w-64">
      <button
        className="bg-orange-500 py-2 mb-2 text-white font-semibold"
        onClick={() => {
          cartDispatch({ type: "CLEAR_CART" });
          navigate("/");
        }}>
        PLACE ORDER
      </button>
      <div className="bg-white self-start">
        <h1 className="text-gray-400 px-3 py-3 border-b-2 border-gray-300 font-semibold">
          PRICE DETAILS
        </h1>
        <div className="flex justify-between mx-3 font-semibold py-3">
          <p>Price&nbsp;({cartState.cart.length})</p>
          <p>
            &#8377;
            {cartState.cart.reduce((acc, curr) => {
              return acc + curr.costPrice * curr.count;
            }, 0)}
          </p>
        </div>
        <div className="flex justify-between mx-3 font-semibold py-3">
          <p>Discount</p>
          <p className="text-green-600">
            -&#8377;
            {cartState.cart.reduce((acc, curr) => {
              return acc + (-curr.sellingPrice + curr.costPrice * curr.count);
            }, 0)}
          </p>
        </div>
        <div className="flex justify-between mx-3 font-semibold py-3 border-b-2 border-gray-300">
          <p>Delivery Charges</p>
          <p className="text-green-600">FREE</p>
        </div>
        <div className="flex justify-between mx-3 font-semibold py-3  border-b-2 border-gray-300">
          <p>Total Price</p>
          <p className="">
            &#8377;
            {cartState.cart.reduce((acc, curr) => {
              return acc + curr.sellingPrice * curr.count;
            }, 0)}
          </p>
        </div>
        <p className="text-green-500 py-3 font-semibold mx-3">
          You will save &#8377;
          {cartState.cart.reduce((acc, curr) => {
            return acc + (-curr.sellingPrice + curr.costPrice * curr.count);
          }, 0)}
          on this order
        </p>
      </div>
      <div className="flex items-center justify-between mt-2">
        <p className="flex relative w-12 h-12 pr-2 justify-center items-center">
          <i className="fa-solid fa-shield text-gray-500  text-3xl"></i>
          <i className="fa-solid fa-check absolute text-gray-200"></i>
        </p>
        <p className="text-gray-600 text-sm font-semibold">
          Safe and Secure Payments. Easy returns. 100% authentic products.
        </p>
      </div>
    </div>
  );
};
