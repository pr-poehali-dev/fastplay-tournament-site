import { ArrowRight, Trophy, GamepadIcon, Calendar, Users } from 'lucide-react';
import Header from '../components/Header';
import TournamentCard from '../components/TournamentCard';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';

const Index = () => {
  // Предстоящие турниры
  const upcomingTournaments = [
    {
      id: '1',
      title: 'Омский Киберфест 2025',
      game: 'CS2',
      date: '15 мая 2025',
      participants: 32,
      maxParticipants: 64,
      prizePool: '200 000 ₽',
      location: 'Омск Арена',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80'
    },
    {
      id: '2',
      title: 'Dota 2 Сибирь Чемпионат',
      game: 'Dota 2',
      date: '22 мая 2025',
      participants: 18,
      maxParticipants: 20,
      prizePool: '150 000 ₽',
      location: 'Киберспорт Центр',
      image: 'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80'
    },
    {
      id: '3',
      title: 'Valorant Омский Финал',
      game: 'Valorant',
      date: '5 июня 2025',
      participants: 12,
      maxParticipants: 16,
      prizePool: '100 000 ₽',
      location: 'Технопарк',
      image: 'https://images.unsplash.com/photo-1627856014029-760fd6f40174?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605979257913-1704eb7b6246?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-fastplay-black/70 via-fastplay-black/50 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              <span className="bg-gradient-to-r from-fastplay-light to-fastplay-purple bg-clip-text text-transparent">
                Игровые турниры
              </span>{" "}
              в Омске
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Участвуйте в захватывающих киберспортивных соревнованиях, 
              выигрывайте призы и станьте частью игрового сообщества Омска
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="glow-button group">
                Ближайшие турниры
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="bg-transparent border-fastplay-purple/50 text-white hover:bg-fastplay-purple/20">
                Присоединиться
              </Button>
            </div>
          </div>
        </div>
        
        {/* Декоративные элементы */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
      </section>
      
      {/* Преимущества */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-white">Почему FastPlay Games?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Мы создаем профессиональные турниры с лучшими условиями для игроков всех уровней
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Преимущество 1 */}
          <div className="bg-fastplay-black/50 backdrop-blur-sm rounded-xl p-6 border border-fastplay-purple/20 hover:border-fastplay-purple/40 transition-all duration-300 hover:shadow-lg hover:shadow-fastplay-purple/10">
            <Trophy className="h-10 w-10 text-fastplay-purple mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Призовые фонды</h3>
            <p className="text-gray-400">
              Внушительные призовые фонды от 50 000 до 200 000 рублей для победителей наших турниров
            </p>
          </div>
          
          {/* Преимущество 2 */}
          <div className="bg-fastplay-black/50 backdrop-blur-sm rounded-xl p-6 border border-fastplay-purple/20 hover:border-fastplay-purple/40 transition-all duration-300 hover:shadow-lg hover:shadow-fastplay-purple/10">
            <GamepadIcon className="h-10 w-10 text-fastplay-purple mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Современное оборудование</h3>
            <p className="text-gray-400">
              Турниры проводятся на современном оборудовании с мощными компьютерами и периферией
            </p>
          </div>
          
          {/* Преимущество 3 */}
          <div className="bg-fastplay-black/50 backdrop-blur-sm rounded-xl p-6 border border-fastplay-purple/20 hover:border-fastplay-purple/40 transition-all duration-300 hover:shadow-lg hover:shadow-fastplay-purple/10">
            <Users className="h-10 w-10 text-fastplay-purple mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Игровое сообщество</h3>
            <p className="text-gray-400">
              Присоединяйтесь к крупнейшему игровому сообществу Омска с регулярными встречами и событиями
            </p>
          </div>
        </div>
      </section>
      
      {/* Предстоящие турниры */}
      <section className="py-16 container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-white">Предстоящие турниры</h2>
            <p className="text-gray-400">Ближайшие события в мире киберспорта Омска</p>
          </div>
          <Button variant="link" className="text-fastplay-purple hover:text-fastplay-accent flex items-center gap-2">
            Все турниры <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingTournaments.map((tournament) => (
            <TournamentCard
              key={tournament.id}
              {...tournament}
            />
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-20 my-10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1580327344181-c1163234e5a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-fastplay-black/90 to-fastplay-darkPurple/60"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Готовы к соревнованиям?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Зарегистрируйтесь сейчас, чтобы участвовать в предстоящих турнирах 
              и получите шанс выиграть ценные призы
            </p>
            <Button className="glow-button animate-pulse-glow group">
              <Calendar className="mr-2 h-5 w-5" />
              Зарегистрироваться
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
