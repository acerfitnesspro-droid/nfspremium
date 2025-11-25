import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ArticlePage } from './pages/ArticlePage';

// Simple state-based router for demo purposes
type ViewState = {
  page: 'home' | 'article' | 'category';
  id?: string;
};

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>({ page: 'home' });

  const navigateToArticle = (id: string) => {
    setCurrentView({ page: 'article', id });
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    setCurrentView({ page: 'home' });
    window.scrollTo(0, 0);
  };

  // Handler for nav links (mock)
  const handleNav = (target: string) => {
    if (target === 'home') {
        navigateToHome();
    } else {
        // Here we would handle category pages, for now just reset to home or log
        console.log(`Navigating to category: ${target}`);
        navigateToHome(); 
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <Navbar onNavigate={handleNav} />
      
      <main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {currentView.page === 'home' && (
          <HomePage onNavigate={navigateToArticle} />
        )}
        
        {currentView.page === 'article' && currentView.id && (
          <ArticlePage id={currentView.id} onBack={navigateToHome} />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;