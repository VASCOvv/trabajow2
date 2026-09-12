Backend NestJS - Sistema de Soporte Técnico

API REST desarrollada con NestJS, TypeORM, MySQL, validaciones con DTOs y documentación interactiva con Swagger.

 Historial de Entregas y Commits

| Etapa | Nombre | Desarrollo Esperado | Evidencia |

| **1** | **Arquitectura Inicial** | Creación del proyecto NestJS, módulo, controller, service y estructura base. | `Commit 1` + README |
| **2** | **Persistencia y Validación** | Entity, TypeORM + MySQL, variables de entorno, DTO y validaciones. | `Commit 2` + README |
| **3** | **Funcionalidad y Reglas** | CRUD, búsqueda, manejo de errores y reglas de negocio. | `Commit 3` + README |
| **4** | **Pruebas y Versión Final** | Swagger, pruebas de endpoints, revisión técnica y preparación de entrega. | `Commit 4` + README |

 Requisitos e Instalación

 Requisitos Previos
- Node.js (v18+)
- MySQL Server en ejecución

 Variables de Entorno (`.env`)
Crear un archivo `.env` basado en `.env.example`:
```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASS=
DB_NAME=soportecliente_db
```

 Comandos de Ejecución
```bash
# Instalación de dependencias
npm install

# Compilar proyecto
npm run build

# Iniciar servidor en modo desarrollo
npm run start:dev
```

 Documentación Interactiva (Swagger)

Una vez iniciado el servidor, la documentación interactiva Swagger se encuentra disponible en:
[http://localhost:3000/api](http://localhost:3000/api)

 Endpoints y Pruebas de la API

 1. Listar todas las solicitudes
- **Método**: `GET`
- **Ruta**: `/soporte`

 2. Buscar solicitud por título
- **Método**: `GET`
- **Ruta**: `/soporte/buscar?titulo=Fallo`

 3. Obtener solicitud por ID
- **Método**: `GET`
- **Ruta**: `/soporte/:id`

 4 Crear solicitud
- **Método**: `POST`
- **Ruta**: `/soporte`
- **Body JSON**:
```json
{
  "titulo": "Fallo en impresora",
  "cliente": "Empresa ACME",
  "categoria": "Hardware",
  "prioridad": "Alta",
  "descripcion": "La impresora del departamento contable no responde",
  "fecha": "2026-09-11"
}
```

5. Actualizar solicitud
- **Método**: `PUT`
- **Ruta**: `/soporte/:id`
- **Body JSON**:
```json
{
  "estado": "En Proceso"
}
```

6. Eliminar solicitud (Solo solicitudes 'Finalizada')
- **Método**: `DELETE`
- **Ruta**: `/soporte/:id`

---

 Reglas de Negocio (RN)

1. **RN01 - Fecha no posterior a hoy**: No se permiten solicitudes con fechas futuras (`BadRequestException`).
2. **RN02 - Transición de estado**: Una solicitud en estado `Finalizada` no puede volver a pasar a `Pendiente` (`BadRequestException`).
3. **RN03 - Eliminación restringida**: Solo se pueden eliminar solicitudes cuya propiedad `estado` sea `Finalizada` (`BadRequestException`).
4. **RN04 - Manejo de Errores HTTP**: Respuestas apropiadas de `404 Not Found` cuando el recurso no existe.
