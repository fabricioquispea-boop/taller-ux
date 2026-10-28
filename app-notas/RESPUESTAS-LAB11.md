# Respuestas para el Word del Laboratorio 11

Copia cada respuesta en las líneas del documento. Ajusta con tus palabras lo que quieras.

## a Diferencia entre UX y UI, con un ejemplo

La UX es qué tan fácil y útil resulta lograr algo en la app, y la UI es cómo se ve y qué se toca en la pantalla. En mi app de notas, el botón «Deshacer» que aparece al eliminar una nota fue un cambio de UX, porque evita perder información por un clic equivocado y cambia el flujo de la tarea. En cambio, hacer el botón «Agregar nota» azul, grande y relleno, frente al botón «Limpiar formulario» que solo tiene borde, fue un cambio de UI, porque modifica cómo se ve y qué destaca. Las dos cosas se complementan: de poco sirve una pantalla bonita si el flujo confunde, y de poco sirve un buen flujo si no se distingue dónde pulsar.

## b ¿Por qué un placeholder no reemplaza a un label?

Porque el placeholder desaparece en cuanto la persona empieza a escribir, mientras que el label siempre queda visible. Con solo placeholder, quien escribe tiene que recordar qué dato iba en cada campo, y eso incumple la heurística **Reconocer, no recordar**. Además provoca un problema de accesibilidad: los lectores de pantalla no siempre anuncian el placeholder como nombre del campo, y el texto gris claro suele tener poco contraste, por lo que una persona con baja visión o con un lector de pantalla no sabe qué escribir. Con `<label for="id">` el campo tiene nombre accesible y, además, al hacer clic en la etiqueta el cursor entra al campo.

## c Fitts, Hick y Miller en el formulario

- **Fitts:** el botón «Agregar nota» es grande (`flex: 1`, mínimo 44 px de alto) y está separado 24 px de «Limpiar formulario», así se alcanza rápido y no se confunde con el otro.
- **Hick:** las 11 categorías sueltas se agruparon en 3 `optgroup`, así la decisión es más rápida porque se elige primero el grupo.
- **Miller:** el formulario se dividió en dos bloques numerados de uno o dos campos, lo que reduce la carga de memoria.

## d ¿Por qué es mala idea escribir `outline: none` en el CSS?

Porque elimina el borde que indica qué elemento está activo al navegar con la tecla Tab, y sin ese indicador la persona no sabe dónde está. Se ven más afectadas las personas que no usan mouse: quienes tienen discapacidad motriz, quienes usan teclado o dispositivos de apoyo, y también quienes tienen baja visión. Lo resolví eliminando esa regla y definiendo `:focus-visible { outline: 3px solid #f59e0b; outline-offset: 2px; }`, que dibuja un borde naranja de 3 px solo cuando se navega con el teclado.

## OBSERVACIONES

- Los problemas de usabilidad de la versión original no aparecían en la consola: el código funcionaba, pero la interfaz era difícil de usar. Por eso fue necesario auditarla con las heurísticas.
- Deshabilitar el botón «Agregar nota» hasta tener datos válidos previene la nota vacía, pero hay que acordarse de usar `trim()` para que los espacios en blanco no cuenten como contenido.
- Al eliminar una nota, el mensaje con «Deshacer» no debe desaparecer solo, porque la persona necesita tiempo para decidir. Los mensajes de éxito sí se ocultan a los 4 segundos.
- Los mensajes de error y de éxito necesitan `role="status"` para que el lector de pantalla los anuncie.

## CONCLUSIONES

- Auditar antes de programar me permitió saber qué cambiar y por qué, en lugar de cambiar colores al azar. Con la tabla de siete problemas delante, cada cambio en el código tuvo una justificación.
- Lo que más mejoró la app fue la prevención de errores y el control del usuario: no poder agregar notas vacías y poder deshacer una eliminación evitan los problemas más molestos.
- Una opinión crítica: Lighthouse solo revisa lo que una máquina puede comprobar, así que un puntaje alto no reemplaza la prueba de teclado ni probar la página en el celular. Además, el rediseño cumple las reglas de contraste y tamaño, pero no lo probé con usuarios reales, y eso sería el siguiente paso.
