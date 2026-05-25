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
    container.style.width = '1200px';
    container.style.background = '#ffffff';
    container.appendChild(cloneElement);
    document.body.appendChild(container);

    // Remove emojis
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

    // ESTILOS DO PDF - VERSÃO FINAL
    const style = document.createElement('style');
    style.textContent = `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      .products-container {
        padding: 20px !important;
        background: white !important;
        font-family: 'Poppins', Arial, sans-serif !important;
      }

      /* TÍTULOS */
      .products-title {
        font-size: 28px !important;
        text-align: center !important;
        margin-bottom: 10px !important;
        color: #0072BC !important;
        font-weight: bold !important;
      }

      .products-subtitle {
        font-size: 14px !important;
        text-align: center !important;
        margin-bottom: 30px !important;
        color: #555 !important;
      }

      .category-section {
        margin-bottom: 40px !important;
        page-break-inside: avoid !important;
      }

      .category-title {
        font-size: 20px !important;
        font-weight: bold !important;
        margin: 20px 0 20px !important;
        padding-left: 15px !important;
        border-left: 5px solid #00AEEF !important;
        color: #0072BC !important;
      }

      /* GRID - Desktop */
      .product-grid {
        display: grid !important;
        grid-template-columns: repeat(4, 1fr) !important;
        gap: 20px !important;
      }

      /* CARDS */
      .product-card {
        background: white !important;
        border-radius: 16px !important;
        padding: 16px !important;
        text-align: center !important;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1) !important;
        border: 1px solid #e8e8e8 !important;
        page-break-inside: avoid !important;
        transition: none !important;
      }

      /* IMAGENS */
      .product-image {
        width: 100% !important;
        max-width: 140px !important;
        height: 140px !important;
        margin: 0 auto 12px !important;
        display: block !important;
        object-fit: contain !important;
        background: #f8f8f8 !important;
        border-radius: 12px !important;
        padding: 8px !important;
      }

      /* NOMES DOS PRODUTOS - BRANCO CINZA CLARO */
      .product-name {
        font-size: 13px !important;
        padding: 8px 4px !important;
        color: #333333 !important;
        text-align: center !important;
        line-height: 1.4 !important;
        font-weight: 500 !important;
        background: transparent !important;
      }

      /* MOBILE */
      @media (max-width: 768px) {
        .product-grid {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 15px !important;
        }
        .product-image {
          max-width: 100px !important;
          height: 100px !important;
        }
        .product-name {
          font-size: 11px !important;
        }
        .category-title {
          font-size: 18px !important;
        }
        .products-title {
          font-size: 22px !important;
        }
      }

      /* IMPRESSÃO */
      @media print {
        body, .products-container {
          background: white !important;
          padding: 0 !important;
        }
        .product-grid {
          grid-template-columns: repeat(4, 1fr) !important;
          gap: 15px !important;
        }
        .product-card {
          box-shadow: none !important;
          border: 1px solid #ddd !important;
          page-break-inside: avoid !important;
        }
        .product-image {
          height: 120px !important;
        }
        .product-name {
          color: #222 !important;
        }
      }
    `;
    cloneElement.prepend(style);

    // FORÇA ESTILOS INLINE NOS CARDS
    const cards = cloneElement.querySelectorAll('.product-card');
    cards.forEach(card => {
      (card as HTMLElement).style.background = '#ffffff';
      (card as HTMLElement).style.borderRadius = '16px';
      (card as HTMLElement).style.padding = '16px';
      (card as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
    });

    const imagesElements = cloneElement.querySelectorAll('.product-image');
    imagesElements.forEach(img => {
      (img as HTMLElement).style.maxWidth = '140px';
      (img as HTMLElement).style.height = '140px';
      (img as HTMLElement).style.margin = '0 auto';
      (img as HTMLElement).style.objectFit = 'contain';
    });

    const names = cloneElement.querySelectorAll('.product-name');
    names.forEach(name => {
      (name as HTMLElement).style.color = '#333333';
      (name as HTMLElement).style.fontSize = '13px';
      (name as HTMLElement).style.fontWeight = '500';
    });

    console.log('✅ Gerando PDF - Versão Final Estilizada');

    await new Promise(r => setTimeout(r, 500));

    const opt = {
      margin: [0.3, 0.3, 0.3, 0.3],
      filename: fileName,
      image: { type: 'jpeg', quality: 0.95 },
      html2canvas: { scale: 2.5, useCORS: true, logging: false, backgroundColor: '#ffffff' },
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