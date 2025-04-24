
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/CartContext";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Tooltip } from "@/components/ui/tooltip";
import { TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, getCartTotal } = useCart();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="container py-8 mx-auto">
        <h1 className="mb-6 text-3xl font-bold text-gray-900">Корзина</h1>

        {cart.length === 0 ? (
          <div className="p-8 bg-white rounded-lg shadow-sm">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="flex items-center justify-center w-20 h-20 mb-4 bg-gray-100 rounded-full">
                <Trash2 className="w-8 h-8 text-gray-400" />
              </div>
              <h2 className="mb-2 text-xl font-medium text-gray-900">Ваша корзина пуста</h2>
              <p className="mb-6 text-gray-500">Добавьте товары из каталога</p>
              <Button onClick={() => window.location.href = '/catalog'} className="btn-primary">
                Перейти в каталог
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <div className="overflow-hidden bg-white rounded-lg shadow-sm">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-medium text-gray-900">Товары ({cart.length})</h2>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={clearCart}
                      className="text-gray-500 hover:text-red-500"
                    >
                      Очистить корзину
                    </Button>
                  </div>
                </div>

                <ul className="divide-y divide-gray-200">
                  {cart.map((item) => (
                    <li key={item.id} className="p-6 transition-colors hover:bg-gray-50">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-16 h-16 overflow-hidden bg-gray-100 rounded-md">
                          <img 
                            src={item.image || "/placeholder.svg"} 
                            alt={item.name} 
                            className="object-cover w-full h-full"
                          />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-medium text-gray-900">
                            {item.name}
                          </h3>
                          
                          {item.onSale && item.discount ? (
                            <div className="flex items-center mt-1 gap-1">
                              <span className="text-sm font-medium text-blue-600">
                                {item.price - item.discount} ₽
                              </span>
                              <span className="text-xs text-gray-500 line-through">
                                {item.price} ₽
                              </span>
                            </div>
                          ) : (
                            <p className="mt-1 text-sm font-medium text-blue-600">
                              {item.price} ₽
                            </p>
                          )}
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="w-8 h-8 rounded-full p-0"
                            onClick={() => decreaseQuantity(item.id)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          
                          <span className="w-8 text-center">{item.quantity}</span>
                          
                          <Button 
                            variant="outline" 
                            size="icon"
                            className="w-8 h-8 rounded-full p-0"
                            onClick={() => increaseQuantity(item.id)}
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                        
                        <Button 
                          variant="ghost" 
                          size="icon"
                          className="text-gray-400 hover:text-red-500"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="md:col-span-1">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h2 className="mb-4 text-lg font-medium text-gray-900">Сумма заказа</h2>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Товары ({cart.length})</span>
                    <span className="font-medium">{getCartTotal()} ₽</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Скидка</span>
                    <span className="font-medium text-green-600">
                      -{cart.reduce((total, item) => 
                        total + (item.discount || 0) * item.quantity, 0)} ₽
                    </span>
                  </div>
                  
                  <div className="pt-3 mt-3 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-medium">Итого</span>
                      <span className="text-xl font-bold">{getCartTotal()} ₽</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div>
                          <Button 
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white" 
                            disabled
                          >
                            Оформить заказ
                          </Button>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Сайт работает в демо-режиме</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  
                  <p className="mt-2 text-xs text-center text-gray-500">
                    Нажимая кнопку, вы соглашаетесь с условиями оферты
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Cart;
