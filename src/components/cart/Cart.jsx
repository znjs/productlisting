import { useCart } from "../../context";
import { CartItems } from "../cartItems/CartItems";
import { CartSummary } from "../cartSummary/CartSummary";

export const Cart = () => {
  const { cartState, cartDispatch } = useCart();
  console.log(cartState);
  return (
    <>
      <div className="overflow-auto w-full">
        <div className="flex mx-auto max-w-[960px] mt-3">
          <CartItems />
          <CartSummary />
        </div>
      </div>
    </>
  );
};
