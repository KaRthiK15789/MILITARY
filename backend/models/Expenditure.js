import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Expenditure = sequelize.define('Expenditure', {
  assetId: DataTypes.INTEGER,
  quantity: DataTypes.INTEGER,
  reason: DataTypes.STRING,
  base: DataTypes.STRING,
  date: DataTypes.DATE
});

export default Expenditure;
