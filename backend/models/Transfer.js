import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Transfer = sequelize.define('Transfer', {
  assetId: DataTypes.INTEGER,
  fromBase: DataTypes.STRING,
  toBase: DataTypes.STRING,
  quantity: DataTypes.INTEGER,
  date: DataTypes.DATE
});

export default Transfer;
