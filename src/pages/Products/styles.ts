import styled from 'styled-components';

export const ProductsContainer = styled.section`
  padding: 5rem 5%;
  background: ${props => props.theme.colors.background};
  min-height: 100vh;
  
  @media (min-width: 1024px) {
    padding: 6rem 8%;
  }
`;

export const ProductsTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 800;
  color: ${props => props.theme.colors.royal};
  text-align: center;
  margin-bottom: 1rem;
  
  span {
    display: inline-block;
    animation: bounce 2s ease-in-out infinite;
    
    &:first-child {
      margin-right: 15px;
    }
    
    &:last-child {
      margin-left: 15px;
      animation-delay: 0.3s;
    }
  }
  
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }
  
  @media (min-width: 768px) {
    font-size: 2rem;
  }
  
  @media (min-width: 1024px) {
    font-size: 2.3rem;
  }
`;

export const ProductsSubtitle = styled.p`
  font-size: 1rem;
  text-align: center;
  color: ${props => props.theme.colors.text};
  margin-bottom: 3rem;
  opacity: 0.8;
  
  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const FilterContainer = styled.div`
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const FilterButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  
  @media (min-width: 768px) {
    gap: 1rem;
  }
`;

export const FilterButton = styled.button<{ active: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  border: 2px solid ${props => props.active 
    ? props.theme.colors.vibrant 
    : props.theme.colors.border
  };
  border-radius: 50px;
  background: ${props => props.active 
    ? props.theme.colors.vibrant 
    : props.theme.colors.cardBg
  };
  color: ${props => props.active 
    ? props.theme.colors.white 
    : props.theme.colors.text
  };
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  box-shadow: ${props => props.active 
    ? `0 4px 15px rgba(0, 174, 239, 0.3)` 
    : `0 2px 8px rgba(0, 0, 0, 0.06)`
  };
  
  span {
    font-size: 1.1rem;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 174, 239, 0.2);
    border-color: ${props => props.active 
      ? props.theme.colors.vibrant 
      : props.theme.colors.royal
    };
    background: ${props => props.active 
      ? props.theme.colors.vibrant 
      : props.theme.mode === 'dark' 
        ? props.theme.colors.gray 
        : '#f0f8ff'
    };
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 480px) {
    font-size: 0.7rem;
    padding: 0.5rem 0.8rem;
    gap: 0.3rem;
    
    span {
      font-size: 0.9rem;
    }
  }
  
  @media (min-width: 768px) {
    font-size: 0.9rem;
    padding: 0.7rem 1.2rem;
  }
  
  @media (min-width: 1024px) {
    font-size: 1rem;
    padding: 0.8rem 1.5rem;
  }
`;

export const FilterBadge = styled.span`
  background: rgba(255, 255, 255, 0.3);
  color: ${props => props.theme.colors.white};
  border-radius: 50%;
  padding: 0.1rem 0.5rem;
  font-size: 0.7rem;
  font-weight: 700;
  margin-left: 0.2rem;
  
  @media (max-width: 480px) {
    font-size: 0.6rem;
    padding: 0.05rem 0.4rem;
  }
`;

export const ClearFilterButton = styled.button`
  background: transparent;
  border: none;
  color: ${props => props.theme.colors.royal};
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  transition: all 0.3s ease;
  text-decoration: underline;
  
  &:hover {
    color: ${props => props.theme.colors.vibrant};
    transform: scale(1.05);
  }
  
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const FilterInfo = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.text};
  font-size: 0.95rem;
  opacity: 0.8;
  
  strong {
    color: ${props => props.theme.colors.royal};
    font-weight: 700;
  }
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

export const CategorySection = styled.div`
  margin-bottom: 4rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.royal};
  margin-bottom: 1.5rem;
  padding-left: 0.5rem;
  border-left: 4px solid ${props => props.theme.colors.vibrant};
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  span {
    font-size: 1.8rem;
  }
  
  @media (min-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.8rem;
  }
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
  
  @media (min-width: 1280px) {
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
  }
`;

export const ProductCard = styled.div`
  background: ${props => props.theme.colors.cardBg};
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 35px rgba(0, 114, 188, 0.2);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 16px;
  transition: transform 0.3s ease;
  
  ${ProductCard}:hover & {
    transform: scale(1.02);
  }
`;

export const ProductName = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 0.85rem;
  color: ${props => props.theme.colors.text};
  background: ${props => props.theme.colors.cardBg};
  padding: 0.25rem 0.25rem;
  margin-top: 0;
  word-break: keep-all;
  white-space: normal;
  overflow-wrap: normal;
  hyphens: none;
  
  @media (min-width: 768px) {
    font-size: 0.9rem;
    padding: 0.5rem 0.25rem;
  }
  
  @media (min-width: 1024px) {
    font-size: 1rem;
    padding: 0.75rem 0.25rem;
  }
`;

export const ProductsWrapper = styled.div`
  background: ${props => props.theme.colors.background};
`;