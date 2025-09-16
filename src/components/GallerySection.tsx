import { CiFilter, CiGrid41, CiHeart } from "react-icons/ci";
import { shoesData } from "../data/shoes";
import { IoCartOutline } from "react-icons/io5";
import "./GallerySection.css";
import { globalState } from "./globalState";

function GallerySection() {
  const searchQuery = globalState((state) => state.searchQuery);
  const selectedBrand = globalState((state) => state.selectedBrand);
  const selectedSize = globalState((state) => state.selectedSize);
  const selectedColor = globalState((state) => state.selectedColor);
  const minPrice = globalState((state) => state.minPrice);
  const maxPrice = globalState((state) => state.maxPrice);

  const filteredShoes = shoesData.filter(
    (shoe) =>
      shoe.name.toLowerCase().includes(searchQuery) &&
      (selectedBrand
        ? shoe.brand.toLocaleLowerCase() === selectedBrand.toLowerCase()
        : true) &&
      (selectedSize ? shoe.size == selectedSize : true) &&
      (selectedColor
        ? shoe.color.toLocaleLowerCase() === selectedColor
        : true) &&
      shoe.price >= minPrice &&
      shoe.price <= maxPrice
  );
  return (
    <div className="w-[100%]">
      <div className="flex justify-between text-5xl pb-5">
        <div>
          <CiGrid41 />
        </div>

        {/* Here is the Filter but it is hidden on big screen */}
        <div className="block lg:hidden cursor-pointer">
          <CiFilter />
        </div>

        <div className="relative block cursor-pointer">
          <IoCartOutline className="text-4xl" />
        </div>

        <div className="flex items-center gap-4 ">
          <p className="text-xl">Sort by:</p>
          <select className="border px-2 py-1 rounded text-2xl">
            <option value="recent">Recently added</option>
            <option value="price-asc">Price ascending</option>
            <option value="price-desc">Price descending</option>
            <option value="alpha-asc">Alphabetical A-Z</option>
            <option value="alpha-desc">Alphabetical Z-A</option>
          </select>
        </div>
      </div>
      <div id="grid-items">
        {filteredShoes.map((shoes) => (
          <div
            key={shoes.id}
            className="p-4 border rounded-lg shadow-sm text-base"
          >
            <img
              src={shoes.image}
              alt={shoes.name}
              className="w-full h-40 object-cover mb-2 rounded"
            />
            <div className="flex items-center justify-between text-3xl">
              <h3 className="font-semibold text-[30px]">{shoes.name}</h3>
              <CiHeart />
            </div>
            <div className="flex justify-between text-[25px]">
              <p className="text-gray-600">{shoes.brand}</p>
              <p className="text-gray-600">${shoes.price}</p>
            </div>
            <div className="flex justify-between text-[25px]">
              <p className="text-gray-600">{shoes.color}</p>
              <p className="text-gray-600 font-bold">{shoes.size}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GallerySection;
