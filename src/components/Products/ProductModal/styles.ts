import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(5px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.3s ease;
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

export const ModalContainer = styled.div`
  background: ${props => props.theme.colors.cardBg};
  border-radius: 24px;
  max-width: 500px;
  width: 90%;
  overflow: hidden;
  position: relative;
  animation: slideUp 0.4s ease;
  
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(0, 0, 0, 0.8);
    transform: scale(1.05);
  }
`;

export const ModalImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  
  @media (min-width: 768px) {
    height: 400px;
  }
`;

export const ModalContent = styled.div`
  padding: 1.5rem;
  text-align: center;
`;

export const ModalTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${props => props.theme.colors.royal};
  margin-bottom: 1.5rem;
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const ModalButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #25D366, #128C7E);
  border: none;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1rem;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  
  svg {
    width: 20px;
    height: 20px;
  }
  
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);
  }
  
  &:active {
    transform: scale(0.98);
  }
`;