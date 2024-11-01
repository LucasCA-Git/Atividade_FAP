import { Request, Response } from 'express';
import PDFDocument from 'pdfkit';
import Produto from '../models/produto';
import { criarProduto, listarProdutos, buscarProdutoPorId, atualizarProduto, deletarProduto } from '../services/produtoService';

export class ProdutoController {
    // Método para listar produtos
    static async listarProdutos(req: Request, res: Response) {
        try {
            const produtos = await listarProdutos();
            res.json(produtos);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao listar produtos.' });
        }
    }

    // Método para gerar o catálogo em PDF
    static async gerarCatalogoPDF(req: Request, res: Response) {
        try {
            const produtos = await Produto.findAll();

            // Configura o cabeçalho de resposta para PDF
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', 'attachment; filename=catalogo_produtos.pdf');

            // Cria o documento PDF
            const doc = new PDFDocument();
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
        } catch (error) {
            res.status(500).json({ error: 'Erro ao gerar o catálogo em PDF.' });
        }
    }

    // Método para criar um novo produto
    static async criarProduto(req: Request, res: Response) {
        try {
            const { nome, categoria, preco } = req.body;
            const produto = await criarProduto({ nome, categoria, preco });
            res.status(201).json(produto);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar produto.' });
        }
    }

    // Método para buscar um produto pelo ID
    static async buscarProdutoPorId(req: Request, res: Response) {
        try {
            const produtoId = Number(req.params.id);
            const produto = await buscarProdutoPorId(produtoId);
            if (produto) {
                res.json(produto);
            } else {
                res.status(404).json({ error: 'Produto não encontrado.' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao obter produto.' });
        }
    }

    // Método para atualizar um produto
    static async atualizarProduto(req: Request, res: Response) {
        try {
            const produtoId = Number(req.params.id);
            const { nome, categoria, preco } = req.body;
            const produtoAtualizado = await atualizarProduto(produtoId, { nome, categoria, preco });
            if (produtoAtualizado) {
                res.json(produtoAtualizado);
            } else {
                res.status(404).json({ error: 'Produto não encontrado.' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar produto.' });
        }
    }

    // Método para deletar um produto
    static async deletarProduto(req: Request, res: Response) {
        try {
            const produtoId = Number(req.params.id);
            const produtoDeletado = await deletarProduto(produtoId);
            if (produtoDeletado) {
                res.status(204).send(); // No content
            } else {
                res.status(404).json({ error: 'Produto não encontrado.' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao deletar produto.' });
        }
    }
}
