import styled from 'styled-components';

export const HeroSlide = styled.div<{ image: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }
`;

export const HeroContent = styled.div`
  text-align: center;
  color: ${props => props.theme.colors.white};
  max-width: 90%;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  backdrop-filter: blur(2px);
  animation: fadeInUp 1s ease-out;
  position: relative;
  z-index: 2;
  
  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    font-weight: bold;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 0, 0, 0.3);
    
    @media (min-width: 768px) {
      font-size: 3rem;
    }
    
    @media (min-width: 1024px) {
      font-size: 3.5rem;
    }
  }
  
  p {
    font-size: 1rem;
    text-shadow: 0 1px 8px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 0, 0, 0.3);
    
    @media (min-width: 768px) {
      font-size: 1.2rem;
    }
    
    @media (min-width: 1024px) {
      font-size: 1.3rem;
    }
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const FadeBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 60%, rgba(255,255,255,1) 100%);
  z-index: 10;
  pointer-events: none;
`;

export const AboutSection = styled.section`
  padding: 5rem 5%;
  background: ${props => props.theme.colors.white};
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s ease-out;
  
  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
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

export const AboutContent = styled.div`
  flex: 1;
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.8s ease-out 0.2s;
  
  .visible & {
    opacity: 1;
    transform: translateX(0);
  }
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
  
  @media (min-width: 768px) {
    font-size: 1.05rem;
  }
`;

export const AboutHighlight = styled.span`
  color: ${props => props.theme.colors.vibrant};
  font-weight: 600;
`;

export const AboutImage = styled.div`
  flex: 1;
  opacity: 0;
  transform: translateX(30px);
  transition: all 0.8s ease-out 0.4s;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  
  .visible & {
    opacity: 1;
    transform: translateX(0);
  }
  
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