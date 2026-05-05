import styled from 'styled-components';

export const PreviewContainer = styled.section<{ $isVisible: boolean }>`
  padding: 5rem 5%;
  background: linear-gradient(135deg, #F8F9FA 0%, #FFFFFF 100%);
  position: relative;
  overflow: hidden;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: ${props => props.$isVisible ? 'translateY(0)' : 'translateY(50px)'};
  transition: all 0.8s ease-out;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -20%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(0,114,188,0.05) 0%, transparent 70%);
    border-radius: 50%;
    animation: floatBg 20s ease-in-out infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -50%;
    right: -20%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(0,174,239,0.05) 0%, transparent 70%);
    border-radius: 50%;
    animation: floatBg 25s ease-in-out infinite reverse;
  }
  
  @keyframes floatBg {
    0%, 100% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(50px, 50px);
    }
  }
  
  .swiper {
    width: 100%;
    padding: 2rem 0 4rem 0;
    overflow: visible !important;
  }
  
  .swiper-slide {
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: visible !important;
  }
  
  .swiper-wrapper {
    overflow: visible !important;
  }
  
  @media (min-width: 1024px) {
    padding: 6rem 8%;
  }
`;

export const PreviewTitle = styled.h2`
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

export const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
`;

export const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.dark};
  margin-bottom: 0.5rem;
  position: relative;
  display: inline-block;
  
  span {
    display: inline-block;
    animation: bounce 2s ease-in-out infinite;
    
    &:first-child {
      margin-right: 10px;
    }
    
    &:last-child {
      margin-left: 10px;
      animation-delay: 0.3s;
    }
  }
  
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }
  
  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const PreviewSubtitle = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text};
  opacity: 0.7;
  letter-spacing: 1px;
  
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const Card = styled.div<{ $isActive?: boolean }>`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: ${props => props.$isActive 
    ? '0 15px 35px rgba(0, 114, 188, 0.25), 0 5px 15px rgba(0, 0, 0, 0.1)' 
    : '0 5px 15px rgba(0, 0, 0, 0.08)'};
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  max-width: 320px;
  margin: 0 auto;
  background: ${props => props.theme.colors.white};
  opacity: ${props => props.$isActive ? 1 : 0.35};
  transform: ${props => props.$isActive ? 'scale(1)' : 'scale(0.85)'};
  z-index: ${props => props.$isActive ? 5 : 1};
  
  &:hover {
    transform: ${props => props.$isActive ? 'translateY(-8px) scale(1.02)' : 'scale(0.85)'};
    box-shadow: ${props => props.$isActive 
      ? '0 25px 45px rgba(0, 114, 188, 0.35), 0 10px 20px rgba(0, 0, 0, 0.15)' 
      : '0 5px 15px rgba(0, 0, 0, 0.08)'};
    
    img {
      transform: scale(1.05);
    }
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;
  transition: transform 0.5s ease;
  display: block;
  
  @media (min-width: 768px) {
    height: 350px;
  }
`;

export const CardTitle = styled.p`
  padding: 1rem;
  text-align: center;
  font-weight: 600;
  color: ${props => props.theme.colors.dark};
  background: ${props => props.theme.colors.white};
  font-size: 0.95rem;
  margin: 0;
  transition: all 0.3s ease;
  
  @media (min-width: 768px) {
    font-size: 1rem;
    padding: 1.2rem;
  }
`;