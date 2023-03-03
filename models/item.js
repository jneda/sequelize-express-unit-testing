"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    static associate(models) {
      // define association here
      Item.belongsTo(models.User, {
        foreignKey: "userId",
        onDelete: "CASCADE",
      });
    }
  }
  Item.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      link: { type: DataTypes.STRING, allowNull: false },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "User",
          key: "id",
          as: "userId",
        },
      },
    },
    {
      sequelize,
      modelName: "Item",
    }
  );
  return Item;
};
