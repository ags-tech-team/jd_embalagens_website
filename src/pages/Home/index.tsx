import { HomeContainer, Hero, HeroContent, Section } from './styles';
import { Button } from '../../components/Button';

export const Home = () => {
  return (
    <HomeContainer>
      <Hero>
        <HeroContent>
          <h1>Embalagens descartáveis de qualidade</h1>
          <p>Soluções completas para seu negócio com os melhores preços</p>
          <Button variant="vibrant">Solicitar Orçamento</Button>
        </HeroContent>
      </Hero>
      
      <Section id="sobre">
        <h2>Sobre a JD Embalagens</h2>
        <p>Texto sobre a empresa...</p>
      </Section>

      <Section id="confeccao">
        <h2>Confecção Própria</h2>
        <p>Informações sobre confecção...</p>
      </Section>
    </HomeContainer>
  );
};