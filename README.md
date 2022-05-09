# Kata crud
Se desarrollo esta aplicacion tomando como base el código visto en https://www.youtube.com/watch?v=vqWvGgx_iXY, donde se implemento una lista de tareas (ToDo list) y fue publicado en el repositorio:
https://github.com/Sofka-XT/kata-crud-refactoring

Para ejecutar el proyecto es necesario crear una base de datos de mysql con nombre dbtodo, instalar los modulos mediante node para el fronted y agregar las dependencias mediante maven para el backend. Se deben modificar el usuario y la contraseña en application.properties para permitir la conection con su base de datos local.

**Importante: La rama master tuvo errores al elimnar por error todos los archivos relacionados con el contexto, hasta el momento no se pudieron correjir dentro de la rama. Usar porfavot los archivos de back y front de la rama dev donde se pudo restaurar a un commit antes del incidente.**

## Mejoras implementadas
Se realizaron las siguientes:
- Se conecto con una base de datos en mysql
- Se mejoro el estilo.
- Se arreglo un bug en el editado de tareas.
- Se implemento la funcionalidad de evitar que se creen todos vacios.
- Se implemento la funcionalidad de desabilitar el boton de editado una vez que la tarea fue terminada.

## video presentación

Se presenta una breve exposicion en video del trabajo en el siguiente enlace: https://drive.google.com/file/d/13Ppe56n4bSRHtR1yFKhzR1xh7rTFH_4v/view?usp=sharing





