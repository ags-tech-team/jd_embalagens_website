import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderContainer, Logo, Nav, NavLink, ButtonWrapper, MobileMenuButton, MobileMenu, MobileNavLink } from './styles';
import { Button } from '../Button';
import { ThemeToggle } from '../ThemeToggle';
import { useTheme } from '../../contexts/ThemeContext';

export const Header = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const scrollToSection = (id: string) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 90;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 90;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 100);
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
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
          <img src={logoSrc} alt="JD Embalagens - Color Copo" />
        </Logo>
        
        <Nav>
          <NavLink onClick={scrollToTop}>
            Início
          </NavLink>
          <NavLink onClick={() => scrollToSection('sobre')}>
            Sobre
          </NavLink>
          <NavLink onClick={() => scrollToSection('personalize')}>
            Confecção
          </NavLink>
          <NavLink onClick={goToProducts}>
            Produtos
          </NavLink>
        </Nav>
        
        <ButtonWrapper>
          <ThemeToggle />
          <Button variant="vibrant" onClick={goToProducts}>Faça seu orçamento!</Button>
          <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? '✕' : '☰'}
          </MobileMenuButton>
        </ButtonWrapper>
      </HeaderContainer>

      <MobileMenu $isOpen={mobileMenuOpen}>
        <MobileNavLink onClick={scrollToTop}>
          Início
        </MobileNavLink>
        <MobileNavLink onClick={() => scrollToSection('sobre')}>
          Sobre
        </MobileNavLink>
        <MobileNavLink onClick={() => scrollToSection('personalize')}>
          Confecção
        </MobileNavLink>
        <MobileNavLink onClick={goToProducts}>
          Produtos
        </MobileNavLink>
      </MobileMenu>
    </>
  );
};