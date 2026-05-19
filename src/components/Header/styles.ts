import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: ${props => props.theme.colors.headerBg};
  padding: 0 4%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 70px;
  
  @media (min-width: 992px) {
    height: 90px;
    padding: 0 5%;
  }
`;

export const Logo = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  
  img {
    height: 40px;
    width: auto;
    display: block;
    
    @media (min-width: 992px) {
      height: 90px;
    }
  }
`;

export const Nav = styled.nav`
  display: none;
  gap: 2rem;
  align-items: center;
  
  @media (min-width: 992px) {
    display: flex;
  }
`;

export const NavLink = styled.div`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;
  padding: 8px 0;
  position: relative;
  white-space: nowrap;
  
  &:hover {
    color: ${props => props.theme.colors.royal};
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: ${props => props.theme.colors.royal};
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

export const RightGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
  
  @media (min-width: 992px) {
    gap: 1rem;
  }
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.text};
  transition: all 0.3s ease;
  
  svg {
    width: 20px;
    height: 20px;
    transition: all 0.3s ease;
    
    @media (min-width: 992px) {
      width: 22px;
      height: 22px;
    }
  }
  
  &:hover {
    color: ${props => props.theme.colors.vibrant};
    transform: scale(1.05);
  }
`;

export const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 4px;
  
  @media (min-width: 992px) {
    display: none;
  }
`;

export const MobileMenu = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  background: ${props => props.theme.colors.headerBg};
  padding: ${props => props.$isOpen ? '2rem' : '0'};
  height: ${props => props.$isOpen ? 'auto' : '0'};
  opacity: ${props => props.$isOpen ? 1 : 0};
  overflow: hidden;
  transition: all 0.3s ease;
  z-index: 999;
  box-shadow: ${props => props.$isOpen ? '0 4px 10px rgba(0,0,0,0.1)' : 'none'};
  
  @media (min-width: 992px) {
    display: none;
  }
`;

export const MobileNavLink = styled.div`
  display: block;
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  font-weight: 600;
  font-size: 1.2rem;
  padding: 1rem;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    color: ${props => props.theme.colors.royal};
    background: ${props => props.theme.colors.gray};
  }
`;