import PDFDocument from 'pdfkit';

export const gerarPDFCatalogo = (produtos: any[]) => {
    const doc = new PDFDocument();
    doc.text('Catálogo de Produtos');
    
    produtos.forEach(produto => {
        doc.text(`Produto: ${produto.produto_nome}`);
        doc.text(`Categoria: ${produto.produto_categoria}`);
        doc.text('---');
    });
    
    return doc;
};
