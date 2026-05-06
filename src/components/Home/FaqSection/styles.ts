import styled from 'styled-components';

export const FaqContainer = styled.section<{ $isVisible: boolean }>`
  padding: 5rem 5%;
  background: ${props => props.theme.colors.background};
  position: relative;
  overflow: hidden;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: ${props => props.$isVisible ? 'translateY(0)' : 'translateY(50px)'};
  transition: all 0.8s ease-out;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(0,174,239,0.05) 0%, transparent 70%);
    border-radius: 50%;
    animation: floatBg 20s ease-in-out infinite;
  }
  
  @keyframes floatBg {
    0%, 100% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(-50px, 50px);
    }
  }
  
  @media (min-width: 1024px) {
    padding: 6rem 8%;
  }
`;

export const FaqTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 800;
  color: ${props => props.theme.colors.royal};
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  text-shadow: 0 2px 10px rgba(0, 114, 188, 0.2);
  animation: titleGlow 3s ease-in-out infinite;
  
  span {
    display: inline-block;
    animation: sparkle 2s ease-in-out infinite;
    
    &:first-child {
      margin-right: 15px;
    }
    
    &:last-child {
      margin-left: 15px;
      animation-delay: 0.5s;
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, transparent, ${props => props.theme.colors.vibrant}, transparent);
    border-radius: 2px;
  }
  
  @keyframes titleGlow {
    0%, 100% {
      text-shadow: 0 2px 10px rgba(0, 114, 188, 0.2);
    }
    50% {
      text-shadow: 0 2px 20px rgba(0, 114, 188, 0.5);
    }
  }
  
  @keyframes sparkle {
    0%, 100% {
      transform: scale(1);
      opacity: 0.6;
    }
    50% {
      transform: scale(1.2);
      opacity: 1;
    }
  }
  
  @media (min-width: 768px) {
    font-size: 2rem;
  }
  
  @media (min-width: 1024px) {
    font-size: 2.3rem;
  }
`;

export const FaqGrid = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FaqCard = styled.div<{ $isOpen: boolean }>`
  background: ${props => props.theme.colors.cardBg};
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 20px rgba(0, 0, 0, ${props => props.theme.colors.dark === '#0B1F35' 
    ? 0.05 
    : 0.2
  });

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 114, 188, 0.12);
  }
`;

export const FaqQuestion = styled.div`
  padding: 1.5rem;
  font-size: 1.1rem;
  font-weight: 700;
  color: ${props => props.theme.colors.text};
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease;
  
  @media (min-width: 768px) {
    font-size: 1.2rem;
    padding: 1.5rem 2rem;
  }
`;

export const FaqIcon = styled.span<{ $isOpen: boolean }>`
  width: 32px;
  height: 32px;
  min-width: 32px;
  background: ${props => props.$isOpen 
    ? 'linear-gradient(135deg, #0072BC, #00AEEF)' 
    : '#F5F5F5'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  font-weight: bold;
  color: ${props => props.$isOpen ? props.theme.colors.white : props.theme.colors.royal};
  transition: all 0.3s ease;
`;

export const FaqAnswer = styled.div<{ $isOpen: boolean }>`
  max-height: ${props => props.$isOpen ? '500px' : '0'};
  padding: ${props => props.$isOpen ? '0 1.5rem 1.5rem' : '0 1.5rem'};
  overflow: hidden;
  transition: all 0.4s ease;
  color: ${props => props.theme.colors.text};
  line-height: 1.8;
  font-size: 0.95rem;
  
  p {
    margin-bottom: 1rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  @media (min-width: 768px) {
    padding: ${props => props.$isOpen ? '0 2rem 1.5rem' : '0 2rem'};
    font-size: 1rem;
  }
`;