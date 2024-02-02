const dbConfig = require('../config/config.js');
const sequelize = dbConfig.sequelizeTZ;
const DataTypes = dbConfig.DataTypes;
const Model = dbConfig.Model;

const OP = dbConfig.Sequelize.Op;

class UserModel extends Model {}

UserModel.init({
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull : false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: new Date().toISOString()
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull : true,
        defaultValue: new Date().toISOString(),
    }
},{
    sequelize,
    modelName: 'user',
    timestamps: false,
    freezeTableName: true
})

module.exports = UserModel