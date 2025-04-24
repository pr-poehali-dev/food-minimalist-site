
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
        <h2 className="mb-6 text-2xl font-bold text-gray-900">{title}</h2>
      )}
      
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {products.length === 0 && (
        <div className="flex items-center justify-center h-40 bg-gray-50 rounded-lg">
          <p className="text-gray-500">Товары не найдены</p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
