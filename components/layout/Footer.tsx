import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-[#0b1120] text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-slate-800 pt-16 pb-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
             <div className="flex flex-col">
              <span className="font-serif font-black text-2xl tracking-tighter text-primary-900 dark:text-white leading-none">
                NFS<span className="text-accent-500">.</span>
              </span>
              <span className="text-[0.6rem] font-bold tracking-widest uppercase text-gray-400 dark:text-slate-500 mt-1">
                Desde 2010
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              Jornalismo independente comprometido com a verdade em Feira de Santana. Conectando você aos fatos que transformam nossa região com agilidade e profundidade.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-slate-800 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-600 transition-all duration-300"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-slate-800 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-600 transition-all duration-300"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-slate-800 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-600 transition-all duration-300"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="lg:col-span-2">
            <h4 className="font-serif font-bold text-gray-900 dark:text-white mb-6">Editorias</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors block">Política</a></li>
              <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors block">Polícia</a></li>
              <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors block">Cotidiano</a></li>
              <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors block">Esportes</a></li>
              <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors block">Negócios</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="lg:col-span-2">
            <h4 className="font-serif font-bold text-gray-900 dark:text-white mb-6">Institucional</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors block">Quem Somos</a></li>
              <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors block">Expediente</a></li>
              <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors block">Anuncie</a></li>
              <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors block">Privacidade</a></li>
              <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors block">Contato</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4">
             <div className="bg-primary-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-primary-100 dark:border-slate-700">
               <h4 className="font-serif font-bold text-gray-900 dark:text-white mb-2">Newsletter Diária</h4>
               <p className="text-sm mb-4 text-gray-600 dark:text-gray-400">As principais manchetes de Feira no seu e-mail, toda manhã.</p>
               <div className="flex flex-col space-y-3">
                 <input 
                  type="email" 
                  placeholder="Seu melhor e-mail" 
                  className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-600 text-gray-900 dark:text-white text-sm rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                 />
                 <button className="w-full bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold py-3 rounded-lg transition-colors flex items-center justify-center group">
                   Inscrever-se Grátis
                   <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                 </button>
               </div>
               <p className="text-xs text-gray-400 mt-3 text-center">Respeitamos sua privacidade. Cancele quando quiser.</p>
             </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2025 Notícias Feira de Santana. Design Remasterizado.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <div className="flex items-center">
                <MapPin className="w-3 h-3 mr-1" />
                <span>Feira de Santana - BA</span>
            </div>
            <div className="flex items-center">
                <Phone className="w-3 h-3 mr-1" />
                <span>(75) 3600-0000</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};