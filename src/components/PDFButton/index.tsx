import html2pdf from 'html2pdf.js';
import { PDFButtonContainer, StyledPDFButton } from './styles';

interface Product {
  id: number;
  name: string;
  image: string;
}

interface Category {
  title: string;
  icon: string;
  items: Product[];
}

interface PDFButtonProps {
  categories: Category[];
  fileName?: string;
}

const toBase64 = (src: string): Promise<string> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(img, 0, 0);
      resolve(canvas.toDataURL('image/jpeg', 0.85));
    };
    img.onerror = () => resolve('');
    img.src = src.startsWith('http') ? src : `${window.location.origin}/${src}`;
  });
};

export const PDFButton = ({ categories, fileName = 'catalogo-jd-embalagens.pdf' }: PDFButtonProps) => {

  const generatePDF = async () => {
    const allProducts = categories.flatMap(c => c.items);
    const base64Map: Record<string, string> = {};

    await Promise.all(
      allProducts.map(async (p) => {
        base64Map[p.image] = await toBase64(p.image);
      })
    );

    const categoriesHTML = categories.map(category => {
      const productsHTML = category.items.map(product => {
        const imgSrc = base64Map[product.image] || '';
        return `
          <div style="background:#ffffff;border-radius:10px;padding:8px;box-shadow:0 2px 8px rgba(0,0,0,0.08);display:flex;flex-direction:column;align-items:center;page-break-inside:avoid;break-inside:avoid;">
            ${imgSrc
              ? `<img src="${imgSrc}" alt="${product.name}" style="width:100%;aspect-ratio:1/1;object-fit:cover;border-radius:8px;display:block;" />`
              : `<div style="width:100%;aspect-ratio:1/1;background:#f0f0f0;border-radius:8px;"></div>`
            }
            <p style="margin:6px 0 0;text-align:center;font-size:11px;font-weight:600;color:#333333;line-height:1.3;word-break:keep-all;">${product.name}</p>
          </div>
        `;
      }).join('');

      return `
        <div style="margin-bottom:28px;page-break-inside:avoid;break-inside:avoid;">
          <h3 style="font-size:15px;font-weight:700;color:#0072BC;margin:0 0 12px;padding-left:8px;border-left:4px solid #00AEEF;">${category.title}</h3>
          <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:10px;">
            ${productsHTML}
          </div>
        </div>
      `;
    }).join('');

    const fullHTML = `
      <div style="font-family:Arial,Helvetica,sans-serif;padding:20px 24px;background:#ffffff;width:100%;box-sizing:border-box;">
        <h2 style="text-align:center;font-size:22px;font-weight:800;color:#0072BC;margin:0 0 6px;">CATÁLOGO EMBALAGENS</h2>
        <p style="text-align:center;font-size:12px;color:#555555;margin:0 0 24px;">Encontre a embalagem ideal para o seu negócio</p>
        ${categoriesHTML}
      </div>
    `;

    const container = document.createElement('div');
    container.style.cssText = 'position:absolute;left:-9999px;top:0;width:794px;background:#ffffff;';
    container.innerHTML = fullHTML;
    document.body.appendChild(container);

    await new Promise(r => requestAnimationFrame(r));
    await new Promise(r => setTimeout(r, 200));

    await html2pdf()
      .set({
        margin: [10, 10, 10, 10],
        filename: fileName,
        image: { type: 'jpeg', quality: 0.92 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          logging: false,
          width: 794,
          windowWidth: 794,
        },
        jsPDF: {
          unit: 'mm',
          format: 'a4',
          orientation: 'portrait',
        },
      } as any)
      .from(container)
      .save();

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