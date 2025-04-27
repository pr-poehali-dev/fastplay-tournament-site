import { Trophy, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-footer-gradient text-white pt-12 pb-6 mt-10 border-t border-fastplay-purple/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Лого и описание */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Trophy className="h-6 w-6 text-fastplay-purple" />
              <span className="text-xl font-bold bg-gradient-to-r from-fastplay-light to-fastplay-purple bg-clip-text text-transparent">
                FastPlay
              </span>
            </div>
            <p className="text-gray-300 text-sm mt-4">
              Организация игровых турниров в Омске. Создаем незабываемые соревнования и развиваем киберспортивное сообщество.
            </p>
          </div>

          {/* Навигация */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-fastplay-light">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-fastplay-purple transition-colors text-sm">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/tournaments" className="text-gray-300 hover:text-fastplay-purple transition-colors text-sm">
                  Турниры
                </Link>
              </li>
              <li>
                <Link to="/games" className="text-gray-300 hover:text-fastplay-purple transition-colors text-sm">
                  Игры
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-fastplay-purple transition-colors text-sm">
                  О нас
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-fastplay-light">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300 text-sm">
                <Mail className="h-4 w-4 mr-2 text-fastplay-purple" />
                <a href="mailto:info@fastplay.ru" className="hover:text-fastplay-purple transition-colors">
                  info@fastplay.ru
                </a>
              </li>
              <li className="flex items-center text-gray-300 text-sm">
                <Phone className="h-4 w-4 mr-2 text-fastplay-purple" />
                <a href="tel:+73812123456" className="hover:text-fastplay-purple transition-colors">
                  +7 (3812) 12-34-56
                </a>
              </li>
              <li className="flex items-start text-gray-300 text-sm">
                <MapPin className="h-4 w-4 mr-2 mt-1 text-fastplay-purple" />
                <span>г. Омск, ул. Ленина, 25</span>
              </li>
            </ul>
          </div>

          {/* Социальные сети */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-fastplay-light">Мы в соцсетях</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/fastplay"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-fastplay-purple/20 flex items-center justify-center hover:bg-fastplay-purple/40 transition-colors"
              >
                <Instagram className="h-5 w-5 text-fastplay-light" />
              </a>
              <a
                href="https://facebook.com/fastplay"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-fastplay-purple/20 flex items-center justify-center hover:bg-fastplay-purple/40 transition-colors"
              >
                <Facebook className="h-5 w-5 text-fastplay-light" />
              </a>
              <a
                href="https://twitter.com/fastplay"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-fastplay-purple/20 flex items-center justify-center hover:bg-fastplay-purple/40 transition-colors"
              >
                <Twitter className="h-5 w-5 text-fastplay-light" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-fastplay-darkPurple/30 text-center text-gray-400 text-sm">
          <p>© 2025 FastPlay Games. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
