const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    static associate(models) {
      Products.belongsToMany(models.Orders, {
        through: 'ProductsOrders',
        as: 'Products',
        foreignKey: 'product_id',
      });
    }
  }
  Products.init({
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    flavor: DataTypes.STRING,
    complement: DataTypes.STRING,
    image: DataTypes.STRING,
    type: DataTypes.STRING,
    sub_type: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};
