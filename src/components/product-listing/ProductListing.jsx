import { Aside } from "../aside/Aside";
import { Products } from "../products/Products";

export const ProductListing = () => {
  return (
    <>
      <div className="grow bg-gray-200">
        <div className="flex flex-row relative max-w-[1500px] mx-auto">
          <Aside />
          <Products />
        </div>
      </div>
    </>
  );
};
