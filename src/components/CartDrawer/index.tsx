import { useCart } from '../../contexts/CartContext';
import { 
  DrawerOverlay, 
  DrawerContainer, 
  DrawerHeader, 
  DrawerTitle, 
  CloseButton,
  DrawerContent,
  CartItemCard,
  CartItemImage,
  CartItemInfo,
  CartItemName,
  RemoveButton,
  DrawerFooter,
  TotalText,
  WhatsButton,
  EmptyCart
} from './styles';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const { cart, removeFromCart, clearCart } = useCart();

  const handleWhatsApp = () => {
    const itemsList = cart.map(item => `- ${item.name}`).join('\n');
    const totalItems = cart.length;
    
    const message = `*PEDIDO JD Color Copo & Pack Clean*

*Produtos selecionados:*
${itemsList}

*Total de itens:* ${totalItems} ${totalItems === 1 ? 'produto' : 'produtos'}

*Cliente:* via site JD Color Copo & Pack Clean

*Observações:* Gostaria de receber um orçamento para estes produtos.`;

    const phoneNumber = '554898318911';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    clearCart();
    onClose();
  };

  return (
    <DrawerOverlay $isOpen={isOpen} onClick={onClose}>
      <DrawerContainer $isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
        <DrawerHeader>
          <DrawerTitle>🛒 Meu Carrinho</DrawerTitle>
          <CloseButton onClick={onClose}>✕</CloseButton>
        </DrawerHeader>

        <DrawerContent>
          {cart.length === 0 ? (
            <EmptyCart>
              <span>🛒</span>
              <p>Seu carrinho está vazio</p>
              <p>Adicione produtos clicando neles!</p>
            </EmptyCart>
          ) : (
            <>
              {cart.map((item) => (
                <CartItemCard key={item.id}>
                  <CartItemImage src={item.image} alt={item.name} />
                  <CartItemInfo>
                    <CartItemName>{item.name}</CartItemName>
                  </CartItemInfo>
                  <RemoveButton onClick={() => removeFromCart(item.id)}>
                    🗑️
                  </RemoveButton>
                </CartItemCard>
              ))}
            </>
          )}
        </DrawerContent>

        {cart.length > 0 && (
          <DrawerFooter>
            <TotalText>Total: {cart.length} {cart.length === 1 ? 'produto' : 'produtos'}</TotalText>
            <WhatsButton onClick={handleWhatsApp}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="white">
                <path d="M12.032 2.5c-5.252 0-9.516 4.264-9.516 9.516 0 1.677.437 3.31 1.263 4.737L2.5 21.5l4.844-1.278c1.38.795 2.98 1.229 4.688 1.229 5.252 0 9.516-4.264 9.516-9.516S17.284 2.5 12.032 2.5zm0 17.516c-1.542 0-3.034-.424-4.324-1.21l-.31-.184-2.874.758.766-2.806-.202-.322c-.84-1.35-1.283-2.887-1.283-4.458 0-4.42 3.595-8.014 8.014-8.014 4.418 0 8.013 3.595 8.013 8.014s-3.595 8.014-8.013 8.014z"/>
              </svg>
              FAZER ORÇAMENTO
            </WhatsButton>
          </DrawerFooter>
        )}
      </DrawerContainer>
    </DrawerOverlay>
  );
};