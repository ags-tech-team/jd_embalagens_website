import { useEffect, useRef, useState } from 'react';
import { PreFooterContainer, PreFooterImage } from './styles';

export const PreFooter = () => {
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
    <PreFooterContainer ref={sectionRef} $isVisible={isVisible}>
      <PreFooterImage 
        src="/pre-footer-image.webp" 
        alt="JD Color Copo & Pack Clean - Pré Footer"
        loading="lazy"
      />
    </PreFooterContainer>
  );
};