import styled from 'styled-components';

export const CartIconContainer = styled.button`
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

export const CartSvg = styled.svg`
  fill: ${props => props.theme.colors.text};
  transition: fill 0.2s ease;
  
  ${CartIconContainer}:hover & {
    fill: ${props => props.theme.colors.royal};
  }
`;

export const CartBadge = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background: ${props => props.theme.colors.vibrant};
  color: white;
  font-size: 0.7rem;
  font-weight: bold;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 2px ${props => props.theme.colors.cardBg};
`;