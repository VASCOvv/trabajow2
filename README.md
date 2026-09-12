# Backend NestJS - Sistema de Soporte Técnico

## Etapa 1: Arquitectura Inicial
- Creación de la estructura base modular, servicios y controladores.

---

## Etapa 2: Persistencia y Validación

### Descripción
Configuración de la persistencia de datos mediante TypeORM + MySQL, gestión de variables de entorno con dotenv, definición de la entidad `Soporte` y DTOs con reglas de validación estricta.

### Configuración de la Base de Datos y Entorno
Variables definidas en `.env` / `.env.example`:
- `DB_HOST`: Host del servidor MySQL (default: `localhost`).
- `DB_PORT`: Puerto de MySQL (default: `3306`).
- `DB_USER`: Usuario de la base de datos (default: `root`).
- `DB_PASS`: Contraseña de acceso.
- `DB_NAME`: Nombre de la base de datos (`soportecliente_db`).

### Entidad (`Soporte`)
- `id`: Clave primaria autoincremental (`PrimaryGeneratedColumn`).
- `titulo`: Título de la solicitud.
- `cliente`: Nombre del cliente solicitante.
- `categoria`: Categoría asignada (`Hardware`, `Software`, `Redes`, `Seguridad`, `Soporte Usuario`).
- `prioridad`: Nivel de prioridad (`Baja`, `Media`, `Alta`, `Crítica`).
- `estado`: Estado inicial por defecto `Pendiente`.
- `descripcion`: Detalle de la incidencia.
- `fecha`: Fecha de registro (`date`).

### DTOs y Validaciones (`class-validator` & `class-transformer`)
- `CreateSoporteDto`:
  - `titulo`: Mínimo 5 caracteres (`@MinLength(5)`).
  - `cliente`: Campo no vacío (`@IsNotEmpty()`).
  - `categoria`: Valores permitidos definidos en lista (`@IsIn`).
  - `prioridad`: Valores permitidos (`Baja`, `Media`, `Alta`, `Crítica`).
  - `descripcion`: Mínimo 15 caracteres (`@MinLength(15)`).
  - `fecha`: Transformación a objeto `Date` (`@Type(() => Date)`).
- `UpdateSoporteDto`: Extiende de `CreateSoporteDto` usando `PartialType` con opción a actualizar `estado` (`Pendiente`, `En Proceso`, `Finalizada`).
