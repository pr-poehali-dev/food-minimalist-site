
import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  title?: string;
}

const ProductGrid = ({ products, title }: ProductGridProps) => {
  return (
    <div className="w-full">
      {title && (
        <h2 className="mb-4 text-2xl font-bold text-gray-900">{title}</h2>
      )}
      
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {products.length === 0 && (
        <div className="flex items-center justify-center h-40">
          <p className="text-gray-500">Товары не найдены</p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
