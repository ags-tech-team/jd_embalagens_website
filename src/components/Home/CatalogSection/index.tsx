import { useEffect, useRef, useState } from 'react';
import { CatalogContainer, CatalogWrapper, CatalogContent, CatalogImage, CatalogTitle, CatalogText, CatalogButton } from './styles';

export const CatalogSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const isVisibleNow = rect.top <= windowHeight * 0.8 && rect.bottom >= 0;
        
        if (isVisibleNow !== isVisible) {
          setIsVisible(isVisibleNow);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  return (
    <CatalogContainer ref={sectionRef} $isVisible={isVisible}>
      <CatalogWrapper>
        <CatalogImage $isVisible={isVisible}>
          <img 
            src="https://placehold.co/600x500/00AEEF/white/png?text=Catálogo+JD" 
            alt="Catálogo de embalagens JD"
          />
        </CatalogImage>
        <CatalogContent $isVisible={isVisible}>
          <CatalogTitle>NOSSO CATÁLOGO</CatalogTitle>
          <CatalogText>
            Veja todos os nossos modelos de embalagens e escolha a ideal para o seu negócio!
            <br />
            Temos opções para todos os segmentos, desde cafeterias até grandes eventos.
          </CatalogText>
          <CatalogButton>Ver Catálogo</CatalogButton>
        </CatalogContent>
      </CatalogWrapper>
    </CatalogContainer>
  );
};