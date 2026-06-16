import styled from 'styled-components';

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;

  @media (max-width: 768px) {
    aspect-ratio: unset;
    height: auto;
  }
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;

  @media (max-width: 768px) {
    height: auto;
    object-fit: contain;
  }
`;

export const FadeBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 150px;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    ${props => props.theme.colors.background} 100%
  );
  z-index: 10;
  pointer-events: none;
`;

export const HeroContent = styled.div`
  text-align: center;
  color: #ffffff !important;
  max-width: 90%;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  backdrop-filter: blur(3px);
  animation: fadeInUp 1s ease-out;
  position: relative;
  z-index: 2;

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    font-weight: bold;
    color: #ffffff !important;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 0, 0, 0.3);

    @media (min-width: 768px) {
      font-size: 3rem;
    }

    @media (min-width: 1024px) {
      font-size: 3.5rem;
    }
  }

  p {
    font-size: 1rem;
    color: #ffffff !important;
    text-shadow: 0 1px 8px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 0, 0, 0.3);

    @media (min-width: 768px) {
      font-size: 1.2rem;
    }

    @media (min-width: 1024px) {
      font-size: 1.3rem;
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;