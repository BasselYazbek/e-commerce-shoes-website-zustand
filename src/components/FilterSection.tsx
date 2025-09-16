import {
  SiAdidas,
  SiNewbalance,
  SiNike,
  SiPuma,
  SiUnderarmour,
} from "react-icons/si";
import { globalState } from "./globalState";

function FilterSection() {
  const setSearchQuery = globalState((state) => state.setSearchQuery);
  const setSelectedBrand = globalState((state) => state.setSelectedBrand);
  const setSelectedColor = globalState((state) => state.setSelectedColor);
  const setSelectedSize = globalState((state) => state.setSelectedSize);
  const setMinPrice = globalState((state) => state.setMinPrice);
  const setMaxPrice = globalState((state) => state.setMaxPrice);
  const minPrice = globalState((state) => state.minPrice);
  const maxPrice = globalState((state) => state.maxPrice);

  // Reset Items Function
  const resetFilters = () => {
    setSearchQuery(""),
      setSelectedBrand(""),
      setSelectedColor(""),
      setSelectedSize(undefined),
      setMinPrice(0),
      setMaxPrice(200);
  };

  return (
    <div className="w-full text-3xl flex flex-col gap-5 lg:w-[100%] lg:pl-20 pr-20 sm:pl-0 md:pl-0 md:pr-5 sm:pr-0">
      <div className="flex justify-between items-center">
        <p className="font-bold">Filter</p>
        <p>Advanced</p>
      </div>
      <p className="font-bold">Brand</p>
      <input
        type="text"
        id="search-bar"
        name="search-bar"
        className="border w-[100%]"
        placeholder="Search brand"
        onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
      />
      <div
        className="flex gap-5 text-3xl font-bold cursor-pointer hover:text-blue-600"
        onClick={() => setSelectedBrand("nike")}
      >
        <SiNike />
        <p>Nike</p>
      </div>
      <div
        className="flex gap-5 text-3xl font-bold cursor-pointer hover:text-blue-600"
        onClick={() => setSelectedBrand("adidas")}
      >
        <SiAdidas />
        <p>Adidas</p>
      </div>
      <div
        className="flex gap-5 text-3xl font-bold cursor-pointer hover:text-blue-600"
        onClick={() => setSelectedBrand("new balance")}
      >
        <SiNewbalance />
        <p>New Balance</p>
      </div>
      <div
        className="flex gap-5 text-3xl font-bold cursor-pointer hover:text-blue-600"
        onClick={() => setSelectedBrand("puma")}
      >
        <SiPuma />
        <p>Puma</p>
      </div>
      <div
        className="flex gap-5 text-3xl font-bold cursor-pointer hover:text-blue-600"
        onClick={() => setSelectedBrand("under armour")}
      >
        <SiUnderarmour />
        <p>Under armour</p>
      </div>
      <p className="font-bold">Price</p>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center gap-4">
          <input
            type="number"
            className="border px-2 py-1 w-[40%] text-xl"
            placeholder="Min"
            value={minPrice}
          />
          <input
            type="number"
            className="border px-2 py-1 w-[40%] text-xl"
            placeholder="Max"
            value={maxPrice}
          />
        </div>
        <input
          type="range"
          min={0}
          max={200}
          className="w-full"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
        />
        <input
          type="range"
          min={0}
          max={200}
          value={maxPrice}
          className="w-full"
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
      </div>{" "}
      <p>Size</p>
      <div className="grid grid-cols-4 gap-4 font-bold">
        <button className="cursor-pointer" onClick={() => setSelectedSize(39)}>
          39
        </button>
        <button className="cursor-pointer" onClick={() => setSelectedSize(40)}>
          40
        </button>
        <button className="cursor-pointer" onClick={() => setSelectedSize(41)}>
          41
        </button>
        <button className="cursor-pointer" onClick={() => setSelectedSize(42)}>
          42
        </button>
        <button className="cursor-pointer" onClick={() => setSelectedSize(43)}>
          43
        </button>
        <button className="cursor-pointer" onClick={() => setSelectedSize(44)}>
          44
        </button>
        <button className="cursor-pointer" onClick={() => setSelectedSize(45)}>
          45
        </button>
      </div>
      <p>Color</p>
      <div className="flex gap-2">
        <div
          className="w-6 h-6 rounded-full bg-red-500"
          onClick={() => setSelectedColor("red")}
        ></div>
        <div
          className="w-6 h-6 rounded-full bg-blue-500"
          onClick={() => setSelectedColor("blue")}
        ></div>
        <div
          className="w-6 h-6 rounded-full bg-green-500"
          onClick={() => setSelectedColor("green")}
        ></div>
        <div
          className="w-6 h-6 rounded-full bg-yellow-500"
          onClick={() => setSelectedColor("yellow")}
        ></div>
        <div
          className="w-6 h-6 rounded-full bg-black"
          onClick={() => setSelectedColor("black")}
        ></div>
      </div>
      <button
        className="text-red-500 underline text-xl mt-4"
        onClick={resetFilters}
      >
        Reset Filters
      </button>
    </div>
  );
}

export default FilterSection;
