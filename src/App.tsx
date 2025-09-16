import FilterSection from "./components/FilterSection";
import GallerySection from "./components/GallerySection";
import Header from "./components/Header";

function App() {
  return (
    <div className="p-5">
      <Header />
      <div className="flex w-[100%] mt-5">
        <div className="w-[30%]">
          <FilterSection />
        </div>
        <div className="flex flex-col w-[70%] gap-4 mt-5">
          <GallerySection />
        </div>
      </div>
    </div>
  );
}

export default App;
