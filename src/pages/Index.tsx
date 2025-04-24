
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import { products, getSaleProducts } from "@/data/products";

const Index = () => {
  const saleProducts = getSaleProducts();
  const featuredProducts = products.slice(0, 5);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container px-4 py-8 mx-auto">
        {/* Hero Section */}
        <section className="mb-10">
          <div className="p-8 bg-blue-600 rounded-lg text-white">
            <h1 className="mb-4 text-3xl font-bold">Добро пожаловать в ФудМаркет!</h1>
            <p className="mb-6 text-lg">
              Вкусная еда по фиксированным ценам 100 ₽, 200 ₽ и 250 ₽
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/catalog">
                <Button className="bg-white text-blue-600 hover:bg-gray-100">
                  Перейти в каталог
                </Button>
              </Link>
              <Link to="/promotions">
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-blue-700">
                  Текущие акции
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Promotions Section */}
        {saleProducts.length > 0 && (
          <section className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Акции</h2>
              <Link to="/promotions" className="text-blue-600 hover:underline">
                Все акции
              </Link>
            </div>
            <ProductGrid products={saleProducts.slice(0, 5)} />
          </section>
        )}

        {/* Featured Products */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Популярные товары</h2>
            <Link to="/catalog" className="text-blue-600 hover:underline">
              Весь каталог
            </Link>
          </div>
          <ProductGrid products={featuredProducts} />
        </section>
      </main>

      <footer className="py-6 mt-auto text-center text-gray-600 border-t border-gray-200">
        <p>&copy; 2023 ФудМаркет. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default Index;
