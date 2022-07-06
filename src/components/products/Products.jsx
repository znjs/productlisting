import { useProduct } from "../../context";
import { Card } from "../card/Card";

const Products = () => {
  const { productState } = useProduct();
  return (
    <div className="flex flex-row flex-wrap">
      {productState.filteredProducts.map((item) => (
        <Card item={item} key={item._id} />
      ))}
    </div>
  );
};

export { Products };
