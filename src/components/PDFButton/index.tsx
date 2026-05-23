import html2pdf from 'html2pdf.js';
import { PDFButtonContainer, StyledPDFButton } from './styles';

interface PDFButtonProps {
  elementId: string;
  fileName?: string;
}

export const PDFButton = ({ elementId, fileName = 'catalogo-embalagens.pdf' }: PDFButtonProps) => {
  const generatePDF = async () => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const cloneElement = element.cloneNode(true) as HTMLElement;

    // Remove spans de emojis
    const emojiSpans = cloneElement.querySelectorAll('.products-title span, .category-title span');
    emojiSpans.forEach(span => span.remove());

    // Limpa texto dos títulos
    const cleanText = (text: string) => {
      return text.replace(/[^a-zA-ZÀ-ÖØ-öø-ÿ0-9\s\-']/g, '').trim();
    };

    const productTitle = cloneElement.querySelector('.products-title');
    if (productTitle) productTitle.textContent = cleanText(productTitle.textContent || '');

    const categoryTitles = cloneElement.querySelectorAll('.category-title');
    categoryTitles.forEach(title => {
      title.textContent = cleanText(title.textContent || '');
    });

    // Esconde elementos desnecessários
    const buttons = cloneElement.querySelectorAll('button');
    buttons.forEach(btn => {
      (btn as HTMLElement).style.display = 'none';
    });

    // Corrige URLs das imagens
    const images = cloneElement.querySelectorAll('img');
    await Promise.all(Array.from(images).map(img => {
      const src = img.getAttribute('src');
      if (src && !src.startsWith('http') && !src.startsWith('data:')) {
        img.src = window.location.origin + '/' + src;
      }
      return new Promise(resolve => {
        if (img.complete) resolve(true);
        else {
          img.onload = () => resolve(true);
          img.onerror = () => resolve(false);
        }
      });
    }));

    // Adiciona estilos de impressão no clone
    const style = document.createElement('style');
    style.textContent = `
      /* Reset para PDF */
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
      .products-container {
        padding: 0.4rem !important;
      }
      
      .products-title {
        font-size: 1.3rem !important;
        text-align: center !important;
        margin-bottom: 0.3rem !important;
        color: #0072BC !important;
      }
      
      .products-subtitle {
        font-size: 0.8rem !important;
        text-align: center !important;
        margin-bottom: 0.8rem !important;
        opacity: 0.7 !important;
      }
      
      /* Categorias - permite quebra natural */
      .category-section {
        page-break-inside: avoid;
        break-inside: avoid;
        margin-bottom: 1rem !important;
      }
      
      /* Margem extra para primeira categoria da página */
      .category-section:first-child {
        margin-top: 0.5rem !important;
      }
      
      .category-title {
        font-size: 1rem !important;
        margin-top: 0.3rem !important;
        margin-bottom: 0.4rem !important;
        padding-left: 0.5rem !important;
        border-left: 3px solid #00AEEF !important;
        color: #0072BC !important;
      }
      
      /* Grid responsivo para PDF */
      .product-grid {
        display: grid !important;
        grid-template-columns: repeat(5, 1fr) !important;
        gap: 0.4rem !important;
      }
      
      /* Cards compactos */
      .product-card {
        padding: 0.25rem !important;
        border-radius: 6px !important;
        box-shadow: 0 1px 3px rgba(0,0,0,0.08) !important;
        page-break-inside: avoid !important;
        break-inside: avoid !important;
        min-height: auto !important;
      }
      
      .product-image {
        width: 100% !important;
        height: auto !important;
        max-height: 70px !important;
        aspect-ratio: 1 / 1 !important;
        object-fit: cover !important;
        border-radius: 6px !important;
      }
      
      .product-name {
        font-size: 0.6rem !important;
        padding: 0.15rem 0.1rem !important;
        text-align: center !important;
        word-break: keep-all !important;
        white-space: normal !important;
        line-height: 1.2 !important;
      }
      
      /* Ajuste para telas menores */
      @media (max-width: 600px) {
        .product-grid {
          grid-template-columns: repeat(3, 1fr) !important;
        }
      }
    `;
    cloneElement.prepend(style);

    await new Promise(r => setTimeout(r, 300));

    const opt = {
      margin: [0.25, 0.25, 0.25, 0.25],
      filename: fileName,
      image: { type: 'jpeg', quality: 0.85 },
      html2canvas: { scale: 1.2, useCORS: true, logging: false, allowTaint: false },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    await html2pdf().set(opt as any).from(cloneElement).save();
  };

  return (
    <PDFButtonContainer>
      <StyledPDFButton onClick={generatePDF}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v2c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 12h-8c-.6 0-1-.4-1-1 0-2.2 1.8-4 4-4h2c2.2 0 4 1.8 4 4 0 .6-.4 1-1 1z"/>
        </svg>
        Gerar Catálogo em PDF
      </StyledPDFButton>
    </PDFButtonContainer>
  );
};