import { Sequelize } from 'sequelize';

// Configura las credenciales de tu base de datos PostgreSQL local
const sequelize = new Sequelize('crudlibros_db', 'postgres', 'Postgres123', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false, // Evita llenar la consola con logs de SQL
});

export default sequelize;