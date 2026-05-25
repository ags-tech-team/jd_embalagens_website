import html2pdf from 'html2pdf.js';
import { PDFButtonContainer, StyledPDFButton } from './styles';

interface PDFButtonProps {
  elementId: string;
  fileName?: string;
}

export const PDFButton = ({ elementId, fileName = 'catalogo-embalagens.pdf' }: PDFButtonProps) => {
  const generatePDF = async () => {
    const originalElement = document.getElementById(elementId);
    if (!originalElement) return;

    let cloneElement = originalElement.cloneNode(true) as HTMLElement;

    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.left = '-9999px';
    container.style.top = '-9999px';
    container.style.width = '1000px';
    container.appendChild(cloneElement);
    document.body.appendChild(container);

    // Remove emojis e ícones
    const emojiSpans = cloneElement.querySelectorAll('.products-title span, .category-title span');
    emojiSpans.forEach(span => span.remove());

    // Limpa textos
    const cleanText = (text: string) => {
      return text.replace(/[^a-zA-ZÀ-ÖØ-öø-ÿ0-9\s\-']/g, '').trim();
    };

    const productTitle = cloneElement.querySelector('.products-title');
    if (productTitle) productTitle.textContent = cleanText(productTitle.textContent || '');

    const categoryTitles = cloneElement.querySelectorAll('.category-title');
    categoryTitles.forEach(title => {
      title.textContent = cleanText(title.textContent || '');
    });

    // Esconde botões
    const buttons = cloneElement.querySelectorAll('button');
    buttons.forEach(btn => (btn as HTMLElement).style.display = 'none');

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

    // Estilos do PDF - do zero
    const style = document.createElement('style');
    style.textContent = `
      /* Reset */
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      /* Container principal */
      .products-container {
        padding: 0.5rem !important;
        background: white !important;
      }

      /* Títulos */
      .products-title {
        font-size: 1.5rem !important;
        text-align: center !important;
        margin-bottom: 0.5rem !important;
        color: #0072BC !important;
        font-weight: bold !important;
      }

      .products-subtitle {
        font-size: 0.85rem !important;
        text-align: center !important;
        margin-bottom: 1rem !important;
        color: #666 !important;
      }

      /* Categorias */
      .category-section {
        margin-bottom: 1.5rem !important;
        page-break-inside: avoid !important;
        break-inside: avoid !important;
      }

      .category-title {
        font-size: 1.1rem !important;
        font-weight: bold !important;
        margin: 0.5rem 0 0.8rem !important;
        padding-left: 0.5rem !important;
        border-left: 4px solid #00AEEF !important;
        color: #0072BC !important;
      }

      /* Grid de produtos - Desktop (PDF) */
      .product-grid {
        display: grid !important;
        grid-template-columns: repeat(4, 1fr) !important;
        gap: 1rem !important;
      }

      /* Cards */
      .product-card {
        background: white !important;
        border-radius: 10px !important;
        padding: 0.5rem !important;
        text-align: center !important;
        page-break-inside: avoid !important;
        break-inside: avoid !important;
        border: 1px solid #eee !important;
      }

      /* Imagens - SEM ACHATAMENTO */
      .product-image {
        width: 100% !important;
        height: auto !important;
        max-width: 120px !important;
        margin: 0 auto !important;
        display: block !important;
        object-fit: contain !important;
      }

      /* Nome do produto */
      .product-name {
        font-size: 0.7rem !important;
        padding: 0.5rem 0.2rem !important;
        color: #333 !important;
        text-align: center !important;
        word-break: break-word !important;
        line-height: 1.3 !important;
      }

      /* Rodapé com versão */
      .pdf-footer {
        text-align: center;
        font-size: 0.5rem;
        color: #ccc;
        margin-top: 1rem;
        padding-top: 0.5rem;
        border-top: 1px solid #eee;
      }

      /* RESPONSIVO PARA MOBILE (PDF) */
      @media (max-width: 768px) {
        .product-grid {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 0.75rem !important;
        }
        .product-image {
          max-width: 100px !important;
        }
        .product-name {
          font-size: 0.65rem !important;
        }
        .category-title {
          font-size: 1rem !important;
        }
      }

      /* IMPRESSÃO */
      @media print {
        .product-grid {
          grid-template-columns: repeat(4, 1fr) !important;
        }
        .product-image {
          max-width: 100px !important;
        }
        .product-card {
          border: 1px solid #ddd !important;
          page-break-inside: avoid !important;
        }
      }
    `;
    cloneElement.prepend(style);

    // Adiciona rodapé com versão
    const footer = document.createElement('div');
    footer.className = 'pdf-footer';
    footer.innerHTML = 'JD Color Copo & Pack Clean - Catálogo de Produtos';
    cloneElement.appendChild(footer);

    console.log('✅ Gerando PDF - Versão Otimizada');

    await new Promise(r => setTimeout(r, 300));

    const opt = {
      margin: [0.3, 0.3, 0.3, 0.3],
      filename: fileName,
      image: { type: 'jpeg', quality: 0.9 },
      html2canvas: { scale: 2, useCORS: true, logging: false, allowTaint: false },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    await html2pdf().set(opt as any).from(cloneElement).save();

    document.body.removeChild(container);
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