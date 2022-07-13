module.exports = (sequelize, DataTypes) => {
  const Pessoas = sequelize.define(
    'Pessoas',
    {
      nome: DataTypes.STRING,
      ativo: DataTypes.BOOLEAN,
      email: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {}
  );
  Pessoas.associate = function (models) {};
  return Pessoas;
};
