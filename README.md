# HubForest
Gestionar las fases y estados de un proyecto de investigación forestal sobre la calidad del suelo y saber la localización de las muestras recogidas, desde la subida de datos a partir de un CSV con las muestras realizadas hasta un completo registro de todos los datos sobre las muestras realizadas en todas las localizaciones posibles.

# Arquitectura
La arquitectura del proyecto está compuesta de dos partes: la parte de Backend en PHP y la parte de Frontend en HTML/CSS/JS

# Instalación
Para poder instalar el proyecto se necesita contar con Docker para poder levantar el contenedor con el entorno de desarrollo con las siguientes características:

- MariaDB: versión 10.4.21
- PHPMyAdmin: versión 5.1.1
- Servidor Apache
- PHP: versión 8.0

Para poder levantar este entorno en docker tenemos que ejecutar los siguientes comandos:

---------------------------------------

```bash
docker-compose build
```
Comando que compila el proyecto

```bash
docker-compose up
```
Comando que levanta un contenedor con el entorno del proyecto