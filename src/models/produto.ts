import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

class Produto extends Model {
  public produto_id!: number;
  public produto_nome!: string;
  public produto_categoria!: string;
  public produto_preco!: number;
}

Produto.init(
  {
    produto_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    produto_nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    produto_categoria: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    produto_preco: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'produtos',
    timestamps: false,
  }
);

export default Produto;
