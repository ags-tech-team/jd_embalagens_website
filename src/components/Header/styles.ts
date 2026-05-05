// components/Header/styles.ts
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: ${props => props.theme.colors.white};
  padding: 0 5%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 90px;
`;

export const Logo = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-self: start;
  
  img {
    height: 60px;
    width: auto;
    display: block;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2.5rem;
  align-items: center;
  justify-self: center;
  margin: 0 auto;
`;

export const NavLink = styled.a`
  color: ${props => props.theme.colors.dark};
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;
  padding: 8px 0;
  position: relative;
  
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

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-self: end;
`;