
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu } from "lucide-react";
import { useCart } from "./CartContext";
import { useState } from "react";

const Navbar = () => {
  const { getTotalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            ФудМаркет
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="items-center hidden space-x-8 md:flex">
          <Link
            to="/catalog"
            className="text-gray-700 transition-colors hover:text-blue-600"
          >
            Каталог
          </Link>
          <Link
            to="/promotions"
            className="text-gray-700 transition-colors hover:text-blue-600"
          >
            Акции
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/cart">
            <Button variant="ghost" className="relative">
              <ShoppingCart />
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
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="px-4 py-2 bg-white border-b border-gray-200 md:hidden">
          <div className="flex flex-col space-y-2">
            <Link
              to="/catalog"
              className="py-2 text-gray-700 transition-colors hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Каталог
            </Link>
            <Link
              to="/promotions"
              className="py-2 text-gray-700 transition-colors hover:text-blue-600"
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
