# HubForest
Gestionar las fases y estados de un proyecto de investigación forestal sobre la calidad del suelo y saber la localización de las muestras recogidas, desde la subida de datos a partir de un CSV con las muestras realizadas hasta un completo registro de todos los datos sobre las muestras realizadas en todas las localizaciones posibles.

# Arquitectura
La arquitectura del proyecto está compuesta de dos partes: la parte de Backend en PHP y la parte de Frontend en HTML/CSS/JS

# Instalación
Para poder instalar el proyecto se necesita contar con Docker para poder levantar el contenedor con el entorno de desarrollo con las siguientes características:

- MariaDB: versión 10.4.21
- PHPMyAdmin: versión 5.1.1
- Servidor Apache
- PHP: versión 7.0

Para poder levantar este entorno en docker tenemos que tener docker instalado en nuestro sistema operativo entrando en la [documentación de Docker](https://docs.docker.com/get-docker/)

Podemos descargarnos el proyecto actualizado según la versión (tag) con la que contemos. En el caso de la primera entrega, tenemos u na tag v0.1, en la cual tenemos el código disponible hasta la primera entrega del proyecto. Se accede a esa tag y se descarga el código fuente (en zip o tar.gz). Una vez se descargue, se descomprime y se abre.

---------------------------------------

Una vez tenemos docker instalado, ejecutar los siguientes comandos para la instalación de nuestro proyecto:

Comando que compila el proyecto
```bash
docker-compose build
```

Comando que levanta un contenedor con el entorno del proyecto
```bash
docker-compose up
```

---------------------------------------

Se puede acceder a PHPMyAdmin a través de http://localhost:8081/. De hecho habrá que hacerlo tras arrancar el docker del proyecto, ya que se creará la base de datos importando el código SQL del fichero HubForest.sql, que se encuentra en la carpeta REST/HubForestBack/bd/. Una vez creada la estructura de la base de datos a partir de esta importación, podemos acceder a la página web de nuestro proyecto.

Para poder acceder a nuestro proyecto desde el navegador, debemos acceder al enlace http://localhost:8080/HubForestView/index.html