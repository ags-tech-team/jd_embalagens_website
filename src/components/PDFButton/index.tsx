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

    // FORÇA ESTILOS INLINE NOS CARDS, IMAGENS E TEXTOS
    const cards = cloneElement.querySelectorAll('.product-card');
    cards.forEach(card => {
      (card as HTMLElement).style.background = '#ffffff';
      (card as HTMLElement).style.borderRadius = '20px';
      (card as HTMLElement).style.padding = '20px 16px';
      (card as HTMLElement).style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
      (card as HTMLElement).style.border = '1px solid #e0e0e0';
      (card as HTMLElement).style.textAlign = 'center';
      (card as HTMLElement).style.width = '100%';
      (card as HTMLElement).style.minHeight = '220px';
    });

    const imagesElements = cloneElement.querySelectorAll('.product-image');
    imagesElements.forEach(img => {
      (img as HTMLElement).style.width = '100%';
      (img as HTMLElement).style.maxWidth = '160px';
      (img as HTMLElement).style.height = '160px';
      (img as HTMLElement).style.margin = '0 auto 16px';
      (img as HTMLElement).style.display = 'block';
      (img as HTMLElement).style.objectFit = 'contain';
      (img as HTMLElement).style.backgroundColor = '#f8f8f8';
      (img as HTMLElement).style.borderRadius = '16px';
      (img as HTMLElement).style.padding = '12px';
    });

    const names = cloneElement.querySelectorAll('.product-name');
    names.forEach(name => {
      (name as HTMLElement).style.color = '#ffffff';
      (name as HTMLElement).style.backgroundColor = '#0072BC';
      (name as HTMLElement).style.fontSize = '14px';
      (name as HTMLElement).style.fontWeight = '600';
      (name as HTMLElement).style.padding = '10px 8px';
      (name as HTMLElement).style.borderRadius = '40px';
      (name as HTMLElement).style.margin = '8px 0 0';
      (name as HTMLElement).style.textAlign = 'center';
      (name as HTMLElement).style.display = 'block';
    });

    // ESTILOS CSS ADICIONAIS
    const style = document.createElement('style');
    style.textContent = `
      .products-container {
        padding: 30px !important;
        background: white !important;
        font-family: 'Poppins', Arial, sans-serif !important;
      }

      .products-title {
        font-size: 32px !important;
        text-align: center !important;
        margin-bottom: 12px !important;
        color: #0072BC !important;
        font-weight: bold !important;
      }

      .products-subtitle {
        font-size: 16px !important;
        text-align: center !important;
        margin-bottom: 40px !important;
        color: #666 !important;
      }

      .category-section {
        margin-bottom: 50px !important;
        page-break-inside: avoid !important;
      }

      .category-title {
        font-size: 22px !important;
        font-weight: bold !important;
        margin: 25px 0 25px !important;
        padding-left: 15px !important;
        border-left: 6px solid #00AEEF !important;
        color: #0072BC !important;
      }

      .product-grid {
        display: grid !important;
        grid-template-columns: repeat(4, 1fr) !important;
        gap: 24px !important;
      }

      @media (max-width: 768px) {
        .product-grid {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 16px !important;
        }
        .product-image {
          max-width: 120px !important;
          height: 120px !important;
        }
        .product-name {
          font-size: 12px !important;
          padding: 8px 6px !important;
        }
        .category-title {
          font-size: 18px !important;
        }
      }

      @media print {
        .product-card {
          break-inside: avoid !important;
          page-break-inside: avoid !important;
        }
        .product-name {
          background: #0072BC !important;
          color: white !important;
        }
      }
    `;
    cloneElement.prepend(style);

    console.log('✅ Gerando PDF - Cards Corrigidos');

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