
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/types/product";
import { useCart } from "./CartContext";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div className="overflow-hidden bg-white border border-gray-200 rounded-md shadow-sm transition-all hover:shadow-md">
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="object-cover w-full h-full"
        />
        {product.onSale && (
          <Badge className="absolute top-2 right-2 bg-red-500">Акция</Badge>
        )}
      </div>

      <div className="p-4">
        <h3 className="mb-1 text-sm font-medium text-gray-900 h-10 line-clamp-2">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-between mt-2">
          <div>
            {product.onSale && product.discount ? (
              <div className="flex items-center gap-1">
                <span className="text-lg font-bold text-blue-600">
                  {product.price - product.discount} ₽
                </span>
                <span className="text-sm text-gray-500 line-through">
                  {product.price} ₽
                </span>
              </div>
            ) : (
              <span className="text-lg font-bold text-blue-600">
                {product.price} ₽
              </span>
            )}
          </div>
          
          <Button 
            size="sm" 
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => addToCart(product)}
          >
            <ShoppingCart className="w-4 h-4 mr-1" />
            В корзину
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
