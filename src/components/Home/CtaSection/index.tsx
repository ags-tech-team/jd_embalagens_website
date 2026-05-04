import { useEffect, useRef, useState } from 'react';
import { CtaContainer, CtaWrapper, CtaContent, CtaImage, CtaTitle, CtaText, CtaButton } from './styles';

export const CtaSection = () => {
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
    <CtaContainer ref={sectionRef} $isVisible={isVisible}>
      <CtaWrapper>
        <CtaContent $isVisible={isVisible}>
          <CtaTitle>PERSONALIZE HOJE!</CtaTitle>
          <CtaText>
            Envie uma solicitação de orçamento e comece a criar destaque para sua marca!
            <br />
            Transforme suas embalagens em uma experiência única que seus clientes vão amar.
          </CtaText>
          <CtaButton>Solicitar Orçamento</CtaButton>
        </CtaContent>
        <CtaImage $isVisible={isVisible}>
          <img 
            src="https://placehold.co/600x500/0072BC/white/png?text=Embalagens+JD" 
            alt="Embalagens personalizadas JD"
          />
        </CtaImage>
      </CtaWrapper>
    </CtaContainer>
  );
};