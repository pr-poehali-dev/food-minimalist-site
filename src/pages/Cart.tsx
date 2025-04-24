
import Navbar from "@/components/Navbar";
import { useCart } from "@/components/CartContext";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="container px-4 py-8 mx-auto">
        <h1 className="mb-6 text-3xl font-bold text-gray-900">Корзина</h1>

        {items.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="flex-1">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-4 border-b border-gray-200">
                  <h2 className="text-lg font-medium">
                    Товары ({items.length})
                  </h2>
                </div>

                <ul className="divide-y divide-gray-200">
                  {items.map((item) => (
                    <li key={item.product.id} className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden">
                          <img
                            src={item.product.image || "/placeholder.svg"}
                            alt={item.product.name}
                            className="object-cover w-full h-full"
                          />
                        </div>

                        <div className="flex-1">
                          <h3 className="text-sm font-medium text-gray-900">
                            {item.product.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {item.product.category}
                          </p>
                        </div>

                        <div className="flex items-center gap-2">
                          <Button
                            size="icon"
                            variant="outline"
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                Math.max(1, item.quantity - 1)
                              )
                            }
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button
                            size="icon"
                            variant="outline"
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity + 1)
                            }
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>

                        <div className="w-24 text-right">
                          <div className="font-medium text-gray-900">
                            {item.product.onSale && item.product.discount
                              ? (
                                  (item.product.price - item.product.discount) *
                                  item.quantity
                                ).toFixed(0)
                              : (item.product.price * item.quantity).toFixed(0)}{" "}
                            ₽
                          </div>
                          {item.product.onSale && item.product.discount && (
                            <div className="text-sm text-gray-500 line-through">
                              {(item.product.price * item.quantity).toFixed(0)} ₽
                            </div>
                          )}
                        </div>

                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-gray-500 hover:text-red-500"
                          onClick={() => removeFromCart(item.product.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-80">
              <div className="sticky top-20">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h2 className="mb-4 text-lg font-medium">Итого</h2>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Сумма заказа</span>
                      <span>{getTotalPrice().toFixed(0)} ₽</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Доставка</span>
                      <span>0 ₽</span>
                    </div>
                    <div className="pt-2 mt-2 border-t border-gray-200">
                      <div className="flex items-center justify-between font-medium">
                        <span>Итого к оплате</span>
                        <span className="text-lg">{getTotalPrice().toFixed(0)} ₽</span>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                    Оформить заказ
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-12 bg-white rounded-lg shadow">
            <h2 className="mb-4 text-2xl font-medium text-gray-900">
              Ваша корзина пуста
            </h2>
            <p className="mb-6 text-center text-gray-600">
              Добавьте товары из каталога, чтобы оформить заказ
            </p>
            <Link to="/catalog">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Перейти в каталог
              </Button>
            </Link>
          </div>
        )}
      </main>
    </div>
  );
};

export default Cart;
