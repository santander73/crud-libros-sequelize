import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

class Libro extends Model { }

Libro.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genero: {
        type: DataTypes.STRING,
        allowNull: false
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'Libro',
    tableName: 'libros',
    timestamps: false // Desactiva createdAt y updatedAt si tu tabla no los tiene
});

export default Libro;