// backend/models/ApiLog.js
module.exports = (sequelize, DataTypes) => {
  const ApiLog = sequelize.define("ApiLog", {
    method: {
      type: DataTypes.STRING,
      allowNull: false
    },
    endpoint: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    statusCode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    responseTime: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    requestBody: {
      type: DataTypes.JSONB
    },
    queryParams: {
      type: DataTypes.JSONB
    }
  });

  return ApiLog;
};
