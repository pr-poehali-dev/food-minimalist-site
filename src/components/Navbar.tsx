
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, Search } from "lucide-react";
import { useCart } from "./CartContext";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  const { getTotalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="container flex items-center justify-between h-16 mx-auto">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            ФудМаркет
          </Link>
        </div>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex items-center max-w-md w-full mx-4 relative">
          <Input 
            type="text" 
            placeholder="Поиск товаров..." 
            className="pl-9 pr-4 py-2 h-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        </div>

        {/* Desktop Navigation */}
        <div className="items-center hidden space-x-6 md:flex">
          <Link
            to="/catalog"
            className="nav-link"
          >
            Каталог
          </Link>
          <Link
            to="/promotions"
            className="nav-link"
          >
            Акции
          </Link>
          <Link to="/cart">
            <Button variant="ghost" className="relative nav-button hover:bg-blue-50">
              <ShoppingCart className="text-gray-700" />
              {getTotalItems() > 0 && (
                <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-blue-600 rounded-full -top-1 -right-1">
                  {getTotalItems()}
                </span>
              )}
            </Button>
          </Link>
        </div>

        {/* Mobile Icons */}
        <div className="flex items-center space-x-2 md:hidden">
          <Button variant="ghost" size="icon" className="relative nav-button hover:bg-blue-50">
            <Search className="text-gray-700" />
          </Button>
          
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative nav-button hover:bg-blue-50">
              <ShoppingCart className="text-gray-700" />
              {getTotalItems() > 0 && (
                <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-blue-600 rounded-full -top-1 -right-1">
                  {getTotalItems()}
                </span>
              )}
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="nav-button hover:bg-blue-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="text-gray-700" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="px-4 py-3 bg-white border-b border-gray-200 md:hidden animate-fadeIn">
          <div className="mb-3 relative">
            <Input 
              type="text" 
              placeholder="Поиск товаров..." 
              className="w-full pl-9 pr-4 py-2 h-10 border-gray-300"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>
          <div className="flex flex-col space-y-3">
            <Link
              to="/catalog"
              className="py-2 nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Каталог
            </Link>
            <Link
              to="/promotions"
              className="py-2 nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Акции
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
