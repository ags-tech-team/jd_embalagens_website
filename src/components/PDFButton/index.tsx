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

    const emojiSpans = cloneElement.querySelectorAll('.products-title span, .category-title span');
    emojiSpans.forEach(span => span.remove());

    const cleanText = (text: string) => {
      return text.replace(/[^a-zA-ZÀ-ÖØ-öø-ÿ0-9\s\-']/g, '').trim();
    };
    const productTitle = cloneElement.querySelector('.products-title');
    if (productTitle) productTitle.textContent = cleanText(productTitle.textContent || '');
    const categoryTitles = cloneElement.querySelectorAll('.category-title');
    categoryTitles.forEach(title => {
      title.textContent = cleanText(title.textContent || '');
    });

    const buttons = cloneElement.querySelectorAll('button');
    buttons.forEach(btn => (btn as HTMLElement).style.display = 'none');

    const images = cloneElement.querySelectorAll('img');
    await Promise.all(Array.from(images).map(img => {
      const src = img.getAttribute('src');
      if (src && !src.startsWith('http') && !src.startsWith('data:')) {
        img.src = window.location.origin + '/' + src;
      }
      return new Promise(resolve => {
        if (img.complete) resolve(true);
        else { img.onload = () => resolve(true); img.onerror = () => resolve(false); }
      });
    }));

    const style = document.createElement('style');
    style.textContent = `
    * { margin: 0; padding: 0; box-sizing: border-box; }
    .products-container { padding: 0.4rem !important; }
    .products-title { font-size: 1.4rem !important; text-align: center !important; margin-bottom: 0.4rem !important; color: #0072BC !important; }
    .products-subtitle { font-size: 0.8rem !important; text-align: center !important; margin-bottom: 0.8rem !important; }
    .category-section { page-break-inside: avoid; break-inside: avoid; margin-bottom: 1rem !important; }
    .category-title { font-size: 1rem !important; margin: 0.3rem 0 0.5rem !important; padding-left: 0.5rem !important; border-left: 3px solid #00AEEF !important; }
    
    .product-grid { 
      display: grid !important; 
      grid-template-columns: repeat(4, 1fr) !important; 
      gap: 0.8rem !important; 
    }
    
    .product-card { 
      padding: 0.5rem !important; 
      border-radius: 8px !important; 
      box-shadow: none !important; 
      page-break-inside: avoid !important; 
      break-inside: avoid !important; 
      min-height: auto !important;
      display: flex !important;
      flex-direction: column !important;
      align-items: center !important;
      background: white !important;
    }
    
    /* MUDANÇA AQUI: object-fit: contain para não achatar + altura maior */
    .product-image { 
      width: 100% !important; 
      height: 120px !important;
      aspect-ratio: 1 / 1 !important;
      object-fit: contain !important;
      border-radius: 8px !important;
      background: #f5f5f5 !important;
      padding: 8px !important;
    }
    
    .product-name { 
      font-size: 0.7rem !important; 
      padding: 0.5rem 0.2rem !important; 
      text-align: center !important; 
      word-break: break-word !important; 
      line-height: 1.3 !important; 
      font-weight: 500 !important;
    }
    
    /* VERSÃO 3.0 - IMAGENS CORRIGIDAS */
    .pdf-version {
      text-align: center;
      font-size: 0.5rem;
      color: #999;
      margin-top: 1rem;
      padding-top: 0.5rem;
      border-top: 1px solid #eee;
    }
    
    @media (max-width: 768px) {
      .product-grid { 
        grid-template-columns: repeat(2, 1fr) !important; 
        gap: 0.5rem !important;
      }
      .product-card { 
        padding: 0.4rem !important;
      }
      .product-image { 
        height: 100px !important;
        padding: 6px !important;
      }
      .product-name { 
        font-size: 0.65rem !important; 
        padding: 0.3rem 0.1rem !important;
      }
    }
    
    @media print {
      .product-grid { 
        grid-template-columns: repeat(4, 1fr) !important; 
      }
      .product-image { 
        height: 100px !important;
        object-fit: contain !important;
      }
    }
  `;
    cloneElement.prepend(style);

    await new Promise(r => setTimeout(r, 300));

    const versionDiv = document.createElement('div');
    versionDiv.className = 'pdf-version';
    versionDiv.textContent = 'v2.2 - JD Embalagens';
    cloneElement.appendChild(versionDiv);

    const opt = {
      margin: [0.3, 0.3, 0.3, 0.3],
      filename: fileName,
      image: { type: 'jpeg', quality: 0.9 },
      html2canvas: { scale: 2, useCORS: true, logging: false, allowTaint: false },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: 'avoid-all' } 
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