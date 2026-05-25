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

    // Clona o elemento
    let cloneElement = originalElement.cloneNode(true) as HTMLElement;

    // Container fora da tela
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.left = '-9999px';
    container.style.top = '-9999px';
    container.style.width = '1200px';
    container.style.background = 'white';
    container.appendChild(cloneElement);
    document.body.appendChild(container);

    // Remove spans de emojis
    const emojiSpans = cloneElement.querySelectorAll('.products-title span, .category-title span');
    emojiSpans.forEach(span => span.remove());

    // Limpa textos dos títulos
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

    // Força estilos inline para garantir
    const allProductCards = cloneElement.querySelectorAll('.product-card');
    allProductCards.forEach((card) => {
      (card as HTMLElement).style.display = 'flex';
      (card as HTMLElement).style.flexDirection = 'column';
      (card as HTMLElement).style.alignItems = 'center';
      (card as HTMLElement).style.padding = '8px';
      (card as HTMLElement).style.margin = '4px';
      (card as HTMLElement).style.borderRadius = '12px';
      (card as HTMLElement).style.backgroundColor = '#ffffff';
    });

    const allProductImages = cloneElement.querySelectorAll('.product-image');
    allProductImages.forEach((img) => {
      (img as HTMLElement).style.width = '100%';
      (img as HTMLElement).style.maxWidth = '100px';
      (img as HTMLElement).style.height = 'auto';
      (img as HTMLElement).style.aspectRatio = '1/1';
      (img as HTMLElement).style.objectFit = 'contain';
      (img as HTMLElement).style.display = 'block';
      (img as HTMLElement).style.margin = '0 auto';
    });

    const allProductNames = cloneElement.querySelectorAll('.product-name');
    allProductNames.forEach((name) => {
      (name as HTMLElement).style.fontSize = '0.7rem';
      (name as HTMLElement).style.padding = '8px 4px';
      (name as HTMLElement).style.textAlign = 'center';
      (name as HTMLElement).style.wordBreak = 'break-word';
    });

    // Estilos CSS robustos
    const style = document.createElement('style');
    style.textContent = `
      /* RESET */
      .products-container {
        padding: 20px !important;
        background: white !important;
        width: 100% !important;
      }

      /* TÍTULOS */
      .products-title {
        font-size: 24px !important;
        text-align: center !important;
        margin-bottom: 8px !important;
        color: #0072BC !important;
        font-weight: bold !important;
      }

      .products-subtitle {
        font-size: 14px !important;
        text-align: center !important;
        margin-bottom: 24px !important;
        color: #666 !important;
      }

      .category-section {
        margin-bottom: 32px !important;
        page-break-inside: avoid !important;
      }

      .category-title {
        font-size: 18px !important;
        font-weight: bold !important;
        margin: 16px 0 16px !important;
        padding-left: 12px !important;
        border-left: 4px solid #00AEEF !important;
        color: #0072BC !important;
      }

      /* GRID */
      .product-grid {
        display: grid !important;
        grid-template-columns: repeat(4, 1fr) !important;
        gap: 16px !important;
      }

      /* CARDS */
      .product-card {
        background: white !important;
        border-radius: 12px !important;
        padding: 12px !important;
        text-align: center !important;
        border: 1px solid #e0e0e0 !important;
        page-break-inside: avoid !important;
      }

      /* IMAGENS */
      .product-image {
        width: 100% !important;
        max-width: 100px !important;
        height: 100px !important;
        margin: 0 auto !important;
        display: block !important;
        object-fit: contain !important;
      }

      /* NOMES */
      .product-name {
        font-size: 12px !important;
        padding: 8px 4px !important;
        color: #333 !important;
        text-align: center !important;
        line-height: 1.3 !important;
      }

      /* MOBILE */
      @media (max-width: 768px) {
        .product-grid {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 12px !important;
        }
        .product-image {
          height: 80px !important;
          max-width: 80px !important;
        }
        .product-name {
          font-size: 10px !important;
        }
        .category-title {
          font-size: 16px !important;
        }
        .products-title {
          font-size: 20px !important;
        }
      }

      /* IMPRESSÃO */
      @media print {
        body {
          background: white !important;
        }
        .product-grid {
          grid-template-columns: repeat(4, 1fr) !important;
        }
        .product-card {
          border: 1px solid #ddd !important;
          page-break-inside: avoid !important;
        }
        .product-image {
          height: 90px !important;
        }
      }
    `;
    cloneElement.prepend(style);

    console.log('✅ Gerando PDF - Versão Corrigida');

    await new Promise(r => setTimeout(r, 500));

    const opt = {
      margin: [0.3, 0.3, 0.3, 0.3],
      filename: fileName,
      image: { type: 'jpeg', quality: 0.95 },
      html2canvas: { scale: 2, useCORS: true, logging: false },
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