
import { useState } from "react";
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import { products, getCategories } from "@/data/products";
import { Button } from "@/components/ui/button";

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = getCategories();

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="container py-8 mx-auto">
        <h1 className="mb-6 text-3xl font-bold text-gray-900">Каталог</h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Categories Sidebar */}
          <div className="w-full md:w-64 shrink-0">
            <div className="p-5 bg-white rounded-lg shadow-sm">
              <h2 className="mb-4 text-lg font-medium text-gray-900">Категории</h2>
              <div className="flex flex-col gap-2">
                <Button
                  variant={selectedCategory === null ? "default" : "outline"}
                  className="justify-start font-normal"
                  onClick={() => setSelectedCategory(null)}
                >
                  Все категории
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className="justify-start font-normal"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div className="p-5 mt-4 bg-white rounded-lg shadow-sm">
              <h2 className="mb-4 text-lg font-medium text-gray-900">Цена</h2>
              <div className="flex flex-col gap-2">
                <Button
                  variant="outline"
                  className="justify-start font-normal"
                  onClick={() => {}}
                >
                  100 ₽
                </Button>
                <Button
                  variant="outline"
                  className="justify-start font-normal"
                  onClick={() => {}}
                >
                  200 ₽
                </Button>
                <Button
                  variant="outline"
                  className="justify-start font-normal"
                  onClick={() => {}}
                >
                  250 ₽
                </Button>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="flex-1">
            <div className="p-6 mb-6 bg-white rounded-lg shadow-sm">
              <ProductGrid
                products={filteredProducts}
                title={selectedCategory || "Все товары"}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Catalog;
