import { DataTypes } from "sequelize";
import{sequelize} from '../database/database.js'

export const Autos3 = sequelize.define('Autos4x4', {
    id:{
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
    },
    name:{
        type : DataTypes.STRING,
        allowNull : false
    },
    price:{
        type : DataTypes.BIGINT,
        allowNull   : false
    },
    marca :{
        type : DataTypes.STRING,
        allowNull   : false

    },
    correo :{
        type : DataTypes.STRING
    },
},
    {
        timestamps: true 



});
export default Autos3;