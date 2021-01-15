const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class SOMETHING extends Model {}

// Category.init(
//   {
//     category_name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     }
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'category',
//   }
// );

module.exports = SOMETHING;
