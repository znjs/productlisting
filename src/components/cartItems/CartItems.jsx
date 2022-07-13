import { useCart } from "../../context";
import { CartCard } from "../cartCard/CartCard";
import { SaveForLaterCard } from "../saveForLater/SaveForLaterCard";

export const CartItems = () => {
  const { cartState } = useCart();
  return (
    <div className="w-[560px] bg-white min-h-[500px]">
      <h1 className="text-xl font-semibold p-3 py-4 border-b-2 border-gray-200">
        My Cart&nbsp;({cartState.cart.length})
      </h1>
      <div>
        {cartState.cart.length > 0 ? (
          cartState.cart.map((item) => <CartCard item={item} key={item._id} />)
        ) : (
          <>
            <div className="text-center">Cart is empty :&nbsp;/</div>
          </>
        )}
      </div>
      {cartState.saveForLater.length > 0 && (
        <h1 className="text-xl font-semibold p-3 py-4">
          SAVE FOR LATER&nbsp;({cartState.saveForLater.length})
        </h1>
      )}
      <div>
        {cartState.saveForLater.length > 0 ? (
          cartState.saveForLater.map((item) => <SaveForLaterCard key={item._id} item={item} />)
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
