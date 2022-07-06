import { useContext, useReducer } from "react";
import { createContext } from "react";
import { products } from "../data";
import { productReducer } from "../reducer";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const initalState = {
    allProducts: products,
    filteredProducts: products,
    genderFilter: [],
    sizeFilter: [],
    brandFilter: [],
    sort: null,
  };
  const [productState, productDispatch] = useReducer(productReducer, initalState);
  return (
    <ProductContext.Provider value={{ productState, productDispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export { ProductProvider, useProduct };
