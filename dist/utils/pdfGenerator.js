"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gerarPDFCatalogo = void 0;
const pdfkit_1 = __importDefault(require("pdfkit"));
const gerarPDFCatalogo = (produtos) => {
    const doc = new pdfkit_1.default();
    doc.text('Catálogo de Produtos');
    produtos.forEach(produto => {
        doc.text(`Produto: ${produto.produto_nome}`);
        doc.text(`Categoria: ${produto.produto_categoria}`);
        doc.text('---');
    });
    return doc;
};
exports.gerarPDFCatalogo = gerarPDFCatalogo;
