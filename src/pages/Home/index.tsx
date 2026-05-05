import { HeroCarousel } from '../../components/Home/HeroCarousel';
import { AboutSection } from '../../components/Home/AboutSection';
import { CtaSection } from '../../components/Home/CtaSection';
import { CatalogSection } from '../../components/Home/CatalogSection';
import { WorkPreview } from '../../components/Home/WorkPreview';
import { FaqSection } from '../../components/Home/FaqSection';

export const Home = () => {
  const slides = [
    {
      title: 'Criamos sua arte...',
      subtitle: 'Design personalizado para sua marca se destacar no mercado',
      image: '/slides/slide1.jpg'
    },
    {
      title: 'Diversas embalagens...',
      subtitle: 'Catálogo completo com mais de 500 modelos disponíveis',
      image: '/slides/slide2.jpg'
    },
    {
      title: 'Entregamos em todo o Brasil',
      subtitle: 'Logística eficiente para atender sua empresa onde você estiver',
      image: '/slides/slide3.jpg'
    }
  ];

  const aboutTexts = [
    'Na <strong>JD Embalagens Personalizadas</strong>, nosso compromisso é com a excelência em embalagens, oferecendo produtos de alta qualidade, criativos e personalizados para cada cliente. Atuamos em diversos segmentos, como cafeterias, sorveterias, corporações, fast-foods, restaurantes, milkshakes, sucos, festas e eventos, sempre buscando atender às necessidades específicas de cada um.',
    'Transformamos suas embalagens em peças únicas, com copos e potes personalizados que refletem a identidade do seu negócio ou evento. Cada detalhe é pensado para que seus produtos sejam apresentados de forma exclusiva, agregando valor à experiência do cliente.',
    'Além disso, fornecemos um enxoval completo de embalagens, garantindo proteção e destacando a imagem da sua marca, com qualidade em cada aspecto de nossos serviços.'
  ];

  const qualityTexts = [
    'Na <strong>JD Embalagens</strong>, cada produto é desenvolvido com atenção aos mínimos detalhes, garantindo perfeição e excelência. Selecionamos criteriosamente os melhores materiais para produzir embalagens que vão além da proteção, valorizando e destacando seu produto no mercado.',
    'Nossas impressões utilizam <strong>tintas de alto padrão</strong>, especialmente formuladas para entregar cores vibrantes, resistência e durabilidade excepcionais. Mantemos rigorosos processos de controle de qualidade em todas as etapas produtivas, assegurando acabamento impecável e fortalecendo a identidade visual da sua marca.',
    'Unimos <strong>criatividade, inovação tecnológica e rigoroso controle de qualidade</strong> para desenvolver soluções que encantam clientes e superam as expectativas mais exigentes do mercado de embalagens personalizadas.'
  ];

  const stats = [
    { number: "150+", label: "CLIENTES SATISFEITOS" },
    { number: "500+", label: "MODELOS DISPONÍVEIS" },
    { number: "100%", label: "QUALIDADE GARANTIDA" }
  ];

  return (
    <>
      <HeroCarousel slides={slides} />
      <AboutSection 
        title="Sobre a JD Embalagens"
        texts={aboutTexts}
        imageSrc="/about-image.jpg"
        imageAlt="Embalagens personalizadas JD"
        qualityTitle="NOSSA QUALIDADE"
        qualityTexts={qualityTexts}
        stats={stats}
      />
      <WorkPreview />
      <CtaSection />
      <CatalogSection />
      <FaqSection/>
    </>
  );
};