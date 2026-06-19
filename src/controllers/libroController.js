import Libro from '../models/Libro.js';
import sequelize from '../config/db.js';

// POST /libros: Crear un nuevo libro
export const crearLibro = async (req, res) => {
    const t = await sequelize.transaction(); // Inicia la transacción (BEGIN)
    try {
        const { titulo, genero, autor } = req.body;
        const nuevoLibro = await Libro.create({ titulo, genero, autor }, { transaction: t });

        await t.commit(); // Confirma los cambios
        res.status(201).json(nuevoLibro);
    } catch (error) {
        await t.rollback(); // Cancela la operación si hay error
        res.status(500).json({ error: 'Error al crear el libro' });
    }
};

// GET /libros: Obtener todos los libros
export const obtenerLibros = async (req, res) => {
    try {
        const libros = await Libro.findAll();
        res.status(200).json(libros);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los libros' });
    }
};

// GET /libros/:id: Obtener un libro por su ID
export const obtenerLibroPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const libro = await Libro.findByPk(id);
        if (!libro) {
            return res.status(404).json({ error: 'Libro no encontrado' });
        }
        res.status(200).json(libro);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el libro' });
    }
};

// PUT /libros/:id: Actualizar el título o el género de un libro
export const actualizarLibro = async (req, res) => {
    const t = await sequelize.transaction(); // Inicia la transacción (BEGIN)
    try {
        const { id } = req.params;
        const { titulo, genero } = req.body;

        const libro = await Libro.findByPk(id, { transaction: t });
        if (!libro) {
            await t.rollback();
            return res.status(404).json({ error: 'Libro no encontrado' });
        }

        await libro.update({ titulo, genero }, { transaction: t });
        await t.commit(); // Confirma la actualización

        res.status(200).json(libro);
    } catch (error) {
        await t.rollback();
        res.status(500).json({ error: 'Error al actualizar el libro' });
    }
};

// DELETE /libros/:id: Eliminar un libro por su ID
export const eliminarLibro = async (req, res) => {
    const t = await sequelize.transaction(); // Inicia la transacción (BEGIN)
    try {
        const { id } = req.params;
        const libro = await Libro.findByPk(id, { transaction: t });
        if (!libro) {
            await t.rollback();
            return res.status(404).json({ error: 'Libro no encontrado' });
        }

        await libro.destroy({ transaction: t });
        await t.commit(); // Confirma la eliminación

        res.status(200).json({ message: 'Libro eliminado correctamente' });
    } catch (error) {
        await t.rollback();
        res.status(500).json({ error: 'Error al eliminar el libro' });
    }
};