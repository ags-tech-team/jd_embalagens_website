// components/Header/index.tsx
import { HeaderContainer, Logo, Nav, NavLink } from './styles';
import { Button } from '../Button';

export const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HeaderContainer>
      <Logo href="#inicio" onClick={(e) => { e.preventDefault(); scrollToSection('inicio'); }}>
        <img 
          src="/logo_white.png" 
          alt="JD Embalagens - Color Copo" 
          style={{ height: '100px', width: 'auto' }}
        />
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
      <Button variant="vibrant">Aqui na JD</Button>
    </HeaderContainer>
  );
};