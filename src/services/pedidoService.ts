import Pedido from '../models/pedido';
import DetalhePedido from '../models/detalhePedido';

class PedidoService {
    // Método para listar todos os pedidos
    async listarPedidos(): Promise<Pedido[]> {
        try {
            return await Pedido.findAll();
        } catch (error) {
            console.error('Erro ao listar pedidos:', error);
            throw new Error('Não foi possível listar os pedidos.');
        }
    }

    // Método para obter detalhes de um pedido específico
    async obterDetalhesDoPedido(pedidoId: number): Promise<DetalhePedido[]> {
        try {
            return await DetalhePedido.findAll({ where: { pedido_id: pedidoId } });
        } catch (error) {
            console.error('Erro ao obter detalhes do pedido:', error);
            throw new Error('Não foi possível obter os detalhes do pedido.');
        }
    }
}

export default new PedidoService();
