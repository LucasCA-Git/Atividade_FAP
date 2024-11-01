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
exports.deletarProduto = exports.atualizarProduto = exports.buscarProdutoPorId = exports.listarProdutos = exports.criarProduto = void 0;
const produto_1 = __importDefault(require("../models/produto"));
const criarProduto = (dados) => __awaiter(void 0, void 0, void 0, function* () {
    const produto = yield produto_1.default.create({
        produto_nome: dados.nome,
        produto_categoria: dados.categoria,
        produto_preco: dados.preco,
    });
    return produto;
});
exports.criarProduto = criarProduto;
const listarProdutos = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield produto_1.default.findAll();
});
exports.listarProdutos = listarProdutos;
const buscarProdutoPorId = (produtoId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield produto_1.default.findByPk(produtoId);
});
exports.buscarProdutoPorId = buscarProdutoPorId;
const atualizarProduto = (produtoId, dados) => __awaiter(void 0, void 0, void 0, function* () {
    const produto = yield produto_1.default.findByPk(produtoId);
    if (!produto)
        return null;
    produto.produto_nome = dados.nome;
    produto.produto_categoria = dados.categoria;
    produto.produto_preco = dados.preco;
    yield produto.save();
    return produto;
});
exports.atualizarProduto = atualizarProduto;
const deletarProduto = (produtoId) => __awaiter(void 0, void 0, void 0, function* () {
    const produto = yield produto_1.default.findByPk(produtoId);
    if (!produto)
        return null;
    yield produto.destroy();
    return produto;
});
exports.deletarProduto = deletarProduto;
