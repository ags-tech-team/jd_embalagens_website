import styled from 'styled-components';

export const AboutSectionContainer = styled.section<{ $isVisible: boolean }>`
  padding: 5rem 5%;
  background: ${props => props.theme.colors.white};
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: ${props => props.$isVisible ? 'translateY(0)' : 'translateY(50px)'};
  transition: all 0.8s ease-out;
  
  @media (min-width: 1024px) {
    padding: 6rem 8%;
  }
`;

export const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  
  @media (min-width: 992px) {
    flex-direction: row;
    align-items: center;
    gap: 5rem;
  }
`;

export const AboutContent = styled.div<{ $isVisible: boolean }>`
  flex: 1;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: ${props => props.$isVisible ? 'translateX(0)' : 'translateX(-50px)'};
  transition: all 0.8s ease-out 0.2s;
`;

export const AboutTitle = styled.h2`
  font-size: 2rem;
  color: ${props => props.theme.colors.royal};
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    background: ${props => props.theme.colors.vibrant};
    border-radius: 2px;
  }
  
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const AboutText = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: ${props => props.theme.colors.text};
  margin-bottom: 1.2rem;
  
  strong {
    color: ${props => props.theme.colors.vibrant};
    font-weight: 600;
  }
  
  @media (min-width: 768px) {
    font-size: 1.05rem;
  }
`;

export const AboutImage = styled.div<{ $isVisible: boolean }>`
  flex: 1;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: ${props => props.$isVisible ? 'translateX(0)' : 'translateX(50px)'};
  transition: all 0.8s ease-out 0.4s;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.5s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const QualitySection = styled.section<{ $isVisible: boolean }>`
  padding: 5rem 5%;
  background: linear-gradient(135deg, ${props => props.theme.colors.royal} 0%, ${props => props.theme.colors.vibrant} 100%);
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: ${props => props.$isVisible ? 'translateY(0)' : 'translateY(50px)'};
  transition: all 0.8s ease-out;
  
  @media (min-width: 1024px) {
    padding: 6rem 8%;
  }
`;

export const QualityContentWrapper = styled.div<{ $isVisible: boolean }>`
  max-width: 1200px;
  margin: 0 auto;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: ${props => props.$isVisible ? 'translateX(0)' : 'translateX(50px)'};
  transition: all 0.8s ease-out 0.2s;
  
  ${AboutTitle} {
    color: ${props => props.theme.colors.white};
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2);
    
    &::after {
      background: ${props => props.theme.colors.white};
    }
  }
  
  ${AboutText} {
    color: ${props => props.theme.colors.white};
    text-shadow: 0 1px 8px rgba(0, 0, 0, 0.3), 0 0 15px rgba(0, 0, 0, 0.2);
    
    strong {
      color: ${props => props.theme.colors.white};
      text-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
      font-weight: 700;
    }
  }
`;

export const QualityStats = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2rem;
  margin-top: 3rem;
`;

export const StatsCard = styled.div`
  text-align: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  min-width: 150px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.25);
  }
`;

export const StatsNumber = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${props => props.theme.colors.white};
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const StatsLabel = styled.div`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.white};
  opacity: 0.9;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
`;