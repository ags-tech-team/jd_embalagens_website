import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderContainer, Logo, Nav, NavLink, ButtonWrapper, MobileMenuButton, MobileMenu, MobileNavLink, SocialLink } from './styles';
import { Button } from '../Button';
import { ThemeToggle } from '../ThemeToggle';
import { CartIcon } from '../CartIcon';
import { CartDrawer } from '../CartDrawer';
import { useTheme } from '../../contexts/ThemeContext';

export const Header = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  
  const scrollToSection = (id: string) => {
    const scrollToElement = () => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 90;
        const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
        
        window.scrollTo({
          top: elementTop - offset,
          behavior: 'smooth'
        });
      }
    };

    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(scrollToElement, 150);
    } else {
      scrollToElement();
    }
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 150);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const goToProducts = () => {
    navigate('/produtos');
    setMobileMenuOpen(false);
  };

  const logoSrc = theme === 'light' ? '/logo_white.png' : '/logo_dark.png';

  return (
    <>
      <HeaderContainer>
        <Logo onClick={scrollToTop}>
          <img src={logoSrc} alt="JD Color Copo & Pack Clean" />
        </Logo>
        
        <Nav>
          <NavLink onClick={scrollToTop}>Início</NavLink>
          <NavLink onClick={() => scrollToSection('sobre')}>Sobre</NavLink>
          <NavLink onClick={() => scrollToSection('personalize')}>Confecção</NavLink>
          <NavLink onClick={goToProducts}>Produtos</NavLink>
        </Nav>
        
        <ButtonWrapper>
          <SocialLink 
            href="https://www.instagram.com/jd_colorcopo/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </SocialLink>
          <ThemeToggle />
          <CartIcon onClick={() => setCartOpen(true)} />
          <Button variant="vibrant" onClick={goToProducts}>Faça seu orçamento!</Button>
          <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? '✕' : '☰'}
          </MobileMenuButton>
        </ButtonWrapper>
      </HeaderContainer>

      <MobileMenu $isOpen={mobileMenuOpen}>
        <MobileNavLink onClick={scrollToTop}>Início</MobileNavLink>
        <MobileNavLink onClick={() => scrollToSection('sobre')}>Sobre</MobileNavLink>
        <MobileNavLink onClick={() => scrollToSection('personalize')}>Confecção</MobileNavLink>
        <MobileNavLink onClick={goToProducts}>Produtos</MobileNavLink>
        <MobileNavLink 
          as="a" 
          href="https://www.instagram.com/jd_colorcopo/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          📸 Instagram
        </MobileNavLink>
      </MobileMenu>

      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};