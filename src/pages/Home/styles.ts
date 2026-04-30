import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 100%;
`;

export const Hero = styled.section`
  background: linear-gradient(135deg, ${props => props.theme.colors.royal} 0%, ${props => props.theme.colors.vibrant} 100%);
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export const HeroContent = styled.div`
  text-align: center;
  color: ${props => props.theme.colors.white};
  max-width: 800px;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
`;

export const Section = styled.section`
  padding: 4rem 5%;
  max-width: 1200px;
  margin: 0 auto;

  h2 {
    color: ${props => props.theme.colors.royal};
    margin-bottom: 2rem;
  }
`;