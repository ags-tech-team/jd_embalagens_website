import styled from 'styled-components';

export const FooterContainer = styled.footer<{ $isVisible: boolean }>`
  background: ${props => props.theme.colors.footerBg};
  color: ${props => props.theme.colors.white};
  padding: 3rem 5% 1.5rem;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: ${props => props.$isVisible ? 'translateY(0)' : 'translateY(30px)'};
  transition: all 0.6s ease-out;
  
  @media (min-width: 1024px) {
    padding: 4rem 8% 2rem;
  }
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

export const FooterLogo = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #FFFFFF;
  letter-spacing: 1px;
  
  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const FooterText = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: #FFFFFF;
  opacity: 0.9;
  margin-bottom: 1.5rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 500;
  
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const FooterSocial = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  margin-bottom: 2rem;
`;

export const FooterSocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  color: #FFFFFF;
  transition: all 0.3s ease;
  
  svg {
    width: 22px;
    height: 22px;
    transition: transform 0.2s ease;
  }
  
  &:hover {
    background: ${props => props.theme.colors.vibrant};
    transform: translateY(-5px);
    
    svg {
      transform: scale(1.1);
    }
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

export const FooterBottomText = styled.p`
  font-size: 0.8rem;
  color: #FFFFFF;
  opacity: 0.85;
  letter-spacing: 0.5px;
  font-weight: 500;
  
  @media (min-width: 768px) {
    font-size: 0.85rem;
  }
`;