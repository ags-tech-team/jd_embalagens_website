import jsPDF from 'jspdf';
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

const loadImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = () => resolve(img); // resolve mesmo com erro
    img.src = src.startsWith('http') ? src : `${window.location.origin}/${src}`;
  });
};

const imgToBase64 = (img: HTMLImageElement): string => {
  try {
    const canvas = document.createElement('canvas');
    canvas.width = img.naturalWidth || 100;
    canvas.height = img.naturalHeight || 100;
    const ctx = canvas.getContext('2d')!;
    ctx.drawImage(img, 0, 0);
    return canvas.toDataURL('image/jpeg', 0.85);
  } catch {
    return '';
  }
};

export const PDFButton = ({ categories, fileName = 'catalogo-jd-embalagens.pdf' }: PDFButtonProps) => {

  const generatePDF = async () => {

    // 1. Pré-carrega todas as imagens
    const allProducts = categories.flatMap(c => c.items);
    const imgMap: Record<string, string> = {};
    await Promise.all(
      allProducts.map(async (p) => {
        const img = await loadImage(p.image);
        imgMap[p.image] = imgToBase64(img);
      })
    );

    // 2. Configurações da página A4 em mm
    const doc = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });
    const pageW = 210;
    const pageH = 297;
    const margin = 12;
    const usableW = pageW - margin * 2;

    const COLS = 4;
    const cellW = usableW / COLS;
    const imgSize = cellW - 6;
    const cellH = imgSize + 12; // imagem + texto

    let y = margin;

    // 3. Título
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.setTextColor(0, 114, 188);
    doc.text('CATÁLOGO EMBALAGENS', pageW / 2, y + 6, { align: 'center' });
    y += 12;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text('Encontre a embalagem ideal para o seu negócio', pageW / 2, y + 4, { align: 'center' });
    y += 12;

    // 4. Categorias
    for (const category of categories) {
      // Verifica se cabe o título + pelo menos uma linha de produtos
      if (y + 10 + cellH > pageH - margin) {
        doc.addPage();
        y = margin;
      }

      // Título da categoria
      doc.setDrawColor(0, 174, 239);
      doc.setFillColor(0, 174, 239);
      doc.rect(margin, y + 1, 1.5, 7, 'F'); // barra lateral azul
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.setTextColor(0, 114, 188);
      doc.text(category.title, margin + 4, y + 7);
      y += 12;

      // Produtos em linhas de COLS colunas
      const items = category.items;
      for (let i = 0; i < items.length; i += COLS) {
        const row = items.slice(i, i + COLS);

        // Nova página se não couber a linha
        if (y + cellH > pageH - margin) {
          doc.addPage();
          y = margin;
        }

        for (let col = 0; col < row.length; col++) {
          const product = row[col];
          const x = margin + col * cellW;

          // Fundo do card
          doc.setFillColor(255, 255, 255);
          doc.setDrawColor(230, 230, 230);
          doc.roundedRect(x + 1, y, cellW - 2, cellH, 3, 3, 'FD');

          // Imagem
          const b64 = imgMap[product.image];
          if (b64) {
            try {
              doc.addImage(b64, 'JPEG', x + 3, y + 2, imgSize, imgSize);
            } catch {
              // imagem falhou, deixa espaço vazio
            }
          }

          // Nome do produto (com quebra de linha se necessário)
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(7.5);
          doc.setTextColor(50, 50, 50);
          const lines = doc.splitTextToSize(product.name, cellW - 4);
          doc.text(lines, x + cellW / 2, y + imgSize + 7, { align: 'center' });
        }

        y += cellH + 3;
      }

      y += 4; // espaço entre categorias
    }

    doc.save(fileName);
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