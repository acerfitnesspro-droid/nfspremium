
import React from 'react';
import { Article } from '../../types';
import { Badge } from '../ui/Badge';
import { Clock, ArrowUpRight } from 'lucide-react';

interface NewsCardProps {
  article: Article;
  variant?: 'vertical' | 'horizontal' | 'compact';
  onClick: (id: string) => void;
}

export const NewsCard: React.FC<NewsCardProps> = ({ article, variant = 'vertical', onClick }) => {
  
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&q=80&w=500"; // Fallback generic newspaper
  };

  if (variant === 'compact') {
      return (
        <div 
            className="group flex gap-5 items-start cursor-pointer py-5 border-b border-gray-100 dark:border-slate-800 last:border-0 hover:bg-gray-50/50 dark:hover:bg-slate-800/30 -mx-2 px-2 rounded-lg transition-colors"
            onClick={() => onClick(article.id)}
        >
            <div className="flex-1 py-1">
                 <div className="flex items-center gap-2 mb-2">
                     <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                     <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">{article.category}</span>
                 </div>
                 <h4 className="font-serif font-bold text-lg text-gray-900 dark:text-slate-100 leading-tight group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors">
                    {article.title}
                 </h4>
                 <div className="mt-2 text-xs text-gray-400 font-medium">
                    {new Date(article.publishedAt).toLocaleDateString()}
                 </div>
            </div>
             <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 relative shadow-sm">
                 <img 
                    src={article.imageUrl} 
                    onError={handleImageError}
                    className="w-full h-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-105" 
                 />
             </div>
        </div>
      )
  }

  if (variant === 'horizontal') {
    return (
      <div 
        className="group flex flex-col sm:flex-row gap-6 p-6 rounded-2xl bg-white dark:bg-slate-800/40 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 cursor-pointer border border-transparent hover:border-gray-100 dark:hover:border-slate-700 shadow-sm hover:shadow-xl ring-1 ring-gray-100 dark:ring-white/5"
        onClick={() => onClick(article.id)}
      >
        <div className="w-full sm:w-64 aspect-[3/2] flex-shrink-0 rounded-xl overflow-hidden relative shadow-md">
          <img 
            src={article.imageUrl} 
            alt={article.title} 
            onError={handleImageError}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col flex-1 justify-center">
          <div className="flex justify-between items-start mb-3">
            <Badge category={article.category} />
            <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-primary-500 transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300" />
          </div>
          <h3 className="font-serif font-black text-xl md:text-2xl text-gray-900 dark:text-white leading-tight mb-3 group-hover:text-primary-700 dark:group-hover:text-primary-400 tracking-tight">
            {article.title}
          </h3>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed mb-4">
            {article.subtitle}
          </p>
          <div className="mt-auto flex items-center text-xs text-gray-400 font-medium">
              <span className="text-gray-700 dark:text-gray-200">{article.author.name}</span>
              <span className="mx-2 text-gray-300">•</span>
              <Clock className="w-3.5 h-3.5 mr-1.5" /> {article.readTime} min de leitura
          </div>
        </div>
      </div>
    );
  }

  // Vertical (Standard Card)
  return (
    <div 
      className="group flex flex-col h-full rounded-2xl overflow-hidden bg-white dark:bg-slate-800 border border-transparent hover:border-gray-100 dark:hover:border-slate-700 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer relative ring-1 ring-black/5 dark:ring-white/5"
      onClick={() => onClick(article.id)}
    >
      <div className="aspect-[3/2] overflow-hidden relative">
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          onError={handleImageError}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
        {article.isBreaking && (
            <div className="absolute top-4 left-4">
                <span className="flex items-center bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg animate-pulse">
                    <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                    Urgente
                </span>
            </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow relative">
        <div className="absolute -top-3 left-6">
             <Badge category={article.category} className="shadow-md border border-white/20" />
        </div>
        <div className="mt-4 mb-3">
             <h3 className="font-serif font-bold text-xl text-gray-900 dark:text-white leading-snug mb-3 group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors tracking-tight">
              {article.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
              {article.subtitle}
            </p>
        </div>
        
        <div className="flex items-center pt-4 border-t border-gray-100 dark:border-slate-700/50 mt-auto">
            <img 
                src={article.author.avatarUrl} 
                alt={article.author.name} 
                onError={handleImageError}
                className="w-8 h-8 rounded-full mr-3 object-cover ring-2 ring-gray-100 dark:ring-slate-700" 
            />
            <div className="flex flex-col">
                <span className="text-xs font-bold text-gray-900 dark:text-white">{article.author.name}</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-wide">{new Date(article.publishedAt).toLocaleDateString()}</span>
            </div>
        </div>
      </div>
    </div>
  );
};
