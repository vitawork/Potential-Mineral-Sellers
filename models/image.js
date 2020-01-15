'use strict';
module.exports = (sequelize, Sequelize) => {
  var Image = sequelize.define (
    'Image',
    {
      API_Id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        len: [10]
      },
      Our_Id: {
        type: Sequelize.STRING,
        allowNull: true,
        len: [10]
      },
      Original: {
        type:  Sequelize.BLOB('long'),
        allowNull: true,
      },
      Processed: {
        type:  Sequelize.BLOB('long'),
        allowNull: true,
      }
    }
  );
  Image.associate = function (models) {
    // associations can be defined here
    Image.hasMany (models.Order, {onDelete: 'SET NULL'});
  };
  return Image;
};