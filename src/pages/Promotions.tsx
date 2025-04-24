
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import { getSaleProducts } from "@/data/products";

const Promotions = () => {
  const saleProducts = getSaleProducts();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="container px-4 py-8 mx-auto">
        <h1 className="mb-6 text-3xl font-bold text-gray-900">Акции</h1>

        {/* Hero Banner */}
        <div className="p-6 mb-8 text-white bg-red-500 rounded-lg">
          <h2 className="mb-2 text-2xl font-bold">Специальные предложения!</h2>
          <p className="text-lg">
            Успейте купить товары по сниженным ценам. Количество товаров по акции ограничено.
          </p>
        </div>

        {saleProducts.length > 0 ? (
          <ProductGrid products={saleProducts} />
        ) : (
          <div className="flex flex-col items-center justify-center p-12 bg-white rounded-lg shadow">
            <p className="mb-4 text-xl text-gray-600">
              В данный момент активных акций нет
            </p>
            <p className="text-gray-500">
              Следите за обновлениями, скоро будут новые акции!
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Promotions;
