import styled from 'styled-components';

export const CtaContainer = styled.section<{ $isVisible: boolean }>`
  padding: 5rem 5%;
  background: linear-gradient(135deg, #0B1F35 0%, #1a3a5c 100%);
  position: relative;
  overflow: hidden;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: ${props => props.$isVisible ? 'translateY(0)' : 'translateY(50px)'};
  transition: all 0.8s ease-out;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%2300AEEF' fill-opacity='0.05' d='M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
    background-size: cover;
    opacity: 0.3;
    pointer-events: none;
  }
  
  @media (min-width: 1024px) {
    padding: 6rem 8%;
  }
`;

export const CtaWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  position: relative;
  z-index: 2;
  
  @media (min-width: 992px) {
    flex-direction: row;
    gap: 4rem;
  }
`;

export const CtaContent = styled.div<{ $isVisible: boolean }>`
  flex: 1;
  text-align: center;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: ${props => props.$isVisible ? 'translateX(0)' : 'translateX(-50px)'};
  transition: all 0.8s ease-out 0.2s;
  
  @media (min-width: 992px) {
    text-align: left;
  }
`;

export const CtaTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 800;
  color: ${props => props.theme.colors.white};
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 174, 239, 0.3);
  letter-spacing: 2px;
  
  &::before {
    content: '✨';
    margin-right: 15px;
    display: inline-block;
    animation: sparkle 2s ease-in-out infinite;
  }
  
  &::after {
    content: '✨';
    margin-left: 15px;
    display: inline-block;
    animation: sparkle 2s ease-in-out infinite 0.5s;
  }
  
  @keyframes sparkle {
    0%, 100% {
      opacity: 0.6;
      transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(1.2);
    }
  }
  
  @media (min-width: 768px) {
    font-size: 2rem;
  }
  
  @media (min-width: 1024px) {
    font-size: 2.2rem;
  }
`;

export const CtaText = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: ${props => props.theme.colors.white};
  margin-bottom: 2rem;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  opacity: 0.95;
  
  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const CtaButton = styled.button`
  padding: 14px 40px;
  font-size: 1rem;
  font-weight: 700;
  color: ${props => props.theme.colors.royal};
  background: ${props => props.theme.colors.white};
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 174, 239, 0.3), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
    color: ${props => props.theme.colors.vibrant};
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (min-width: 768px) {
    padding: 16px 48px;
    font-size: 1.1rem;
  }
`;

export const CtaImage = styled.div<{ $isVisible: boolean }>`
  flex: 1;
  max-width: 450px;
  margin: 0 auto;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: ${props => props.$isVisible ? 'translateX(0)' : 'translateX(50px)'};
  transition: all 0.8s ease-out 0.4s;
  
  img {
    width: 100%;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.02);
    }
  }
`;