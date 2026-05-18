import styled from 'styled-components';

export const DrawerOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 9999;
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  opacity: ${props => props.$isOpen ? 1 : 0};
  transition: all 0.3s ease;
  backdrop-filter: blur(4px);
`;

export const DrawerContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 450px;
  background: ${props => props.theme.colors.cardBg};
  z-index: 10000;
  transform: ${props => props.$isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  box-shadow: -4px 0 30px rgba(0, 0, 0, 0.2);
`;

export const DrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid ${props => props.theme.colors.border};
`;

export const DrawerTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${props => props.theme.colors.royal};
`;

export const CloseButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background: ${props => props.theme.colors.gray};
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${props => props.theme.colors.royal};
    color: white;
  }
`;

export const DrawerContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
`;

export const CartItemCard = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem;
  background: ${props => props.theme.colors.background};
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

export const CartItemImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
`;

export const CartItemInfo = styled.div`
  flex: 1;
`;

export const CartItemName = styled.p`
  font-weight: 600;
  font-size: 0.95rem;
  color: ${props => props.theme.colors.text};
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.2s ease;
  
  &:hover {
    opacity: 1;
  }
`;

export const DrawerFooter = styled.div`
  padding: 1.5rem;
  border-top: 1px solid ${props => props.theme.colors.border};
`;

export const TotalText = styled.p`
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.text};
`;

export const WhatsButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #25D366, #128C7E);
  border: none;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1rem;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);
  }
`;

export const EmptyCart = styled.div`
  text-align: center;
  padding: 3rem 1rem;
  
  span {
    font-size: 4rem;
    display: block;
    margin-bottom: 1rem;
    opacity: 0.5;
  }
  
  p {
    color: ${props => props.theme.colors.text};
    opacity: 0.7;
    
    &:first-of-type {
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
  }
`;