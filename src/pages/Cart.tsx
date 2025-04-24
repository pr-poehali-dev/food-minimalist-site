
import Navbar from "@/components/Navbar";
import { useCart } from "@/components/CartContext";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="p-5 border-b border-gray-200 bg-gray-50">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Товары ({items.length})
                  </h2>
                </div>

                <ul className="divide-y divide-gray-200">
                  {items.map((item) => (
                    <li key={item.product.id} className="p-5 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                          <img
                            src={item.product.image || "/placeholder.svg"}
                            alt={item.product.name}
                            className="object-cover w-full h-full"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-base font-medium text-gray-900 truncate">
                            {item.product.name}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">
                            {item.product.category}
                          </p>
                        </div>

                        <div className="flex items-center gap-2">
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-8 w-8 rounded-full"
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                Math.max(1, item.quantity - 1)
                              )
                            }
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-8 w-8 rounded-full"
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity + 1)
                            }
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>

                        <div className="w-28 text-right">
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
                          className="text-gray-400 hover:text-red-500 hover:bg-red-50"
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
            <div className="w-full lg:w-96">
              <div className="sticky top-20">
                <div className="p-6 bg-white rounded-lg shadow">
                  <h2 className="mb-4 text-lg font-semibold text-gray-800">Итого</h2>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Сумма заказа</span>
                      <span className="font-medium">{getTotalPrice().toFixed(0)} ₽</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Доставка</span>
                      <span className="font-medium">0 ₽</span>
                    </div>
                    <div className="pt-3 mt-3 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-gray-900">Итого к оплате</span>
                        <span className="text-xl font-bold text-blue-600">{getTotalPrice().toFixed(0)} ₽</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button className="w-full bg-gray-300 hover:bg-gray-300 text-gray-700 cursor-not-allowed" disabled>
                            <ShoppingBag className="w-4 h-4 mr-2" />
                            Оформить заказ
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Сайт работает в режиме демонстрации, заказ невозможен</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <p className="mt-2 text-xs text-center text-gray-500">
                      Демо-режим: просмотр товаров без возможности покупки
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-12 bg-white rounded-lg shadow">
            <img 
              src="/placeholder.svg" 
              alt="Пустая корзина" 
              className="w-24 h-24 mb-4 opacity-50"
            />
            <h2 className="mb-3 text-2xl font-medium text-gray-900">
              Ваша корзина пуста
            </h2>
            <p className="mb-6 text-center text-gray-600 max-w-md">
              Добавьте товары из каталога, чтобы они появились в корзине
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
