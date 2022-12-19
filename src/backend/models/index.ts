import { Sequelize } from "sequelize";

const DB_PASS = <string>process.env.DB_PASS;
const DB_USER = <string>process.env.DB_USER;
const DB_NAME = <string>process.env.DB_NAME;
const DB_HOSTNAME = <string>process.env.DB_HOSTNAME;

export let sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    dialect: 'postgres',
    host: DB_HOSTNAME,
});

export const startSequelize = async () => {
    try {
        await sequelize.sync();
        console.info('DB and Express server is up and running!!!!')

    } catch (error) {
        console.log(error);
    }
}
