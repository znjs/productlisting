function getArraysIntersection(a1, a2) {
  return a1.filter(function (n) {
    return a2.indexOf(n) !== -1;
  });
}

export const productReducer = (state, action) => {
  let stateCopy = state;
  switch (action.type) {
    case "CLEAR_FILTER":
      stateCopy = {
        ...stateCopy,
        filteredProducts: stateCopy.allProducts,
        genderFilter: [],
        sizeFilter: [],
        brandFilter: [],
        sort: null,
      };
      break;
    case "FILTER_BY_GENDER":
      stateCopy = {
        ...stateCopy,
        genderFilter: stateCopy.genderFilter.includes(action.payload.gender)
          ? stateCopy.genderFilter.filter((gender) => gender !== action.payload.gender)
          : [...stateCopy.genderFilter, action.payload.gender],
      };
      stateCopy = {
        ...stateCopy,
        filteredProducts: stateCopy.allProducts.filter((product) =>
          stateCopy.genderFilter.includes(product.for),
        ),
      };
      break;
    case "FILTER_BY_BRAND":
      stateCopy = {
        ...stateCopy,
        brandFilter: stateCopy.brandFilter.includes(action.payload.brand)
          ? stateCopy.brandFilter.filter((gender) => gender !== action.payload.brand)
          : [...stateCopy.brandFilter, action.payload.brand],
      };
      stateCopy = {
        ...stateCopy,
        filteredProducts: stateCopy.allProducts.filter((product) =>
          stateCopy.brandFilter.includes(product.brand),
        ),
      };
      break;
    case "SORT_BY_PRICE":
      stateCopy = {
        ...stateCopy,
        sort: action.payload.sort,
      };
      stateCopy = {
        ...stateCopy,
        filteredProducts: [...stateCopy.allProducts].sort((item1, item2) => {
          if (stateCopy.sort === "ASC") return item2.sellingPrice - item1.sellingPrice;
          return item1.sellingPrice - item2.sellingPrice;
        }),
      };
      break;
    case "FILTER_BY_SIZE":
      stateCopy = {
        ...stateCopy,
        sizeFilter: stateCopy.sizeFilter.includes(action.payload.size)
          ? stateCopy.sizeFilter.filter((size) => size !== action.payload.size)
          : [...stateCopy.sizeFilter, action.payload.size],
      };
      stateCopy = {
        ...stateCopy,
        filteredProducts: stateCopy.filteredProducts.filter(
          (product) => getArraysIntersection(product.size, stateCopy.sizeFilter).length,
        ),
      };
      break;
    default:
      break;
  }

  if (action.type !== "FILTER_BY_GENDER" && stateCopy.genderFilter.length) {
    stateCopy = {
      ...stateCopy,
      filteredProducts: stateCopy.filteredProducts.filter((product) =>
        stateCopy.genderFilter.includes(product.for),
      ),
    };
  }

  if (action.type !== "FILTER_BY_BRAND" && stateCopy.brandFilter.length) {
    stateCopy = {
      ...stateCopy,
      filteredProducts: stateCopy.filteredProducts.filter((product) =>
        stateCopy.brandFilter.includes(product.brand),
      ),
    };
  }

  if (action.type !== "SORT_BY_PRICE" && stateCopy.sort !== null) {
    stateCopy = {
      ...stateCopy,
      filteredProducts: [...stateCopy.filteredProducts].sort((item1, item2) => {
        if (stateCopy.sort === "ASC") return item2.sellingPrice - item1.sellingPrice;
        return item1.sellingPrice - item2.sellingPrice;
      }),
    };
  }

  if (action.type !== "FILTER_BY_SIZE" && stateCopy.sizeFilter.length) {
    stateCopy = {
      ...stateCopy,
      filteredProducts: stateCopy.filteredProducts.filter(
        (product) => getArraysIntersection(product.size, stateCopy.sizeFilter).length,
      ),
    };
  }

  return stateCopy;
};
