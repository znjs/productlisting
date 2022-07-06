import { useContext, useReducer } from "react";
import { createContext } from "react";
import * as data from "../data/products.json";
import { productReducer } from "../reducer";

const { products } = data;
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
