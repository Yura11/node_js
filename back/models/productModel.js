import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Product = db.define ('products', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUID1,
        primaryKey: true
    },
    title: DataTypes.STRING,
    price: DataTypes.STRING,
    description: DataTypes.STRING
},{
    freezeTableName:true
}
);
export default Product;

(async()=>{
    await db.sync();
})();