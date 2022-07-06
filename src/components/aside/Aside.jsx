import { useProduct } from "../../context";

const GENDER = ["Men", "Women", "Kids"];
const SIZES = ["S", "M", "L", "XL"];
const BRANDS = [
  "HIGHLANDER",
  "Dennis Lingo",
  "Bad Boys",
  "PERFECTPIVOT",
  "Semizoxis",
  "Pantaloons",
  "PEOPLE",
];

const Aside = () => {
  const { productState, productDispatch } = useProduct();
  return (
    <div className="min-w-[270px] bg-gray-50 m-2 rounded-md sticky left-0 h-[640px] top-4">
      <div className="flex flex-row justify-between items-center px-4 border-b-[1px] my-3">
        <p className="text-lg font-semibold">Filters</p>
        <p
          className="hover:underline cursor-pointer text-blue-700"
          onClick={() =>
            productDispatch({
              type: "CLEAR_FILTER",
            })
          }>
          Clear Filter
        </p>
      </div>
      <div className="px-4 border-b-[1px]">
        <p className="text-md font-medium">Gender</p>
        {GENDER.map((gender, idx) => (
          <p key={idx} className="flex items-center">
            <input
              name={gender}
              type="checkbox"
              id={gender}
              value={gender}
              checked={productState.genderFilter.includes(gender)}
              onChange={() =>
                productDispatch({
                  type: "FILTER_BY_GENDER",
                  payload: { gender },
                })
              }
            />
            <label htmlFor={gender} className="grow">
              {gender}
            </label>
          </p>
        ))}
      </div>
      <div className="px-4 border-b-[1px] mt-3">
        <p className="text-md font-medium">Size</p>
        {SIZES.map((size, idx) => (
          <p key={idx} className="flex items-center">
            <input
              name={size}
              type="checkbox"
              id={size}
              value={size}
              checked={productState.sizeFilter.includes(size)}
              onChange={() => productDispatch({ type: "FILTER_BY_SIZE", payload: { size } })}
            />
            <label htmlFor={size} className="grow">
              {size}
            </label>
          </p>
        ))}
      </div>
      <div className="px-4 border-b-[1px] mt-3">
        <p className="text-md font-medium">Brand</p>
        {BRANDS.map((brand, idx) => (
          <p key={idx} className="flex items-center">
            <input
              name={brand}
              type="checkbox"
              id={brand}
              value={brand}
              checked={productState.brandFilter.includes(brand)}
              onChange={() =>
                productDispatch({
                  type: "FILTER_BY_BRAND",
                  payload: { brand },
                })
              }
            />
            <label htmlFor={brand} className="grow">
              {brand}
            </label>
          </p>
        ))}
      </div>
      <div className="px-4 border-b-[1px] mt-3">
        <p className="text-md font-medium">Sort By</p>
        <p className="flex items-center">
          <input
            type="radio"
            id="ASC"
            name="sort"
            value="ASC"
            checked={productState.sort === "ASC"}
            onChange={() =>
              productDispatch({
                type: "SORT_BY_PRICE",
                payload: { sort: "ASC" },
              })
            }
          />
          <label htmlFor="ASC" className="grow">
            Hight to Low
          </label>
        </p>
        <p className="flex items-center">
          <input
            type="radio"
            id="DEC"
            name="sort"
            value="DEC"
            checked={productState.sort === "DEC"}
            onChange={() =>
              productDispatch({
                type: "SORT_BY_PRICE",
                payload: { sort: "DEC" },
              })
            }
          />
          <label htmlFor="DEC" className="grow">
            Low to High
          </label>
        </p>
      </div>
    </div>
  );
};

export { Aside };
