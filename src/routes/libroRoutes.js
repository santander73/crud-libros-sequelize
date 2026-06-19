import { Router } from 'express';
import {
    crearLibro,
    obtenerLibros,
    obtenerLibroPorId,
    actualizarLibro,
    eliminarLibro
} from '../controllers/libroController.js';

const router = Router();

router.post('/', crearLibro);          // POST /libros
router.get('/', obtenerLibros);        // GET /libros
router.get('/:id', obtenerLibroPorId);  // GET /libros/:id
router.put('/:id', actualizarLibro);    // PUT /libros/:id
router.delete('/:id', eliminarLibro); // DELETE /libros/:id

export default router;