import { useState } from 'react';
import { HeaderContainer, Logo, Nav, NavLink, ButtonWrapper, MobileMenuButton, MobileMenu, MobileNavLink } from './styles';
import { Button } from '../Button';
import { ThemeToggle } from '../ThemeToggle';
import { useTheme } from '../../contexts/ThemeContext';

export const Header = () => {
  const { theme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const logoSrc = theme === 'light' ? '/logo_white.png' : '/logo_dark.png';

  return (
    <>
      <HeaderContainer>
        <Logo href="#inicio" onClick={(e) => { e.preventDefault(); scrollToSection('inicio'); }}>
          <img src={logoSrc} alt="JD Embalagens - Color Copo" />
        </Logo>
        
        <Nav>
          <NavLink href="#inicio" onClick={(e) => { e.preventDefault(); scrollToSection('inicio'); }}>
            Início
          </NavLink>
          <NavLink href="#sobre" onClick={(e) => { e.preventDefault(); scrollToSection('sobre'); }}>
            Sobre
          </NavLink>
          <NavLink href="#confeccao" onClick={(e) => { e.preventDefault(); scrollToSection('confeccao'); }}>
            Confecção
          </NavLink>
          <NavLink href="#produtos" onClick={(e) => { e.preventDefault(); scrollToSection('produtos'); }}>
            Produtos
          </NavLink>
        </Nav>
        
        <ButtonWrapper>
          <ThemeToggle />
          <Button variant="vibrant">Aqui na JD</Button>
          <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? '✕' : '☰'}
          </MobileMenuButton>
        </ButtonWrapper>
      </HeaderContainer>

      <MobileMenu $isOpen={mobileMenuOpen}>
        <MobileNavLink href="#inicio" onClick={(e) => { e.preventDefault(); scrollToSection('inicio'); }}>
          Início
        </MobileNavLink>
        <MobileNavLink href="#sobre" onClick={(e) => { e.preventDefault(); scrollToSection('sobre'); }}>
          Sobre
        </MobileNavLink>
        <MobileNavLink href="#confeccao" onClick={(e) => { e.preventDefault(); scrollToSection('confeccao'); }}>
          Confecção
        </MobileNavLink>
        <MobileNavLink href="#produtos" onClick={(e) => { e.preventDefault(); scrollToSection('produtos'); }}>
          Produtos
        </MobileNavLink>
      </MobileMenu>
    </>
  );
};