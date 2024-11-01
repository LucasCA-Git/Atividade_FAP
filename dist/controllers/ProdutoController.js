"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoController = void 0;
const pdfkit_1 = __importDefault(require("pdfkit"));
const produto_1 = __importDefault(require("../models/produto"));
const produtoService_1 = require("../services/produtoService");
class ProdutoController {
    // Método para listar produtos
    static listarProdutos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const produtos = yield (0, produtoService_1.listarProdutos)();
                res.json(produtos);
            }
            catch (error) {
                res.status(500).json({ error: 'Erro ao listar produtos.' });
            }
        });
    }
    // Método para gerar o catálogo em PDF
    static gerarCatalogoPDF(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const produtos = yield produto_1.default.findAll();
                // Configura o cabeçalho de resposta para PDF
                res.setHeader('Content-Type', 'application/pdf');
                res.setHeader('Content-Disposition', 'attachment; filename=catalogo_produtos.pdf');
                // Cria o documento PDF
                const doc = new pdfkit_1.default();
                doc.pipe(res);
                // Adiciona título ao PDF
                doc.fontSize(20).text('Catálogo de Produtos', { align: 'center' });
                doc.moveDown();
                // Itera sobre os produtos e adiciona ao PDF
                produtos.forEach(produto => {
                    doc.fontSize(12).text(`Produto ID: ${produto.produto_id}`);
                    doc.text(`Nome: ${produto.produto_nome}`);
                    doc.text(`Categoria: ${produto.produto_categoria}`);
                    doc.text(`Preço: R$ ${produto.produto_preco.toFixed(2)}`);
                    doc.moveDown();
                });
                // Finaliza o documento PDF
                doc.end();
            }
            catch (error) {
                res.status(500).json({ error: 'Erro ao gerar o catálogo em PDF.' });
            }
        });
    }
    // Método para criar um novo produto
    static criarProduto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { nome, categoria, preco } = req.body;
                const produto = yield (0, produtoService_1.criarProduto)({ nome, categoria, preco });
                res.status(201).json(produto);
            }
            catch (error) {
                res.status(500).json({ error: 'Erro ao criar produto.' });
            }
        });
    }
    // Método para buscar um produto pelo ID
    static buscarProdutoPorId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const produtoId = Number(req.params.id);
                const produto = yield (0, produtoService_1.buscarProdutoPorId)(produtoId);
                if (produto) {
                    res.json(produto);
                }
                else {
                    res.status(404).json({ error: 'Produto não encontrado.' });
                }
            }
            catch (error) {
                res.status(500).json({ error: 'Erro ao obter produto.' });
            }
        });
    }
    // Método para atualizar um produto
    static atualizarProduto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const produtoId = Number(req.params.id);
                const { nome, categoria, preco } = req.body;
                const produtoAtualizado = yield (0, produtoService_1.atualizarProduto)(produtoId, { nome, categoria, preco });
                if (produtoAtualizado) {
                    res.json(produtoAtualizado);
                }
                else {
                    res.status(404).json({ error: 'Produto não encontrado.' });
                }
            }
            catch (error) {
                res.status(500).json({ error: 'Erro ao atualizar produto.' });
            }
        });
    }
    // Método para deletar um produto
    static deletarProduto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const produtoId = Number(req.params.id);
                const produtoDeletado = yield (0, produtoService_1.deletarProduto)(produtoId);
                if (produtoDeletado) {
                    res.status(204).send(); // No content
                }
                else {
                    res.status(404).json({ error: 'Produto não encontrado.' });
                }
            }
            catch (error) {
                res.status(500).json({ error: 'Erro ao deletar produto.' });
            }
        });
    }
}
exports.ProdutoController = ProdutoController;
