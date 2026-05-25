import { useState, useEffect } from 'react';
import { 
  ProductsContainer, 
  ProductsTitle, 
  ProductsSubtitle,
  CategorySection,
  CategoryTitle,
  ProductGrid,
  ProductCard,
  ProductImage,
  ProductName,
  ProductsWrapper
} from './styles';
import { productsData } from './data';
import { ProductModal } from '../../components/Products/ProductModal';
import { PDFButton } from '../../components/PDFButton';

export const Products = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{ id: number; name: string; image: string } | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const handleProductClick = (product: { id: number; name: string; image: string }) => {
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
    { key: 'sacosPapel', title: productsData.sacosPapel.title, icon: productsData.sacosPapel.icon, items: productsData.sacosPapel.items },
    { key: 'caixas', title: productsData.caixas.title, icon: productsData.caixas.icon, items: productsData.caixas.items },
    { key: 'isopor', title: productsData.isopor.title, icon: productsData.isopor.icon, items: productsData.isopor.items },
    { key: 'limpeza', title: productsData.limpeza.title, icon: productsData.limpeza.icon, items: productsData.limpeza.items },
    { key: 'outros', title: productsData.outros.title, icon: productsData.outros.icon, items: productsData.outros.items },
    { key: 'brindes', title: productsData.brindes.title, icon: productsData.brindes.icon, items: productsData.brindes.items }
  ];

  return (
    <>
      <ProductsWrapper>
        <ProductsContainer>
          <ProductsTitle className="products-title">
            <span>📦</span> CATÁLOGO EMBALAGENS <span>📦</span>
          </ProductsTitle>
          <ProductsSubtitle>
            Encontre a embalagem ideal para o seu negócio
          </ProductsSubtitle>

          {categories.map((category) => (
            <CategorySection key={category.key} className="category-section">
              <CategoryTitle className="category-title">
                <span>{category.icon}</span> {category.title}
              </CategoryTitle>
              
              <ProductGrid>
                {category.items.map((product) => (
                  <ProductCard key={product.id} className="product-card" onClick={() => handleProductClick(product)}>
                    <ProductImage 
                      className="product-image"
                      src={product.image} 
                      alt={product.name} 
                      fetchPriority="high" 
                      decoding="sync" 
                    />
                    <ProductName className="product-name">{product.name}</ProductName>
                  </ProductCard>
                ))}
              </ProductGrid>
            </CategorySection>
          ))}
        </ProductsContainer>
      </ProductsWrapper>
      
      {/* Agora passamos categories diretamente, sem elementId */}
      <PDFButton 
        categories={categories} 
        fileName="catalogo-jd-color-copo-&-pack-clean.pdf" 
      />
      
      <ProductModal 
        isOpen={modalOpen}
        onClose={closeModal}
        product={selectedProduct}
      />
    </>
  );
};