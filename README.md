# Backend NestJS - Sistema de Soporte Técnico

## Etapa 1: Arquitectura Inicial
- Creación de la estructura base modular, servicios y controladores.

---

## Etapa 2: Persistencia y Validación
- Configuración de TypeORM + MySQL, variables de entorno (.env), entidad `Soporte` y DTOs con `class-validator`.

---

## Etapa 3: Funcionalidad y Reglas de Negocio

### Descripción
Implementación completa de las operaciones CRUD, endpoint de búsqueda de solicitudes por título, manejo de excepciones HTTP personalizadas y aplicación de las reglas de negocio especificadas.

### Endpoints Disponibles
- `GET /soporte`: Obtener el listado completo de solicitudes de soporte.
- `GET /soporte/buscar?titulo=...`: Buscar solicitudes filtradas por título.
- `GET /soporte/:id`: Obtener el detalle de una solicitud específica por su ID.
- `POST /soporte`: Crear una nueva solicitud de soporte con estado inicial `Pendiente`.
- `PUT /soporte/:id`: Actualizar los datos o estado de una solicitud existente.
- `DELETE /soporte/:id`: Eliminar una solicitud existente.

### Reglas de Negocio Implementadas (RN)
1. **RN01 - Validación de Fecha**: La fecha de la solicitud no puede ser posterior a la fecha actual (`BadRequestException`).
2. **RN02 - Transición de Estado Prohibida**: Una solicitud en estado `Finalizada` no puede volver a cambiar a `Pendiente` (`BadRequestException`).
3. **RN03 - Eliminación Restringida**: Solo se permite eliminar solicitudes que se encuentren en estado `Finalizada` (`BadRequestException`).
4. **RN04 - Solicitud Inexistente**: Si se intenta consultar, actualizar o eliminar una solicitud con ID inexistente, se retorna un error 404 (`NotFoundException`).

### Respuestas y Manejo de Errores
- `200 OK`: Operación exitosa (Lectura / Actualización / Eliminación).
- `201 Created`: Solicitud creada exitosamente.
- `400 Bad Request`: Datos de entrada inválidos o violación de regla de negocio.
- `404 Not Found`: Registro no encontrado en la base de datos.
