import { useEffect } from 'react';
import { ModalOverlay, ModalContainer, ModalImage, ModalContent, ModalTitle, ModalButton, CloseButton } from './styles';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: { name: string; image: string } | null;
}

export const ProductModal = ({ isOpen, onClose, product }: ProductModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  const handleWhatsApp = () => {
    const message = `Olá! Vim pelo site de vocês e gostaria de fazer um orçamento para o produto: *${product.name}*.`;
    const phoneNumber = '554898318911';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>✕</CloseButton>
        <ModalImage src={product.image} alt={product.name} />
        <ModalContent>
          <ModalTitle>{product.name}</ModalTitle>
          <ModalButton onClick={handleWhatsApp}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="white">
              <path d="M12.032 2.5c-5.252 0-9.516 4.264-9.516 9.516 0 1.677.437 3.31 1.263 4.737L2.5 21.5l4.844-1.278c1.38.795 2.98 1.229 4.688 1.229 5.252 0 9.516-4.264 9.516-9.516S17.284 2.5 12.032 2.5zm0 17.516c-1.542 0-3.034-.424-4.324-1.21l-.31-.184-2.874.758.766-2.806-.202-.322c-.84-1.35-1.283-2.887-1.283-4.458 0-4.42 3.595-8.014 8.014-8.014 4.418 0 8.013 3.595 8.013 8.014s-3.595 8.014-8.013 8.014zm4.392-5.998c-.233-.117-1.382-.682-1.595-.76-.214-.078-.37-.117-.526.117-.156.234-.604.76-.74.917-.137.156-.273.176-.506.058-.233-.117-.986-.364-1.876-1.16-.694-.62-1.162-1.386-1.3-1.62-.136-.234-.015-.36.103-.478.104-.104.234-.273.35-.41.117-.136.156-.234.234-.39.078-.156.04-.293-.02-.41-.058-.117-.525-1.267-.72-1.734-.19-.457-.383-.39-.525-.39-.137 0-.293-.02-.45-.02-.156 0-.41.058-.624.293-.215.234-.818.8-.818 1.95 0 1.15.836 2.26.953 2.417.117.156 1.647 2.516 3.992 3.527.558.24.994.383 1.334.49.56.176 1.07.15 1.474.09.45-.06 1.382-.564 1.576-1.11.195-.546.195-1.015.136-1.11-.058-.097-.215-.156-.45-.273z"/>
            </svg>
            FAÇA SEU ORÇAMENTO
          </ModalButton>
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};