'use strict';
module.exports = (sequelize, Sequelize) => {
  var Frame = sequelize.define (
    'Frame',
    {
      FrameId: {
        type: Sequelize.STRING,
        allowNull: true
      },
      FrameImage: {
        type:  Sequelize.BLOB('long'),
        allowNull: true,
      }
    }
  );
  Frame.associate = function (models) {
    // associations can be defined here
    Frame.hasMany (models.Order, {onDelete: 'SET NULL'});
  };
  return Frame;
};