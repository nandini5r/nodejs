'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Address.init({
    house_no: DataTypes.STRING,
    street: DataTypes.STRING,
    landmark: DataTypes.STRING,
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    zipCode: DataTypes.BIGINT,
    userId: DataTypes.INTEGER,
    state: DataTypes.STRING,
    address_type: DataTypes.ENUM
  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};