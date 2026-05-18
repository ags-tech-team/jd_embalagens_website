import { useEffect } from 'react';
import { ModalOverlay, ModalContainer, ModalImage, ModalContent, ModalTitle, ModalButton, CloseButton } from './styles';
import { useCart } from '../../../contexts/CartContext';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: { id: number; name: string; image: string } | null;
}

export const ProductModal = ({ isOpen, onClose, product }: ProductModalProps) => {
  const { addToCart } = useCart();

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

  const handleAddToCart = () => {
    addToCart({ id: product.id, name: product.name, image: product.image });
    onClose();
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>✕</CloseButton>
        <ModalImage src={product.image} alt={product.name} />
        <ModalContent>
          <ModalTitle>{product.name}</ModalTitle>
          <ModalButton onClick={handleAddToCart}>
            🛒 ADICIONAR AO CARRINHO
          </ModalButton>
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};