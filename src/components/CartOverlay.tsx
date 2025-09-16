import { globalState } from "./globalState";

function CartOverlay() {
  const favorites = globalState((state) => state.favorites);
  const setShowCart = globalState((state) => state.setShowCart);

  return (
    <div className="fixed inset-0 bg-white z-50 p-5 overflow-y-auto">
      <h2 className="text-3xl font-bold mb-4">Your Cart</h2>
      <button
        className="absolute top-4 right-4 text-2xl text-red-500"
        onClick={() => setShowCart(false)}
      >
        ✕
      </button>
      {favorites.length === 0 ? (
        <p className="text-xl">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((item) => (
            <div key={item.id} className="border p-4 rounded shadow">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-70 object-cover mb-2 rounded"
              />
              <h3 className="text-2xl font-semibold">{item.name}</h3>
              <p className="text-xl text-gray-600">${item.price}</p>
              <p className="text-xl text-gray-600">Size: {item.size}</p>
              <p className="text-xl text-gray-600">Color: {item.color}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CartOverlay;
