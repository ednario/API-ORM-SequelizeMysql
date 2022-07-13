module.exports = (sequelize, DataTypes) => {
  const Niveis = sequelize.define(
    'Niveis',
    {
      descr_nivel: DataTypes.STRING,
    },
    {}
  );
  Niveis.associate = function (models) {
    // associations can be defined here
  };
  return Niveis;
};
