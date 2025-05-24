import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Asset = sequelize.define('Asset', {
  name: DataTypes.STRING,
  type: DataTypes.STRING, // weapon, vehicle, etc.
  quantity: DataTypes.INTEGER,
  base: DataTypes.STRING
});

export default Asset;
