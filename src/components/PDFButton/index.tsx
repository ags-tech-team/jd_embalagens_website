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

const COLS = 4; // quantos produtos por linha

const chunkArray = <T,>(arr: T[], size: number): T[][] => {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

export const PDFButton = ({ categories, fileName = 'catalogo-jd-embalagens.pdf' }: PDFButtonProps) => {

  const generatePDF = async () => {

    // 1. Converte todas as imagens para base64
    const allProducts = categories.flatMap(c => c.items);
    const base64Map: Record<string, string> = {};
    await Promise.all(
      allProducts.map(async (p) => {
        base64Map[p.image] = await toBase64(p.image);
      })
    );

    // 2. Monta HTML usando <table> em vez de grid (mais confiável no html2canvas)
    const categoriesHTML = categories.map(category => {
      const rows = chunkArray(category.items, COLS);

      const rowsHTML = rows.map(row => {
        // Preenche linha incompleta com células vazias
        while (row.length < COLS) row.push({ id: -1, name: '', image: '' });

        const cellsHTML = row.map(product => {
          if (product.id === -1) {
            return `<td style="width:25%;padding:6px;"></td>`;
          }
          const imgSrc = base64Map[product.image] || '';
          return `
            <td style="width:25%;padding:6px;vertical-align:top;">
              <div style="background:#ffffff;border-radius:10px;padding:8px;border:1px solid #eeeeee;text-align:center;">
                ${imgSrc
                  ? `<img src="${imgSrc}" alt="${product.name}"
                      style="width:100%;height:100px;object-fit:cover;border-radius:8px;display:block;" />`
                  : `<div style="width:100%;height:100px;background:#f0f0f0;border-radius:8px;"></div>`
                }
                <p style="margin:6px 0 0;font-size:11px;font-weight:600;color:#333333;line-height:1.3;">${product.name}</p>
              </div>
            </td>
          `;
        }).join('');

        return `<tr>${cellsHTML}</tr>`;
      }).join('');

      return `
        <div style="margin-bottom:24px;">
          <h3 style="font-size:14px;font-weight:700;color:#0072BC;margin:0 0 10px;padding-left:8px;border-left:4px solid #00AEEF;font-family:Arial,sans-serif;">
            ${category.title}
          </h3>
          <table style="width:100%;border-collapse:collapse;table-layout:fixed;">
            <tbody>${rowsHTML}</tbody>
          </table>
        </div>
      `;
    }).join('');

    const fullHTML = `
      <div style="font-family:Arial,Helvetica,sans-serif;padding:16px 20px;background:#ffffff;">
        <h2 style="text-align:center;font-size:20px;font-weight:800;color:#0072BC;margin:0 0 4px;">
          CATÁLOGO EMBALAGENS
        </h2>
        <p style="text-align:center;font-size:11px;color:#555555;margin:0 0 20px;">
          Encontre a embalagem ideal para o seu negócio
        </p>
        ${categoriesHTML}
      </div>
    `;

    // 3. Container off-screen com largura fixa
    const container = document.createElement('div');
    container.style.cssText = 'position:fixed;left:-9999px;top:0;width:794px;background:#ffffff;';
    container.innerHTML = fullHTML;
    document.body.appendChild(container);

    // 4. Aguarda render
    await new Promise(r => setTimeout(r, 400));

    // 5. Gera PDF
    await html2pdf()
      .set({
        margin: [8, 8, 8, 8],
        filename: fileName,
        image: { type: 'jpeg', quality: 0.92 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          logging: false,
          width: 794,
          windowWidth: 794,
          backgroundColor: '#ffffff',
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