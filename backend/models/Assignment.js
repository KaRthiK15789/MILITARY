import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Assignment = sequelize.define('Assignment', {
  assetId: DataTypes.INTEGER,
  personnel: DataTypes.STRING,
  quantity: DataTypes.INTEGER,
  base: DataTypes.STRING,
  date: DataTypes.DATE
});

export default Assignment;
