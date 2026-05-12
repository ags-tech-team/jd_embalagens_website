import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { SliderContainer, SlideImage, SlideOverlay, SlideTitle } from './styles';

import 'swiper/css';
import 'swiper/css/pagination';

export const ProductSlider = () => {
  const images = [
    { id: 1, src: 'https://placehold.co/600x500/0072BC/white/png?text=Copo+PP+330ml', title: 'Copo PP 330ml' },
    { id: 2, src: 'https://placehold.co/600x500/00AEEF/white/png?text=Copo+PP+440ml', title: 'Copo PP 440ml' },
    { id: 3, src: 'https://placehold.co/600x500/0B1F35/white/png?text=Copo+PP+550ml', title: 'Copo PP 550ml' },
    { id: 4, src: 'https://placehold.co/600x500/0072BC/white/png?text=Copo+PET+250ml', title: 'Copo PET 250ml' },
    { id: 5, src: 'https://placehold.co/600x500/00AEEF/white/png?text=Copo+PET+300ml', title: 'Copo PET 300ml' },
    { id: 6, src: 'https://placehold.co/600x500/0B1F35/white/png?text=Pote+PET+250ml', title: 'Pote PET 250ml' }
  ];

  return (
    <SliderContainer>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 3 }
        }}
      >
        {images.map((img) => (
          <SwiperSlide key={img.id}>
            <SlideImage src={img.src} alt={img.title} />
            <SlideOverlay>
              <SlideTitle>{img.title}</SlideTitle>
            </SlideOverlay>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderContainer>
  );
};