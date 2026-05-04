// styles/global.ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.text};
    padding-top: 0;
    overflow-x: hidden;
  }

  html {
    scroll-behavior: smooth;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }
  
  .swiper-slide {
    overflow: hidden;
  }
  
  .swiper-pagination {
    bottom: 80px !important;
    z-index: 20 !important;
  }
  
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background: #FFFFFF;
    opacity: 0.7;
  }
  
  .swiper-pagination-bullet-active {
    background: #00AEEF;
    opacity: 1;
    width: 20px;
    border-radius: 5px;
  }
  
  .swiper-button-next,
  .swiper-button-prev {
    width: 42px !important;
    height: 42px !important;
    background: rgba(0, 0, 0, 0.5) !important;
    border-radius: 50% !important;
    transition: all 0.3s ease !important;
    z-index: 20 !important;
  }
  
  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    background: #00AEEF !important;
    transform: scale(1.05);
  }
  
  .swiper-button-next svg,
  .swiper-button-prev svg {
    filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.3));
    width: 22px !important;
    height: 22px !important;
  }
  
  .swiper-button-next path,
  .swiper-button-prev path {
    fill: #FFFFFF !important;
  }
  
  .swiper-button-next:hover path,
  .swiper-button-prev:hover path {
    fill: #FFFFFF !important;
  }
`;