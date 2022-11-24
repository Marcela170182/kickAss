const { sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

    const Usuario = sequelize.define(

        "Usuario",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                notNull: true
            },
            name: {
                type: DataTypes.VARCHAR,
                notNull: true
            },
            email: {
                type: DataTypes.VARCHAR,
                notNull: true
            },
            password: {
                type: DataTypes.INTEGER,
                unsigned: true,
                notNull: true
            },
            cpf: {
                type: DataTypes.INTEGER,
                unsigned: true,
                notNull: true
            },
            phone: {
                type: DataTypes.INTEGER,
                unsigned: true,
                notNull: true
            },
            adress: {
                type: DataTypes.VARCHAR,
                notNull: true
            },
            number: {
                type: DataTypes.VARCHAR,
                notNull: true
            },
            cep: {
                type: DataTypes.VARCHAR,
                notNull: true
            }


        },

    );

    return Usuario;
}
