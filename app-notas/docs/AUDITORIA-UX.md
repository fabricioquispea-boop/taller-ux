# Auditoría UX de app-notas

**Alumno:** Fabricio Quispe Apaza · **Grupo:** C24SE · **Laboratorio 11:** Fundamentos de UX/UI

La versión original está en la carpeta [`original/`](../original) y la versión rediseñada en la raíz del repositorio.

## 1. Auditoría con las cinco heurísticas de Nielsen

| Heurística | Problema de la pantalla original | Solución aplicada | Gravedad |
|---|---|---|---|
| Visibilidad del estado | Al pulsar «ok» la nota solo aparecía en la lista, sin ningún aviso. Al borrar tampoco había mensaje. | Un párrafo `role="status"` muestra «Nota agregada.», «Nota eliminada.» y «Nota restaurada.» después de cada acción. Además, el título de la lista lleva un contador. | Alta |
| Coincidencia con el mundo real | El botón decía «ok», el enlace decía «BORRAR» y el título «pagina1». No explicaban qué hacía cada cosa. | Textos en el lenguaje de quien usa la app: «Agregar nota», «Eliminar», «Mis notas». El `<title>` pasó de «pagina1» a «Mis notas». | Media |
| Control y libertad | «BORRAR» eliminaba la nota al instante, sin confirmar y sin forma de recuperarla. | Al eliminar aparece «Nota eliminada. **Deshacer**», que devuelve la nota a su misma posición. «Limpiar formulario» pide confirmación si hay datos escritos. | Alta |
| Prevención de errores | Se podían agregar notas vacías o con solo espacios. | El botón «Agregar nota» está desactivado hasta que título, contenido y categoría tengan datos reales (se usa `trim()`). El error se previene, no se reporta después. Si aun así se intenta enviar, los campos se marcan en rojo y el foco salta al primero con problema. | Alta |
| Reconocer, no recordar | Los campos solo tenían `placeholder`: al escribir, la pista desaparecía y había que recordar qué iba en cada campo. | Cada campo tiene un `<label>` siempre visible, unido por `for`/`id`. El placeholder queda solo como ejemplo de formato. | Media |
| Accesibilidad | `outline: none` ocultaba el foco con Tab, el texto era gris `#b5b5b5` sobre blanco (contraste menor a 2:1), la imagen no tenía `alt` y había dos `<h4>` sin jerarquía. | `:focus-visible` con borde naranja de 3 px, texto `#1f2933` (más de 14:1), `alt` descriptivo, un único `h1` seguido de `h2`, y `lang="es"`. | Alta |
| Principios visuales | Texto de 9 a 12 px, «BORRAR» en rojo y de 20 px llamaba más la atención que el botón principal, y no había espaciado coherente. | Texto base de 16 px con `line-height: 1.5`, botón principal relleno en azul y secundario solo con borde, colores en variables de `:root` y espaciado en múltiplos de 8. | Media |

## 2. Leyes de usabilidad aplicadas

| Ley | Cambio concreto | Justificación |
|---|---|---|
| **Fitts** | El botón «Agregar nota» crece con `flex: 1` y mide al menos 44 px de alto. Está separado 24 px de «Limpiar formulario». | Un objetivo grande y cercano se alcanza más rápido, y la separación evita pulsar el botón equivocado. |
| **Hick** | Las 11 categorías sueltas pasaron a 3 grupos (`optgroup`): Vida diaria, Trabajo y estudio, y Otros. | Cuantas más opciones hay a la vez, más tarda la decisión. Agrupadas, primero se elige el grupo y luego la categoría. |
| **Miller** | El formulario se dividió en dos bloques numerados («1. Tu nota» y «2. Categoría») de uno o dos campos cada uno. | La memoria de trabajo maneja unos 7 elementos a la vez. Los bloques cortos reducen la carga mental. |

## 3. Cumplimiento de los requisitos de accesibilidad

| Requisito | Cómo se cumple |
|---|---|
| `label` en cada campo | `titulo`, `texto` y `categoria` tienen su `<label for>` |
| `alt` en cada imagen | El banner lleva un `alt` que describe lo que muestra |
| Foco visible | `:focus-visible { outline: 3px solid #f59e0b; }` |
| Contraste mínimo 4.5:1 | Texto principal `#1f2933` (unos 14.7:1) y texto de apoyo `#52606d` (unos 6.4:1) sobre blanco |
| Botones de al menos 44 px | `min-height: 44px` en botones, campos y lista desplegable |
| Variables CSS en `:root` | Colores y espacio definidos como `--color-*` y `--espacio` |
| Un solo `h1` | «Mis notas». Las secciones usan `h2` |

## 4. Puntaje de Lighthouse

> Este puntaje debe medirse en el navegador: F12, pestaña Lighthouse, solo Accessibility, Desktop.

| Versión | Accesibilidad | Captura |
|---|---|---|
| Original | _(anota aquí tu puntaje)_ | _(pega la captura)_ |
| Rediseñada | _(anota aquí tu puntaje; se espera 90 o más)_ | _(pega la captura)_ |

## 5. Historial de cambios

1. `Agrega version original de app-notas con problemas de UX` guarda el «antes».
2. `Redisena app-notas aplicando heuristicas de Nielsen y accesibilidad` guarda el «después».
3. `Agrega auditoria UX y README` documenta el proceso.

## 6. Enlaces

- Repositorio: _(pega aquí el enlace a tu repositorio)_
- Página publicada: _(pega aquí el enlace de GitHub Pages)_
