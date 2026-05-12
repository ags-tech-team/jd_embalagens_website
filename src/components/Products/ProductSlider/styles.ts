import styled from 'styled-components';

export const SliderContainer = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  
  .swiper {
    padding: 1rem 0 3rem;
  }
  
  .swiper-pagination-bullet {
    background: ${props => props.theme.colors.royal};
  }
  
  .swiper-pagination-bullet-active {
    background: ${props => props.theme.colors.vibrant};
  }
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: 16px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }
  
  @media (min-width: 768px) {
    height: 320px;
  }
`;

export const SlideOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  padding: 2rem 1rem 1rem;
  border-radius: 0 0 16px 16px;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  ${SlideImage}:hover + &, &:hover {
    opacity: 1;
  }
`;

export const SlideTitle = styled.p`
  color: white;
  font-weight: 600;
  text-align: center;
  font-size: 0.9rem;
  
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;