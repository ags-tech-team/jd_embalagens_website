import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import { CarouselContainer, HeroSlide, FadeBottom } from './styles';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface HeroCarouselProps {
  slides: Array<{
    image: string;
  }>;
}

export const HeroCarousel = ({ slides }: HeroCarouselProps) => {
  return (
    <CarouselContainer>
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        speed={1500}
        style={{ width: '100%', height: '100%' }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <HeroSlide $image={slide.image} />
          </SwiperSlide>
        ))}
      </Swiper>
      <FadeBottom />
    </CarouselContainer>
  );
};