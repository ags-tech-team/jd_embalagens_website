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
  title: string;
  texts: string[];
  imageSrc: string;
  imageAlt: string;
  qualityTitle?: string;
  qualityTexts?: string[];
  stats?: { number: string; label: string }[];
}

export const AboutSection = ({ 
  title, 
  texts, 
  imageSrc, 
  imageAlt,
  qualityTitle = "NOSSA QUALIDADE",
  qualityTexts = [],
  stats = []
}: AboutSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isQualityVisible, setIsQualityVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const qualityRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const isVisibleNow = rect.top <= windowHeight * 0.7 && rect.bottom >= 0;
        
        if (isVisibleNow !== isVisible) {
          setIsVisible(isVisibleNow);
        }
      }
      
      if (qualityRef.current) {
        const rect = qualityRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const isQualityVisibleNow = rect.top <= windowHeight * 0.7 && rect.bottom >= 0;
        
        if (isQualityVisibleNow !== isQualityVisible) {
          setIsQualityVisible(isQualityVisibleNow);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible, isQualityVisible]);

  return (
    <>
      <AboutSectionContainer ref={sectionRef} $isVisible={isVisible}>
        <AboutContainer>
          <AboutContent $isVisible={isVisible}>
            <AboutTitle>{title}</AboutTitle>
            {texts.map((text, index) => (
              <AboutText key={index} dangerouslySetInnerHTML={{ __html: text }} />
            ))}
          </AboutContent>
          <AboutImage $isVisible={isVisible}>
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