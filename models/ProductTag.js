const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class ProductTag extends Model {}

ProductTag.init(
  {
    // define the id
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // define the product_id
    product_id: {
      type: DataTypes.INTEGER,
      // reference the product_id
      references: {
        model: "product",
        key: "id",
      },
    },
    // den the tag_id
    tag_id: {
      type: DataTypes.INTEGER,
      // reference the tag_id
      references: {
        model: "tag",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
  }
);

module.exports = ProductTag;
