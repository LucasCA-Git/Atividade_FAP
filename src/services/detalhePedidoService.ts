import DetalhePedido from '../models/detalhePedido';

class DetalhePedidoService {
    // Método para listar todos os detalhes de pedidos
    async listarDetalhes(): Promise<DetalhePedido[]> {
        try {
            return await DetalhePedido.findAll();
        } catch (error) {
            console.error('Erro ao listar detalhes do pedido:', error);
            throw new Error('Não foi possível listar os detalhes do pedido.');
        }
    }
}

export default new DetalhePedidoService();
