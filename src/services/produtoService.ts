import Produto from '../models/produto';

export const criarProduto = async (dados: { nome: string; categoria: string; preco: number }) => {
    const produto = await Produto.create({
        produto_nome: dados.nome,
        produto_categoria: dados.categoria,
        produto_preco: dados.preco,
    });
    return produto;
};

export const listarProdutos = async () => {
    return await Produto.findAll();
};

export const buscarProdutoPorId = async (produtoId: number) => {
    return await Produto.findByPk(produtoId);
};

export const atualizarProduto = async (produtoId: number, dados: { nome: string; categoria: string; preco: number }) => {
    const produto = await Produto.findByPk(produtoId);
    if (!produto) return null;
    
    produto.produto_nome = dados.nome;
    produto.produto_categoria = dados.categoria;
    produto.produto_preco = dados.preco;
    await produto.save();
    
    return produto;
};

export const deletarProduto = async (produtoId: number) => {
    const produto = await Produto.findByPk(produtoId);
    if (!produto) return null;
    
    await produto.destroy();
    return produto;
};
