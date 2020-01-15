'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define ('User', {
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: 3,
          msg: 'Name must be at least 3 characters in length',
        },
      },
    },
    Phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    AccountType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Company: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      validate: {
        len: {
          args: [6, 128],
          msg: 'Email address must be between 6 and 128 characters in length',
        },
        isEmail: {
          msg: 'Email address must be valid',
        },
      },
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
    Active: DataTypes.BOOLEAN,
    Rol: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany (models.Order, {onDelete: 'SET NULL'});
  };
  return User;
};
