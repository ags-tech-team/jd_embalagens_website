import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: ${props => props.theme.colors.white};
  padding: 0.3rem 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

export const Logo = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  
  img {
    height: 50px;
    width: auto;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

export const NavLink = styled.a`
  color: ${props => props.theme.colors.dark};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.royal};
  }
`;