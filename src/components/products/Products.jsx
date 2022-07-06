import { useProduct } from "../../context";
import { Card } from "../card/Card";

const Products = () => {
  const { productState } = useProduct();
  console.log(productState);
  return (
    <div className="flex flex-row flex-wrap">
      {productState?.filteredProducts.length > 0 ? (
        productState?.filteredProducts?.map((item) => <Card item={item} key={item._id} />)
      ) : (
        <h1 className="p-4">No matched products to show :/</h1>
      )}
    </div>
  );
};

export { Products };
