import express from 'express';
import sequelize from './config/db.js';
import libroRoutes from './routes/libroRoutes.js';
import Libro from './models/Libro.js';

const app = express();
app.use(express.json());
app.use('/libros', libroRoutes);

async function main() {
    try {
        await sequelize.authenticate();
        // 1. Forzamos la creación limpia de la tabla (borra lo anterior y la crea de cero)
        await sequelize.sync({ force: true });
        console.log('Tabla de libros reiniciada.');

        // 2. Iniciamos la transacción exigida por la actividad
        const t = await sequelize.transaction();

        try {
            // 3. Insertamos los 10 libros de un solo golpe
            await Libro.bulkCreate([
                { titulo: "1984", genero: "Ciencia Ficción / Distopía", autor: "George Orwell" },
                { titulo: "Dune", genero: "Ciencia Ficción", autor: "Frank Herbert" },
                { titulo: "Yo, Robot", genero: "Ciencia Ficción", autor: "Isaac Asimov" },
                { titulo: "Fahrenheit 451", genero: "Ciencia Ficción / Distopía", autor: "Ray Bradbury" },
                { titulo: "Neuromante", genero: "Ciencia Ficción / Cyberpunk", autor: "William Gibson" },
                { titulo: "El amor en los tiempos del cólera", genero: "Novela / Realismo Mágico", autor: "Gabriel García Márquez" },
                { titulo: "Pedro Páramo", genero: "Novela / Realismo Mágico", autor: "Juan Rulfo" },
                { titulo: "La ciudad y los perros", genero: "Novela", autor: "Mario Vargas Llosa" },
                { titulo: "Ficciones", genero: "Literatura Fantástica / Cuentos", autor: "Jorge Luis Borges" },
                { titulo: "Don Quijote de la Mancha", genero: "Novela Clásica", autor: "Miguel de Cervantes" }
            ], { transaction: t });

            await t.commit();
            console.log('¡Los 10 libros han sido cargados con éxito!');
        } catch (errorInsertar) {
            await t.rollback();
            console.error('Error al insertar libros:', errorInsertar);
        }

        // 4. Encendemos el servidor
        app.listen(3000, () => console.log('Servidor listo en http://localhost:3000'));

    } catch (error) {
        console.error('Error de conexión:', error);
    }
}

main();