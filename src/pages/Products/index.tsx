import { useState } from 'react';
import { 
  ProductsContainer, 
  ProductsTitle, 
  ProductsSubtitle,
  CategorySection,
  CategoryTitle,
  ProductGrid,
  ProductCard,
  ProductImage,
  ProductName
} from './styles';
import { productsData } from './data';
import { ProductModal } from '../../components/Products/ProductModal';

export const Products = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{ name: string; image: string } | null>(null);

  const handleProductClick = (product: { name: string; image: string }) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  const categories = [
    { key: 'copos', title: productsData.copos.title, icon: productsData.copos.icon, items: productsData.copos.items },
    { key: 'potes', title: productsData.potes.title, icon: productsData.potes.icon, items: productsData.potes.items },
    { key: 'sacolas', title: productsData.sacolas.title, icon: productsData.sacolas.icon, items: productsData.sacolas.items },
    { key: 'outros', title: productsData.outros.title, icon: productsData.outros.icon, items: productsData.outros.items }
  ];

  return (
    <>
      <ProductsContainer>
        <ProductsTitle>
          <span>📦</span> CATÁLOGO EMBALAGENS <span>📦</span>
        </ProductsTitle>
        <ProductsSubtitle>
          Encontre a embalagem ideal para o seu negócio
        </ProductsSubtitle>

        {categories.map((category) => (
          <CategorySection key={category.key}>
            <CategoryTitle>
              <span>{category.icon}</span> {category.title}
            </CategoryTitle>
            
            <ProductGrid>
              {category.items.map((product) => (
                <ProductCard key={product.id} onClick={() => handleProductClick(product)}>
                  <ProductImage src={product.image} alt={product.name} />
                  <ProductName>{product.name}</ProductName>
                </ProductCard>
              ))}
            </ProductGrid>
          </CategorySection>
        ))}
      </ProductsContainer>

      <ProductModal 
        isOpen={modalOpen}
        onClose={closeModal}
        product={selectedProduct}
      />
    </>
  );
};