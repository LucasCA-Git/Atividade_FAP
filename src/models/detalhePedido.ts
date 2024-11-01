import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

class DetalhePedido extends Model {
  public detalhe_id!: number;
  public pedido_id!: number;
  public produto_id!: number;
  public quantidade!: number;
  public preco!: number;
    id: any;
}

DetalhePedido.init(
  {
    detalhe_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    pedido_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    produto_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantidade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    preco: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'detalhes_pedido',
    timestamps: false,
  }
);

export default DetalhePedido;
