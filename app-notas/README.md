# App de notas rediseñada con UX/UI

Aplicación de notas rediseñada aplicando heurísticas de usabilidad de Nielsen, las leyes de Fitts, Hick y Miller, y criterios de accesibilidad.

Página publicada: https://fabricioquispea-boop.github.io/taller-ux/blob/main/app-notas/README.md
## Contenido

- `index.html`, `estilos.css`, `app.js`: versión rediseñada
- `original/`: versión inicial, conservada para comparar el antes y el después
- `docs/AUDITORIA-UX.md`: auditoría completa

## Cambios aplicados

| Principios| Cambio |
|---|---|
| Visibilidad del estado | Mensaje después de agregar, eliminar y restaurar una nota |
| Prevención de errores | El botón se activa solo si hay datos reales; no se pueden agregar notas vacías |
| Control y libertad | Botón Deshacer al eliminar y confirmación al limpiar el formulario |
| Ley de Fitts | Botón principal grande y separado del secundario |
| Ley de Hick | Categorías agrupadas en tres bloques |
| Ley de Miller | Formulario dividido en dos bloques numerados |
| Accesibilidad | Labels, texto alternativo, contraste y foco visible |

## Uso

Abre `index.html` con la extensión Live Server de VS Code.
