'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    // name: DataTypes.STRING,
    // designation: DataTypes.STRING,
    // salary: DataTypes.NUMBER
    name: {
      type:DataTypes.STRING,
      allowNull : false
    },

    designation: {
      type:DataTypes.STRING,
      defaultValue : false
    }
  }, {});
  Employee.associate = function(models) {
    // associations can be defined here
    Employee.belongsTo(models.Company, {
      foreignKey : 'companyId',
      onDelete : 'CASCADE'
    })
  };
  return Employee;
};