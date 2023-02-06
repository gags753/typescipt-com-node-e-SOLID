import { DataTypes, Model } from "sequelize";
import { sqliteConnection } from "../core/database/connection";

class Produto extends Model { }

Produto.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: DataTypes.STRING,
        price: DataTypes.NUMBER
    },
    { sequelize: sqliteConnection, modelName: "produto" }
)

export default Produto