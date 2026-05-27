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
  padding: 1rem;
  
  /* Para evitar quebra de página dentro do card no PDF */
  page-break-inside: avoid;
  break-inside: avoid;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 35px rgba(0, 114, 188, 0.2);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 200px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 16px;
  transition: transform 0.3s ease;
  
  ${ProductCard}:hover & {
    transform: scale(1.02);
  }
`;

export const ProductName = styled.p`
  padding: 0.75rem 0.5rem 0.25rem;
  text-align: center;
  font-weight: 900;  
  font-size: 0.85rem;
  color: #FFFFFF;
  background: ${props => props.theme.colors.cardBg};
  word-break: keep-all;
  white-space: normal;
  overflow-wrap: normal;
  hyphens: none;
  
  @media (min-width: 768px) {
    font-size: 1rem;
    padding: 1rem 0.5rem 0.1rem;
  }
`;

export const ProductsWrapper = styled.div`
  background: ${props => props.theme.colors.background};
`;