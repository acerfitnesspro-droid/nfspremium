
import React from 'react';
import { Article } from '../../types';
import { Badge } from '../ui/Badge';
import { Clock, PlayCircle } from 'lucide-react';

interface HeroSectionProps {
  mainArticle: Article;
  secondaryArticles: Article[];
  onArticleClick: (id: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ mainArticle, secondaryArticles, onArticleClick }) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800"; // Fallback generic news
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-16">
      
      {/* Main Hero Article */}
      <div 
        className="group relative col-span-1 lg:col-span-8 aspect-[4/3] lg:aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 ring-1 ring-black/5 dark:ring-white/10"
        onClick={() => onArticleClick(mainArticle.id)}
      >
        <div className="absolute inset-0 bg-slate-200 animate-pulse"></div>
        <img 
          src={mainArticle.imageUrl} 
          alt={mainArticle.title} 
          onError={handleImageError}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
        />
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-90 group-hover:opacity-95 transition-all duration-500"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex flex-col items-start z-10">
          <Badge category={mainArticle.category} className="mb-4 backdrop-blur-md bg-white/20 text-white border-white/20 border shadow-sm" />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-white mb-4 leading-tight tracking-tight drop-shadow-md max-w-4xl group-hover:text-primary-100 transition-colors">
            {mainArticle.title}
          </h1>
          <p className="hidden md:block text-gray-200 text-lg font-normal mb-6 line-clamp-2 max-w-2xl drop-shadow">
            {mainArticle.subtitle}
          </p>
          <div className="flex items-center text-gray-300 text-xs md:text-sm font-medium border-t border-white/10 pt-4 w-full">
             <img src={mainArticle.author.avatarUrl} alt={mainArticle.author.name} onError={handleImageError} className="w-8 h-8 rounded-full mr-3 border border-white/20 ring-2 ring-white/10" />
             <span className="mr-3 text-white font-semibold tracking-wide">{mainArticle.author.name}</span>
             <span className="w-1 h-1 bg-white/50 rounded-full mr-3"></span>
             <Clock className="w-3.5 h-3.5 mr-1.5 opacity-80" />
             <span className="opacity-90">há 2 horas</span>
          </div>
        </div>
      </div>

      {/* Secondary Stack - Elegant Vertical List */}
      <div className="col-span-1 lg:col-span-4 flex flex-col gap-6 lg:justify-between h-full">
        {secondaryArticles.slice(0, 3).map((article) => (
          <div 
            key={article.id} 
            className="flex flex-row gap-4 group cursor-pointer h-full relative p-3 rounded-xl hover:bg-white/50 dark:hover:bg-slate-800/50 transition-colors"
            onClick={() => onArticleClick(article.id)}
          >
             <div className="w-24 lg:w-32 aspect-[4/3] rounded-lg overflow-hidden relative shadow-sm flex-shrink-0">
                <img 
                  src={article.imageUrl} 
                  alt={article.title} 
                  onError={handleImageError}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
             </div>
             <div className="flex flex-col justify-center flex-1">
                <div className="flex items-center mb-1.5 gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">{article.category}</span>
                </div>
                <h3 className="font-serif font-bold text-base lg:text-lg leading-snug text-gray-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors line-clamp-3">
                  {article.title}
                </h3>
             </div>
          </div>
        ))}
      </div>
    </section>
  );
};
