import styled from 'styled-components';

export const MenuContainer = styled.div`
  background: ${props => props.theme.colors.cardBg};
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 100px;
  
  @media (max-width: 991px) {
    position: relative;
    top: 0;
    margin-bottom: 1rem;
  }
`;

export const MenuTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${props => props.theme.colors.royal};
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid ${props => props.theme.colors.vibrant};
`;

export const MenuItem = styled.div<{ $isActive: boolean; $isClickable: boolean }>`
  padding: 0.75rem 1rem;
  margin: 0.25rem 0;
  border-radius: 10px;
  cursor: ${props => props.$isClickable ? 'pointer' : 'default'};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${props => props.$isClickable ? props.theme.colors.text : props.theme.colors.gray};
  background: ${props => props.$isActive ? props.theme.colors.royal + '20' : 'transparent'};
  font-weight: ${props => props.$isActive ? 600 : 400};
  
  &:hover {
    background: ${props => props.$isClickable ? props.theme.colors.royal + '10' : 'transparent'};
    transform: ${props => props.$isClickable ? 'translateX(5px)' : 'none'};
  }
  
  span {
    font-size: 1.2rem;
  }
`;