# Actividad: Implementación de CRUD con Sequelize en Node.js

Este proyecto consiste en el desarrollo de una aplicación de servidor utilizando **Node.js** y **Express**, empleando **Sequelize** como ORM para conectarse y gestionar operaciones en una base de datos **PostgreSQL**. La aplicación implementa un CRUD completo para la entidad **Libros** utilizando arquitectura modular y la sintaxis moderna de **ES6**.

## 📋 Características y Requerimientos Cumplidos

- **Arquitectura Modular:** Separación de responsabilidades en carpetas (`config`, `models`, `controllers`, `routes`).
- **Clase en JavaScript utilizando ES6:** Definición del modelo `Libro` extendiendo la clase `Model` de Sequelize.
- **Transacciones SQL:** Uso explícito de transacciones (`BEGIN`, `COMMIT`, `ROLLBACK`) para asegurar la atomicidad en los endpoints de escritura (POST, PUT, DELETE).
- **Carga Automática (Seed):** Configuración simplificada que resetea la tabla e inserta 10 libros clásicos de prueba automáticamente cada vez que se levanta el servidor.

---

## 🛠️ Requisitos Previos

Antes de ejecutar la aplicación, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (Versión v18 o superior recomendada)
- [PostgreSQL](https://www.postgresql.org/) corriendo localmente

---

## 🚀 Instalación y Configuración

1. **Clonar el repositorio:**

```bash
   git clone [https://github.com/TU_USUARIO/TU_REPOSITORIO.git](https://github.com/TU_USUARIO/TU_REPOSITORIO.git)
   cd crud-libros-sequelize
```
