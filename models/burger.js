module.exports = function(sequelize, DataTypes) {
  const Burger = sequelize.define("Burger", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    eaten: {
      type: DataTypes.TEXT,
      defaultValue: false
    }
  });

  return Burger;
  
};
