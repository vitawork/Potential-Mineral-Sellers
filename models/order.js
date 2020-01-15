'use strict';
module.exports = (sequelize, DataTypes) => {
  var Order = sequelize.define (
    'Order',
    {
      Cost: {
        type: DataTypes.REAL,
     
      },
      Size: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Address1: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Address2: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      City: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      State: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Zip: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [5, 11],
      },
      Status: {
        type: DataTypes.STRING,

      },
      Date: DataTypes.DATEONLY,
 
    }
  );
  Order.associate = function (models) {
    // associations can be defined here
    Order.belongsTo (models.User, {onDelete: 'SET NULL'});
    Order.belongsTo (models.Image, {onDelete: 'SET NULL'});
    Order.belongsTo (models.Frame, {onDelete: 'SET NULL'});
  };
  return Order;
};