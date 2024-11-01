import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

class Pedido extends Model {
  public pedido_id!: number;
  public cliente_id!: number;
  public data_pedido!: Date;
  public status!: string;
}

Pedido.init(
  {
    pedido_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    cliente_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    data_pedido: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'pedidos',
    timestamps: false,
  }
);

export default Pedido;
