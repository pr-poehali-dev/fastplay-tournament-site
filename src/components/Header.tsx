import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Trophy, Users, Calendar, MapPin } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black/30 backdrop-blur-md sticky top-0 z-50 border-b border-fastplay-purple/20">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Trophy className="h-8 w-8 text-fastplay-purple" />
          <span className="text-2xl font-bold bg-gradient-to-r from-fastplay-light to-fastplay-purple bg-clip-text text-transparent">
            FastPlay
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-fastplay-purple transition-colors">
            Главная
          </Link>
          <Link to="/tournaments" className="text-white hover:text-fastplay-purple transition-colors">
            Турниры
          </Link>
          <Link to="/games" className="text-white hover:text-fastplay-purple transition-colors">
            Игры
          </Link>
          <Link to="/about" className="text-white hover:text-fastplay-purple transition-colors">
            О нас
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button className="glow-button">
            Регистрация
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-white hover:text-fastplay-purple px-4 py-2 rounded-lg hover:bg-fastplay-black/40 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/tournaments" 
              className="text-white hover:text-fastplay-purple px-4 py-2 rounded-lg hover:bg-fastplay-black/40 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Турниры
            </Link>
            <Link 
              to="/games" 
              className="text-white hover:text-fastplay-purple px-4 py-2 rounded-lg hover:bg-fastplay-black/40 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Игры
            </Link>
            <Link 
              to="/about" 
              className="text-white hover:text-fastplay-purple px-4 py-2 rounded-lg hover:bg-fastplay-black/40 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              О нас
            </Link>
            <Button className="glow-button w-full">
              Регистрация
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
