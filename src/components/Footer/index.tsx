import { useEffect, useRef, useState } from 'react';
import { FooterContainer, FooterContent, FooterLogo, FooterText, FooterSocial, FooterSocialLink, FooterBottom, FooterBottomText } from './styles';

export const Footer = () => {
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
    <FooterContainer ref={sectionRef} $isVisible={isVisible}>
      <FooterContent>
        <FooterLogo>
          JD Color Copo & Pack Clean
        </FooterLogo>
        
        <FooterText>
          Soluções completas em embalagens personalizadas para o seu negócio.
        </FooterText>
        
        <FooterSocial>
          <FooterSocialLink 
            href="https://www.instagram.com/jd_colorcopo/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162z"/>
            </svg>
          </FooterSocialLink>
          <FooterSocialLink 
            href="https://wa.me/554898318911" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <path d="M12.032 2.5c-5.252 0-9.516 4.264-9.516 9.516 0 1.677.437 3.31 1.263 4.737L2.5 21.5l4.844-1.278c1.38.795 2.98 1.229 4.688 1.229 5.252 0 9.516-4.264 9.516-9.516S17.284 2.5 12.032 2.5zm0 17.516c-1.542 0-3.034-.424-4.324-1.21l-.31-.184-2.874.758.766-2.806-.202-.322c-.84-1.35-1.283-2.887-1.283-4.458 0-4.42 3.595-8.014 8.014-8.014 4.418 0 8.013 3.595 8.013 8.014s-3.595 8.014-8.013 8.014zm4.392-5.998c-.233-.117-1.382-.682-1.595-.76-.214-.078-.37-.117-.526.117-.156.234-.604.76-.74.917-.137.156-.273.176-.506.058-.233-.117-.986-.364-1.876-1.16-.694-.62-1.162-1.386-1.3-1.62-.136-.234-.015-.36.103-.478.104-.104.234-.273.35-.41.117-.136.156-.234.234-.39.078-.156.04-.293-.02-.41-.058-.117-.525-1.267-.72-1.734-.19-.457-.383-.39-.525-.39-.137 0-.293-.02-.45-.02-.156 0-.41.058-.624.293-.215.234-.818.8-.818 1.95 0 1.15.836 2.26.953 2.417.117.156 1.647 2.516 3.992 3.527.558.24.994.383 1.334.49.56.176 1.07.15 1.474.09.45-.06 1.382-.564 1.576-1.11.195-.546.195-1.015.136-1.11-.058-.097-.215-.156-.45-.273z"/>
            </svg>
          </FooterSocialLink>
        </FooterSocial>
      </FooterContent>
      
      <FooterBottom>
        <FooterBottomText>
          © {new Date().getFullYear()} JD Color Copo & Pack Clean. Todos os direitos reservados.
        </FooterBottomText>
      </FooterBottom>
    </FooterContainer>
  );
};