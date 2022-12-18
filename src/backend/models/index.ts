import { Sequelize } from "sequelize";

export let sequelize: Sequelize;

export const startSequelize = (
    db_name: string, 
    db_password: string, 
    db_hostname: string, 
    db_username: string
) => {
    sequelize = new Sequelize(db_name, db_username, db_password, {
        dialect: 'postgres',
        host: db_hostname,
    })

    return sequelize;
}
