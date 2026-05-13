import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    overflow-y: scroll !important;
    overflow-x: hidden !important;
    height: 100%;
  }

  body {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    padding-top: 70px;
    overflow-y: hidden;
    overflow-x: hidden;
    min-height: 100%;
    position: relative;
    
    @media (min-width: 992px) {
      padding-top: 90px;
    }
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: visible !important;
  }

  /* Scrollbar customizada - só uma barra */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.gray};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.royal};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.vibrant};
  }

  /* Garantir que nenhum elemento crie scroll extra */
  .swiper,
  .swiper-wrapper,
  .swiper-slide {
    overflow: hidden !important;
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
    background: ${props => props.theme.colors.vibrant};
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
    background: ${props => props.theme.colors.vibrant} !important;
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