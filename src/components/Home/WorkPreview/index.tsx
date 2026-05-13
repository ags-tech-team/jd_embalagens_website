import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { 
  PreviewContainer, 
  PreviewTitle, 
  PreviewSubtitle,
  SectionTitle,
  CategoryTitle,
  Card,
  CardImage,
  CardTitle
} from './styles';

import 'swiper/css';

export const WorkPreview = () => {
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

  const coposPotes = [
    { id: 1, image: 'products/copoPP330.png', title: 'Copo Personalizado' },
    { id: 2, image: 'products/copoStanley.png', title: 'Copo Térmico' },
    { id: 3, image: 'products/poteIsopor.png', title: 'Pote para Sorvete' },
    { id: 4, image: 'products/copoTwister.png', title: 'Copo com Tampa' },
    { id: 5, image: 'products/copoDePapel.png', title: 'Pote para Açaí' },
    { id: 6, image: 'products/copoLongDrink.png', title: 'Copo Long Drink' },
  ];

  const outrasEmbalagens = [
    { id: 1, image: 'products/sacoLanche.png', title: 'Saco para Pipoca' },
    { id: 2, image: 'products/caixaPizza.png', title: 'Caixa de Pizza' },
    { id: 3, image: 'products/caixaSalgado.png', title: 'Embalagem para Salgado' },
    { id: 4, image: 'products/sacolaPapel.png', title: 'Sacola de Papel' },
    { id: 5, image: 'products/potePet250.png', title: 'Pote PET 250ml' },
    { id: 6, image: 'products/sacoPaes.png', title: 'Saco para Pão' },
  ];

  return (
    <PreviewContainer ref={sectionRef} $isVisible={isVisible}>
      <PreviewTitle>
        <span>✨</span> VEJA UM POUCO DO NOSSO TRABALHO! <span>✨</span>
      </PreviewTitle>
      
      <SectionTitle>
        <CategoryTitle>
          <span>🥤</span> Copos e Potes <span>🍨</span>
        </CategoryTitle>
        <PreviewSubtitle>Produtos de alta qualidade para seu negócio</PreviewSubtitle>
      </SectionTitle>
      
      <div style={{ overflow: 'visible', width: '100%' }}>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={800}
          loop={true}
          allowTouchMove={true}
          style={{ overflow: 'visible' }}
        >
          {coposPotes.map((item, index) => (
            <SwiperSlide key={index} style={{ overflow: 'visible' }}>
              {({ isActive }) => (
                <Card $isActive={isActive}>
                  <CardImage src={item.image} alt={item.title} />
                  <CardTitle>{item.title}</CardTitle>
                </Card>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <SectionTitle style={{ marginTop: '4rem' }}>
        <CategoryTitle>
          <span>📦</span> Outras Embalagens <span>🎁</span>
        </CategoryTitle>
        <PreviewSubtitle>Soluções completas para todos os segmentos</PreviewSubtitle>
      </SectionTitle>
      
      <div style={{ overflow: 'visible', width: '100%' }}>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={800}
          loop={true}
          allowTouchMove={true}
          style={{ overflow: 'visible' }}
        >
          {outrasEmbalagens.map((item, index) => (
            <SwiperSlide key={index} style={{ overflow: 'visible' }}>
              {({ isActive }) => (
                <Card $isActive={isActive}>
                  <CardImage src={item.image} alt={item.title} />
                  <CardTitle>{item.title}</CardTitle>
                </Card>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </PreviewContainer>
  );
};