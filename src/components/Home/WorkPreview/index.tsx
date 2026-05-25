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
    { id: 1, image: 'products_optimized/copoPP330.webp', title: 'Copo Personalizado' },
    { id: 2, image: 'products_optimized/copoStanley.webp', title: 'Copo Térmico' },
    { id: 3, image: 'products_optimized/poteIsopor.webp', title: 'Pote para Sorvete' },
    { id: 4, image: 'products_optimized/copoTwister.webp', title: 'Copo com Tampa' },
    { id: 5, image: 'products_optimized/copoDePapel.webp', title: 'Pote para Açaí' },
    { id: 6, image: 'products_optimized/copoLongDrink.webp', title: 'Copo Long Drink' },
  ];

  const outrasEmbalagens = [
    { id: 1, image: 'products_optimized/sacoLanche.webp', title: 'Saco para Pipoca' },
    { id: 2, image: 'products_optimized/caixaPizza.webp', title: 'Caixa de Pizza' },
    { id: 3, image: 'products_optimized/caixaSalgado.webp', title: 'Embalagem para Salgado' },
    { id: 4, image: 'products_optimized/sacolaPapel.webp', title: 'Sacola de Papel' },
    { id: 5, image: 'products_optimized/potePet250.webp', title: 'Pote PET 250ml' },
    { id: 6, image: 'products_optimized/sacoPaes.webp', title: 'Saco para Pão' },
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