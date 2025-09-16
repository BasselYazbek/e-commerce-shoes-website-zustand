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
  const sortOption = globalState((state) => state.sortOption);
  const setSortOption = globalState((state) => state.setSortOption);
  const setShowFilter = globalState((state) => state.setShowFilter);
  const favorites = globalState((state) => state.favorites);
  const toggleFavorite = globalState((state) => state.toggleFavorite);
  const setShowCart = globalState((state) => state.setShowCart);

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

  const sortedShoes = [
    ...filteredShoes.sort((a, b) => {
      switch (sortOption) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "alpha-asc":
          return a.name.localeCompare(b.name);
        case "alpha-desc":
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    }),
  ];

  return (
    <div className="w-[100%]">
      <div className="flex justify-between text-5xl pb-5">
        <div>
          <CiGrid41 />
        </div>

        {/* Here is the Filter but it is hidden on big screen */}
        <div
          className="block lg:hidden cursor-pointer"
          onClick={() => setShowFilter(true)}
        >
          <CiFilter />
        </div>

        <div
          className="relative block cursor-pointer"
          onClick={() => setShowCart(true)}
        >
          <IoCartOutline className="text-4xl" />
          {favorites.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full px-2 text-sm">
              {favorites.length}
            </span>
          )}
        </div>

        <div className="flex items-center gap-4 ">
          <p className="text-xl">Sort by:</p>
          <select
            className="border px-2 py-1 rounded text-2xl"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="recent">Recently added</option>
            <option value="price-asc">Price ascending</option>
            <option value="price-desc">Price descending</option>
            <option value="alpha-asc">Alphabetical A-Z</option>
            <option value="alpha-desc">Alphabetical Z-A</option>
          </select>
        </div>
      </div>
      <div id="grid-items">
        {sortedShoes.map((shoes) => (
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
              <CiHeart
                className={`cursor-pointer ${
                  favorites.find((fav) => fav.id === shoes.id)
                    ? "bg-blue-400"
                    : ""
                }`}
                onClick={() => toggleFavorite(shoes)}
              />
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
