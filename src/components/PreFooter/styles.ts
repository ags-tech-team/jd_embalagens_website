import styled from 'styled-components';

export const PreFooterContainer = styled.section<{ $isVisible: boolean }>`
  width: 100%;
  padding: 2rem 5%;
  background: ${props => props.theme.colors.background};
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: ${props => props.$isVisible ? 'translateY(0)' : 'translateY(50px)'};
  transition: all 0.8s ease-out;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (min-width: 1024px) {
    padding: 3rem 8%;
  }
`;

export const PreFooterImage = styled.img`
  width: 100%;
  max-width: 1200px;
  height: auto;
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 30px 50px rgba(0, 114, 188, 0.2);
  }
`;