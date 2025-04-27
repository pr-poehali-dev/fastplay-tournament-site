import { Users, Calendar, Trophy, MapPin } from 'lucide-react';
import { Badge } from './ui/badge';

export interface TournamentProps {
  id: string;
  title: string;
  game: string;
  date: string;
  participants: number;
  maxParticipants: number;
  prizePool: string;
  location: string;
  image: string;
}

const TournamentCard = ({
  title,
  game,
  date,
  participants,
  maxParticipants,
  prizePool,
  location,
  image
}: TournamentProps) => {
  return (
    <div className="tournament-card group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-fastplay-black to-transparent"></div>
        <Badge className="absolute top-3 right-3 bg-fastplay-accent text-white">{game}</Badge>
      </div>
      
      <div className="p-5 space-y-4">
        <h3 className="text-xl font-bold text-white truncate">{title}</h3>
        
        <div className="space-y-2">
          <div className="flex items-center text-gray-300">
            <Calendar className="w-4 h-4 mr-2 text-fastplay-purple" />
            <span className="text-sm">{date}</span>
          </div>
          
          <div className="flex items-center text-gray-300">
            <Users className="w-4 h-4 mr-2 text-fastplay-purple" />
            <span className="text-sm">{participants}/{maxParticipants} участников</span>
          </div>
          
          <div className="flex items-center text-gray-300">
            <Trophy className="w-4 h-4 mr-2 text-fastplay-purple" />
            <span className="text-sm">Призовой фонд: {prizePool}</span>
          </div>
          
          <div className="flex items-center text-gray-300">
            <MapPin className="w-4 h-4 mr-2 text-fastplay-purple" />
            <span className="text-sm">{location}</span>
          </div>
        </div>
        
        <button className="w-full py-2 bg-fastplay-purple/80 hover:bg-fastplay-purple text-white rounded-lg transition-colors font-medium">
          Подробнее
        </button>
      </div>
    </div>
  );
};

export default TournamentCard;
