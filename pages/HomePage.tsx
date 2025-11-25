
import React from 'react';
import { MOCK_ARTICLES } from '../constants';
import { HeroSection } from '../components/news/HeroSection';
import { NewsCard } from '../components/news/NewsCard';
import { TrendingUp, Zap, ChevronRight, Instagram, MessageCircle, ExternalLink, Plus } from 'lucide-react';
import { Button } from '../components/ui/Button';

interface HomePageProps {
  onNavigate: (id: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const mainArticle = MOCK_ARTICLES[0]; // Turistas (Cultura)
  const secondaryArticles = [MOCK_ARTICLES[1], MOCK_ARTICLES[2], MOCK_ARTICLES[3]]; 
  const recentArticles = MOCK_ARTICLES.slice(4, 9); 
  const popularArticles = [MOCK_ARTICLES[9], MOCK_ARTICLES[10], MOCK_ARTICLES[11], MOCK_ARTICLES[12]];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&q=80&w=200";
  };

  return (
    <div className="animate-fade-in">
      
      {/* Top Bar Ticker */}
      <div className="bg-white dark:bg-[#0f172a] border-b border-gray-100 dark:border-slate-800 mb-8 sticky top-14 z-40 shadow-sm backdrop-blur-md bg-opacity-90">
          <div className="max-w-7xl mx-auto flex items-center h-11 px-4 text-xs font-medium">
             <div className="flex items-center text-accent-600 dark:text-accent-500 mr-6 font-black uppercase tracking-widest whitespace-nowrap bg-accent-50 dark:bg-accent-900/20 px-3 py-1 rounded-full">
                 <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
                </span>
                Em Tempo Real
             </div>
             <div className="marquee flex-grow overflow-hidden whitespace-nowrap text-gray-700 dark:text-gray-300 font-medium">
                <span className="mx-6">Força-tarefa no Centro termina em tumulto •</span>
                <span className="mx-6">Casa do Trabalhador abre 420 vagas •</span>
                <span className="mx-6">Fluminense de Feira anuncia novo técnico •</span>
                <span className="mx-6">Micareta 2025 já tem data definida •</span>
                <span className="mx-6">UEFS abre seleção para professor substituto •</span>
             </div>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <HeroSection 
            mainArticle={mainArticle} 
            secondaryArticles={secondaryArticles} 
            onArticleClick={onNavigate} 
        />

        {/* Banner Publicidade Topo */}
        <div className="mb-16 hidden md:block group cursor-pointer">
           <div className="w-full h-32 rounded-2xl bg-gradient-to-r from-indigo-900 to-blue-900 flex items-center justify-between px-12 relative overflow-hidden shadow-2xl ring-1 ring-white/10">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              
              {/* Decorative Circles */}
              <div className="absolute -left-10 -top-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
              <div className="absolute right-20 top-10 w-60 h-60 bg-indigo-500/20 rounded-full blur-3xl"></div>

              <div className="relative z-10 text-white max-w-lg">
                  <div className="flex items-center space-x-2 mb-2">
                     <span className="bg-white/10 backdrop-blur-md text-[10px] font-bold px-2 py-0.5 rounded text-blue-200 border border-white/10">PUBLICIDADE</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-1">Newsletter Exclusiva</h3>
                  <p className="text-blue-200 text-sm font-light">Receba a curadoria das notícias mais impactantes de Feira toda manhã.</p>
              </div>
              
              <div className="relative z-10 flex items-center bg-white/10 backdrop-blur-md rounded-xl p-2 pr-3 border border-white/10 hover:bg-white/20 transition-colors">
                   <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3">
                       <Zap className="w-5 h-5 text-indigo-900" />
                   </div>
                   <div className="text-left">
                       <span className="block text-xs text-blue-200 uppercase tracking-wide font-bold">Assinar Agora</span>
                       <span className="block text-white font-bold text-sm">É Gratuito</span>
                   </div>
                   <ChevronRight className="w-5 h-5 text-white ml-4" />
              </div>
           </div>
        </div>

        {/* Main Feed + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
            
            {/* Left Column (Feed) */}
            <div className="lg:col-span-8">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100 dark:border-slate-800">
                   <div className="flex items-center">
                       <div className="w-1.5 h-8 bg-primary-600 rounded-full mr-4"></div>
                       <h2 className="text-2xl font-serif font-black text-gray-900 dark:text-white tracking-tight">
                          Últimas Atualizações
                       </h2>
                   </div>
                </div>

                <div className="flex flex-col gap-8">
                    {recentArticles.map(article => (
                        <NewsCard key={`feed-${article.id}`} article={article} variant="horizontal" onClick={onNavigate} />
                    ))}
                </div>
                
                <div className="mt-16 flex justify-center">
                    <Button variant="outline" size="lg" className="w-full md:w-auto px-12 border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 text-gray-500 font-bold uppercase tracking-widest text-xs h-14">
                        Carregar Mais Notícias
                    </Button>
                </div>
            </div>

            {/* Right Column (Sidebar) */}
            <div className="lg:col-span-4 space-y-8">
                
                {/* Popular Posts Widget */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700/50 shadow-lg overflow-hidden ring-1 ring-black/5">
                    <div className="p-5 border-b border-gray-100 dark:border-slate-700 flex justify-between items-center bg-gray-50/50 dark:bg-slate-800/80 backdrop-blur-sm">
                        <h3 className="font-bold text-gray-900 dark:text-white uppercase tracking-wider text-xs flex items-center">
                            <TrendingUp className="w-4 h-4 mr-2 text-accent-500" />
                            Mais Lidas
                        </h3>
                    </div>
                    <div className="divide-y divide-gray-100 dark:divide-slate-700/50">
                        {popularArticles.map((article, idx) => (
                            <div key={`pop-${article.id}`} className="p-5 hover:bg-gray-50 dark:hover:bg-slate-700/30 transition-colors cursor-pointer group flex gap-4 items-start" onClick={() => onNavigate(article.id)}>
                                <span className="text-3xl font-black text-gray-200 dark:text-slate-700 leading-none -mt-1 font-serif group-hover:text-primary-200 transition-colors">
                                    {idx + 1}
                                </span>
                                <div>
                                    <span className="text-[10px] font-bold text-accent-500 uppercase tracking-wide mb-1 block">{article.category}</span>
                                    <h4 className="text-sm font-bold text-gray-800 dark:text-gray-200 leading-snug group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                        {article.title}
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Instagram Widget */}
                <div className="bg-gradient-to-tr from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-2xl p-6 text-white shadow-lg relative overflow-hidden group">
                     {/* Glass Effect Overlay */}
                     <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                     
                     <div className="relative z-10 flex flex-col items-center text-center">
                         <div className="w-16 h-16 bg-white rounded-full p-1 mb-3 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                            <div className="w-full h-full rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center p-1">
                                <Instagram className="w-6 h-6 text-[#fd1d1d]" />
                            </div>
                         </div>
                         <h3 className="font-serif font-bold text-xl mb-0.5 tracking-tight">@noticiasfeira</h3>
                         <p className="text-white/90 text-xs font-medium mb-5">50.2K Seguidores • Lives e Bastidores</p>
                         
                         <a href="#" className="w-full block">
                            <button className="w-full bg-white text-[#d62976] hover:bg-gray-50 font-bold py-3 rounded-xl shadow-md transition-all flex items-center justify-center text-sm">
                                <Plus className="w-4 h-4 mr-2" />
                                Seguir no Instagram
                            </button>
                         </a>
                     </div>
                </div>

                 {/* Whatsapp Widget */}
                <div className="bg-[#25D366] rounded-2xl p-6 text-white shadow-lg relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-4 -translate-y-4">
                        <MessageCircle className="w-32 h-32" />
                    </div>

                    <div className="relative z-10">
                        <div className="flex items-center mb-3 gap-3">
                            <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg">
                                <MessageCircle className="w-6 h-6 text-white" />
                            </div>
                            <span className="font-bold text-sm tracking-wide uppercase opacity-90">Canal Oficial</span>
                        </div>
                        
                        <h3 className="font-serif font-bold text-2xl mb-2 leading-tight">Receba notícias em tempo real</h3>
                        <p className="text-white/90 text-sm mb-6 leading-relaxed font-medium max-w-[200px]">
                            Urgentes, trânsito e vagas de emprego direto no seu WhatsApp.
                        </p>
                        
                        <a href="#" className="block w-full">
                            <button className="w-full bg-[#075E54] hover:bg-[#054c44] text-white font-bold py-3 rounded-xl shadow-lg border border-[#075E54] transition-all flex items-center justify-center text-sm group-hover:translate-x-1 duration-300">
                                Entrar no Canal
                                <ExternalLink className="w-4 h-4 ml-2 opacity-70" />
                            </button>
                        </a>
                    </div>
                </div>

            </div>
        </div>

      </div>
    </div>
  );
};
