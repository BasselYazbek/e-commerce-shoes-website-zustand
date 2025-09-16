import FilterSection from "./components/FilterSection";
import GallerySection from "./components/GallerySection";
import Header from "./components/Header";
import { globalState } from "./components/globalState";
import CartOverlay from "./components/CartOverlay";

function App() {
  const showFilter = globalState((state) => state.showFilter);
  const setShowFilter = globalState((state) => state.setShowFilter);
  const showCart = globalState((state) => state.showCart);

  return (
    <div className="p-5">
      <Header />

      {showCart && (
        <div className="fixed inset-0 bg-white z-50 p-5 overflow-y-auto">
          <CartOverlay />
        </div>
      )}

      {showFilter && (
        <div className="fixed inset-0 bg-white z-50 p-5 overflow-y-auto lg:hidden">
          <FilterSection />
          <button
            className="absolute top-4 right-4 text-3xl text-red-600 bg-white px-3 py-1 rounded shadow-md z-50"
            onClick={() => setShowFilter(false)}
          >
            ✕
          </button>
        </div>
      )}
      <div className="flex w-[100%] mt-5">
        <div className="hidden lg:block lg:w-[30%]">
          <FilterSection />
        </div>
        <div className="flex flex-col w-full lg:w-[70%] gap-4 mt-5">
          <GallerySection />
        </div>
      </div>
    </div>
  );
}

export default App;
