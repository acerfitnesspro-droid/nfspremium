
import React, { useEffect } from 'react';
import { Article } from '../types';
import { MOCK_ARTICLES } from '../constants';
import { Badge } from '../components/ui/Badge';
import { Clock, Calendar, Share2, ArrowLeft, Bookmark, Sparkles, MessageCircle, ThumbsUp } from 'lucide-react';
import { Button } from '../components/ui/Button';

interface ArticlePageProps {
  id: string;
  onBack: () => void;
}

export const ArticlePage: React.FC<ArticlePageProps> = ({ id, onBack }) => {
  const article = MOCK_ARTICLES.find(a => a.id === id) || MOCK_ARTICLES[0];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1200"; // Fallback
  };

  return (
    <article className="animate-slide-up max-w-5xl mx-auto">
      {/* Navigation Breadcrumb area */}
      <div className="flex items-center justify-between mb-8">
        <Button variant="ghost" size="sm" onClick={onBack} className="pl-0 hover:bg-transparent text-gray-500 hover:text-primary-600 group">
            <ArrowLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" /> Voltar
        </Button>
        <div className="text-sm text-gray-400 breadcrumbs hidden sm:block">
            Notícias <span className="mx-2">/</span> {article.category} <span className="mx-2">/</span> Post
        </div>
      </div>

      <header className="mb-10 max-w-4xl mx-auto text-center md:text-left">
        <div className="flex flex-wrap gap-3 mb-6 justify-center md:justify-start">
            <Badge category={article.category} size="md" />
            {article.isBreaking && (
                <span className="flex items-center text-xs font-bold bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-3 py-1 rounded-md uppercase tracking-wide border border-red-100 dark:border-red-800">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                    Urgente
                </span>
            )}
        </div>
        
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-black text-gray-900 dark:text-white mb-6 leading-[1.1] tracking-tight">
          {article.title}
        </h1>
        
        <p className="text-xl md:text-2xl font-light text-gray-600 dark:text-slate-300 mb-8 leading-relaxed">
          {article.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-between py-6 border-y border-gray-100 dark:border-slate-800">
            <div className="flex items-center mb-4 sm:mb-0">
                <img 
                    src={article.author.avatarUrl} 
                    alt={article.author.name} 
                    onError={handleImageError}
                    className="w-12 h-12 rounded-full mr-4 border-2 border-white dark:border-slate-700 shadow-sm" 
                />
                <div className="text-left">
                    <p className="font-bold text-gray-900 dark:text-white text-sm">{article.author.name}</p>
                    <p className="text-xs text-primary-600 dark:text-primary-400 font-medium">{article.author.role}</p>
                </div>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400 font-medium">
                <div className="flex items-center" title="Data de publicação">
                    <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                    <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center" title="Tempo de leitura estimado">
                    <Clock className="w-4 h-4 mr-2 text-gray-400" />
                    <span>{article.readTime} min leitura</span>
                </div>
            </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="mb-12 rounded-2xl overflow-hidden shadow-lg relative max-w-5xl mx-auto group">
        <img 
            src={article.imageUrl} 
            alt={article.title} 
            onError={handleImageError}
            className="w-full object-cover max-h-[600px] transition-transform duration-1000 group-hover:scale-[1.01]" 
        />
        <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white text-xs md:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            Foto: Divulgação / Ilustrativa • Feira de Santana
        </figcaption>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          {/* Social Sidebar (Desktop Sticky) */}
          <div className="hidden lg:flex lg:col-span-1 flex-col gap-4 sticky top-32 h-fit items-center">
             <button className="p-3 rounded-full bg-white dark:bg-slate-800 text-gray-400 hover:text-blue-600 hover:shadow-md border border-gray-100 dark:border-slate-700 transition-all tooltip" title="Compartilhar">
                 <Share2 className="w-5 h-5" />
             </button>
             <button className="p-3 rounded-full bg-white dark:bg-slate-800 text-gray-400 hover:text-amber-500 hover:shadow-md border border-gray-100 dark:border-slate-700 transition-all tooltip" title="Salvar">
                 <Bookmark className="w-5 h-5" />
             </button>
             <div className="h-px w-8 bg-gray-200 dark:bg-slate-700 my-2"></div>
             <button className="p-3 rounded-full bg-white dark:bg-slate-800 text-gray-400 hover:text-green-600 hover:shadow-md border border-gray-100 dark:border-slate-700 transition-all tooltip" title="Curtir">
                 <ThumbsUp className="w-5 h-5" />
             </button>
             <button className="p-3 rounded-full bg-white dark:bg-slate-800 text-gray-400 hover:text-primary-600 hover:shadow-md border border-gray-100 dark:border-slate-700 transition-all tooltip" title="Comentar">
                 <MessageCircle className="w-5 h-5" />
             </button>
          </div>

          {/* Main Content */}
          <div className="col-span-1 lg:col-span-8">
            
            {/* AI Summary Block */}
            <div className="bg-gradient-to-br from-primary-50 to-white dark:from-slate-800 dark:to-slate-800/50 p-6 md:p-8 rounded-2xl mb-10 border border-primary-100 dark:border-slate-700 shadow-sm">
                <h4 className="text-xs font-black uppercase tracking-widest text-primary-700 dark:text-primary-400 mb-3 flex items-center">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Resumo Inteligente
                </h4>
                <p className="text-gray-700 dark:text-slate-300 text-base md:text-lg leading-relaxed font-medium">
                    Esta matéria destaca os principais pontos sobre <strong>{article.title}</strong>. A notícia impacta diretamente a região de Feira de Santana, trazendo atualizações cruciais sobre infraestrutura e desenvolvimento local. Leitura essencial para cidadãos engajados.
                </p>
            </div>

            <div className="prose prose-lg md:prose-xl dark:prose-invert prose-headings:font-serif prose-headings:font-bold prose-p:leading-8 prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-2xl max-w-none text-gray-800 dark:text-gray-300">
                <p className="lead first-letter:text-6xl first-letter:font-serif first-letter:font-black first-letter:text-primary-800 first-letter:dark:text-primary-400 first-letter:float-left first-letter:mr-4 first-letter:mt-2">
                    {article.content}
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Em Feira de Santana, a movimentação é intensa. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <h3>Impacto na economia local</h3>
                <p>
                    Especialistas afirmam que a medida trará benefícios a longo prazo. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <figure>
                    <img 
                        src="https://images.unsplash.com/photo-1577416412292-750999cf4de0?auto=format&fit=crop&q=80&w=1200" 
                        alt="Vista aérea de Feira de Santana" 
                        onError={handleImageError}
                    />
                    <figcaption>Vista aérea da região central da cidade (Foto: Arquivo)</figcaption>
                </figure>
                <blockquote>
                    "É um marco histórico para Feira de Santana, trazendo visibilidade e novos investimentos para o setor. Acreditamos no potencial da nossa gente."
                </blockquote>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
            </div>

            {/* Tags & Topics */}
            <div className="mt-12 pt-8 border-t border-gray-100 dark:border-slate-800">
                <h4 className="text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest">Tópicos Relacionados</h4>
                <div className="flex flex-wrap gap-2">
                    {['Feira de Santana', 'Bahia', article.category, 'Notícias', 'Urgente'].map(tag => (
                        <span key={tag} className="px-4 py-2 bg-gray-50 dark:bg-slate-800 text-gray-600 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-primary-50 hover:text-primary-600 dark:hover:bg-slate-700 transition-colors cursor-pointer border border-gray-200 dark:border-slate-700">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
            
            {/* Author Bio Box */}
            <div className="mt-12 p-6 bg-gray-50 dark:bg-slate-800/50 rounded-2xl flex items-center gap-4">
                 <img 
                    src={article.author.avatarUrl} 
                    onError={handleImageError}
                    className="w-16 h-16 rounded-full object-cover" 
                 />
                 <div>
                     <p className="text-xs font-bold text-gray-400 uppercase mb-1">Escrito por</p>
                     <h5 className="font-serif font-bold text-lg text-gray-900 dark:text-white">{article.author.name}</h5>
                     <p className="text-sm text-gray-500 dark:text-gray-400">Jornalista especialista em {article.category} com 10 anos de cobertura em Feira de Santana.</p>
                 </div>
            </div>
          </div>

          {/* Related Sidebar (Desktop) */}
          <div className="hidden lg:block lg:col-span-3 space-y-8">
              <div className="sticky top-32">
                <h3 className="font-serif font-bold text-lg mb-6 dark:text-white flex items-center">
                    <span className="w-1.5 h-6 bg-accent-500 mr-3 rounded-full"></span>
                    Leia Também
                </h3>
                <div className="flex flex-col gap-6">
                    {MOCK_ARTICLES.filter(a => a.id !== article.id).slice(0, 3).map(related => (
                        <div key={related.id} className="group cursor-pointer flex flex-col gap-2" onClick={() => onBack()}> {/* Mock nav back for demo */}
                            <div className="aspect-video rounded-xl overflow-hidden relative">
                                <img 
                                    src={related.imageUrl} 
                                    onError={handleImageError}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                                />
                                <Badge category={related.category} className="absolute top-2 left-2" size="sm" />
                            </div>
                            <h4 className="font-serif font-bold text-base text-gray-800 dark:text-white group-hover:text-primary-600 leading-snug">
                                {related.title}
                            </h4>
                        </div>
                    ))}
                </div>
              </div>
          </div>
      </div>
    </article>
  );
};
