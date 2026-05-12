import { useEffect, useRef, useState } from 'react';
import { 
  AboutSectionContainer, 
  AboutContainer, 
  AboutContent, 
  AboutImage, 
  AboutTitle, 
  AboutText, 
  QualitySection,
  QualityContentWrapper,
  QualityStats,
  StatsCard,
  StatsNumber,
  StatsLabel
} from './styles';

interface AboutSectionProps {
  id?: string;  // ← adicione
  title: string;
  texts: string[];
  imageSrc: string;
  imageAlt: string;
  qualityTitle?: string;
  qualityTexts?: string[];
  stats?: { number: string; label: string }[];
}

export const AboutSection = ({ 
  id,  // ← adicione
  title, 
  texts, 
  imageSrc, 
  imageAlt,
  qualityTitle = "NOSSA QUALIDADE",
  qualityTexts = [],
  stats = []
}: AboutSectionProps) => {
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isQualityVisible, setIsQualityVisible] = useState(false);
  const aboutRef = useRef<HTMLElement>(null);
  const qualityRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (aboutRef.current) {
        const rect = aboutRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const isVisibleNow = rect.top <= windowHeight * 0.8 && rect.bottom >= 0;
        
        if (isVisibleNow !== isAboutVisible) {
          setIsAboutVisible(isVisibleNow);
        }
      }
      
      if (qualityRef.current) {
        const rect = qualityRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const isVisibleNow = rect.top <= windowHeight * 0.8 && rect.bottom >= 0;
        
        if (isVisibleNow !== isQualityVisible) {
          setIsQualityVisible(isVisibleNow);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isAboutVisible, isQualityVisible]);

  return (
    <>
      <AboutSectionContainer ref={aboutRef} $isVisible={isAboutVisible} id={id}>
        <AboutContainer>
          <AboutContent $isVisible={isAboutVisible}>
            <AboutTitle>{title}</AboutTitle>
            {texts.map((text, index) => (
              <AboutText key={index} dangerouslySetInnerHTML={{ __html: text }} />
            ))}
          </AboutContent>
          <AboutImage $isVisible={isAboutVisible}>
            <img src={imageSrc} alt={imageAlt} />
          </AboutImage>
        </AboutContainer>
      </AboutSectionContainer>

      <QualitySection ref={qualityRef} $isVisible={isQualityVisible}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <QualityContentWrapper $isVisible={isQualityVisible}>
            <AboutTitle>{qualityTitle}</AboutTitle>
            {qualityTexts.map((text, index) => (
              <AboutText key={index} dangerouslySetInnerHTML={{ __html: text }} />
            ))}
            {stats.length > 0 && (
              <QualityStats>
                {stats.map((stat, index) => (
                  <StatsCard key={index}>
                    <StatsNumber>{stat.number}</StatsNumber>
                    <StatsLabel>{stat.label}</StatsLabel>
                  </StatsCard>
                ))}
              </QualityStats>
            )}
          </QualityContentWrapper>
        </div>
      </QualitySection>
    </>
  );
};