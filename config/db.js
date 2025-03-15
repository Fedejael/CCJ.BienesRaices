import  Sequelize  from "sequelize";

const db = new Sequelize("bienesraices_node_mvc", "root", "", {
    host: "localhost",
    port: 3306,
    dialec: "mysql",
    define: {
        timestamps: true
    },
    poll: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false

});