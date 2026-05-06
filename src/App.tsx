import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { GlobalStyle } from './styles/global';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { useEffect } from 'react';
import { useTheme } from './contexts/ThemeContext';

function AppContent() {
  const { setTheme } = useTheme();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      const savedTheme = localStorage.getItem('theme');
      if (!savedTheme) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [setTheme]);

  return (
    <>
      <GlobalStyle />
      <MainLayout>
        <Home />
      </MainLayout>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;