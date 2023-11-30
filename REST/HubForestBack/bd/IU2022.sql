-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 19-09-2022 a las 16:06:44
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 7.4.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- DAMOS PERMISO USO Y BORRAMOS EL USUARIO QUE QUEREMOS CREAR POR SI EXISTE
--
GRANT USAGE ON * . * TO `IU2020`@`localhost`;
DROP USER `iu2022user`@`localhost`;

--
-- CREAMOS EL USUARIO Y LE DAMOS PASSWORD,DAMOS PERMISO DE USO Y DAMOS PERMISOS SOBRE LA BASE DE DATOS.
--
CREATE USER IF NOT EXISTS `iu2022user`@`localhost` IDENTIFIED BY 'iu2022pass';
GRANT USAGE ON *.* TO `iu2022user`@`localhost` REQUIRE NONE WITH MAX_QUERIES_PER_HOUR 0 MAX_CONNECTIONS_PER_HOUR 0 MAX_UPDATES_PER_HOUR 0 MAX_USER_CONNECTIONS 0;
GRANT ALL PRIVILEGES ON `IU2022`.* TO `iu2022user`@`localhost` WITH GRANT OPTION;

--
-- Base de datos: `IU2022`
--
DROP DATABASE IF EXISTS `IU2022`;
CREATE DATABASE IF NOT EXISTS `IU2022` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `IU2022`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `accion`
--

DROP TABLE IF EXISTS `accion`;
CREATE TABLE `accion` (
  `id_accion` int(11) NOT NULL,
  `nombre_accion` varchar(48) COLLATE utf8_bin NOT NULL,
  `descrip_accion` varchar(200) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `accion`
--

INSERT INTO `accion` (`id_accion`, `nombre_accion`, `descrip_accion`, `borrado_logico`) VALUES
(1, 'insertar', 'Insertar un elemento en base de datos', 0),
(2, 'borrar', 'Borrado de un elemento en base de datos', 0),
(3, 'editar', 'Editar un elemento en base de datos', 0),
(4, 'buscar', 'Buscar un elemento en base de datos', 0),
(5, 'reactivar', 'Reactivar un elemento borrado de forma lógica', 0),
(6, 'verEnDetalle', 'Ver toda la información para una tupla', 0),
(7, 'login', 'Logearse en el sistema', 0),
(8, 'registrar', 'Registrar una persona/usuario en el sistema', 0),
(9, 'obtenerContrasenaCorreo', 'Recuperar la contraseña de un usuario del sistema', 0),
(10, 'desconectar', 'Desconectar a un usuario del sistema', 0),
(11, 'editarContrasena', 'El usuario puede editar su contraseña y obtener un nuevo token', 0),
(12, 'verificacionUsuarioPermisosCargarHTML', 'Verificar si el usuario tiene permiso para cargar la información del la página HTML.', 0),
(13, 'funcionalidadesUsuario', 'Buscar las funcionalidades asociadas a un usuario.', 0),
(14, 'accionesFuncionalidad', 'Acciones correspondientes a una determinada funcionalidad.', 0),
(15, 'buscarPaginacion', 'Buscar tuplas con un tamaño de pagina para un numero de filas dado.', 0),
(16, 'ejecutarTest', 'El usuario tiene la posibilidad de ejecutar el test', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `funcionalidad`
--

DROP TABLE IF EXISTS `funcionalidad`;
CREATE TABLE `funcionalidad` (
  `id_funcionalidad` int(11) NOT NULL,
  `nombre_funcionalidad` varchar(48) COLLATE utf8_bin NOT NULL,
  `descrip_funcionalidad` varchar(200) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `funcionalidad`
--

INSERT INTO `funcionalidad` (`id_funcionalidad`, `nombre_funcionalidad`, `descrip_funcionalidad`, `borrado_logico`) VALUES
(1, 'persona', 'Gestión de personas', 0),
(2, 'usuario', 'Gestión de usuarios', 0),
(3, 'rol', 'Gestión de roles', 0),
(4, 'funcionalidad', 'Gestión de funcionalidades', 0),
(5, 'accion', 'Gestión de acciones', 0),
(6, 'rolaccionfuncionalidad', 'Gestión de Rol_Acción_Funcionalidad', 0),
(7, 'auth', 'Funcionalidad que contiene las acciones de login, registrar, recuperar y desconectar', 0),
(8, 'logExcepcionAcciones', 'Log de excepción de acciones', 0),
(9, 'logExcepcionAtributos', 'Log de excepción de atributos', 0),
(10, 'test', 'Ejecución de test', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `logexcepcionaccion`
--

DROP TABLE IF EXISTS `logexcepcionaccion`;
CREATE TABLE `logexcepcionaccion` (
  `id` int(11) COLLATE utf8_bin NOT NULL AUTO_INCREMENT,
  `usuario` varchar(15) COLLATE utf8_bin NOT NULL,
  `funcionalidad` varchar(200) COLLATE utf8_bin NOT NULL,
  `accion` varchar(200) COLLATE utf8_bin NOT NULL,
  `codigo` varchar(200) COLLATE utf8_bin NOT NULL,
  `mensaje` varchar(200) COLLATE utf8_bin NOT NULL,
  `tiempo` varchar(200) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `logexcepcionaccion`
--



-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `logexcepcionatributo`
--

DROP TABLE IF EXISTS `logexcepcionatributo`;
CREATE TABLE `logexcepcionatributo` (
  `id` int(11) COLLATE utf8_bin NOT NULL AUTO_INCREMENT,
  `usuario` varchar(200) COLLATE utf8_bin NOT NULL,
  `funcionalidad` varchar(200) COLLATE utf8_bin NOT NULL,
  `accion` varchar(200) COLLATE utf8_bin NOT NULL,
  `codigo` varchar(200) COLLATE utf8_bin NOT NULL,
  `mensaje` varchar(200) COLLATE utf8_bin NOT NULL,
  `tiempo` varchar(200) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `logexcepcionatributo`
--



-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

DROP TABLE IF EXISTS `persona`;
CREATE TABLE `persona` (
  `dni` varchar(9) COLLATE utf8_bin NOT NULL,
  `nombre_persona` varchar(45) COLLATE utf8_bin NOT NULL,
  `apellidos_persona` varchar(100) COLLATE utf8_bin NOT NULL,
  `fechaNacimiento_persona` date NOT NULL,
  `direccion_persona` varchar(200) COLLATE utf8_bin NOT NULL,
  `telefono_persona` varchar(9) COLLATE utf8_bin NOT NULL,
  `email_persona` varchar(45) COLLATE utf8_bin NOT NULL,
  `foto_persona` varchar(100) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`dni`, `nombre_persona`, `apellidos_persona`, `fechaNacimiento_persona`, `direccion_persona`, `telefono_persona`, `email_persona`, `foto_persona`, `borrado_logico`) VALUES
('34888012W', 'superAdministrador', 'superAdministrador superAdministrador', '1970-01-01', 'su casa', '988387020', 'admin@admin.es', '/fotos/admin.png', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

DROP TABLE IF EXISTS `rol`;
CREATE TABLE `rol` (
  `id_rol` int(11) NOT NULL,
  `rol_name` varchar(48) COLLATE utf8_bin NOT NULL,
  `rol_description` varchar(200) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`id_rol`, `rol_name`, `rol_description`, `borrado_logico`) VALUES
(1, 'comprador', 'Rol destinado a la reserva de productos de los vendedores', 0),
(2, 'vendedor', 'Rol destinado a la publicación de productos dentro de los escaparates de las tiendas', 0),
(3, 'administrador', 'Rol que dispone de todas las funcionalidades de usuario y vendedor', 0),
(4, 'superadministrador', 'Rol que posee todas las funcionalidades de administrador y la gestión de estos', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rolaccionfuncionalidad`
--

DROP TABLE IF EXISTS `rolaccionfuncionalidad`;
CREATE TABLE `rolaccionfuncionalidad` (
  `id_rol` int(11) NOT NULL,
  `id_accion` int(11) NOT NULL,
  `id_funcionalidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `rolaccionfuncionalidad`
--

INSERT INTO `rolaccionfuncionalidad` (`id_rol`, `id_accion`, `id_funcionalidad`) VALUES
(1, 11, 2),
(2, 11, 2),
(3, 11, 2),
(4, 1, 1),
(4, 1, 2),
(4, 1, 3),
(4, 16, 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `session`
--

DROP TABLE IF EXISTS `session`;
CREATE TABLE `session` (
  `LOGIN_USUARIO` varchar(15) COLLATE utf8_bin NOT NULL,
  `TOKEN_SESSION` varchar(400) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `session`
--

INSERT INTO `session` (`LOGIN_USUARIO`, `TOKEN_SESSION`) VALUES
('superAdmin', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTE0OTQ2MDYsImp0aSI6IkRTV3FacUVvVG5ZMk1zclNLU2w1RFVwOWczNHpSWGtrUE94ZXljQm96VTg9IiwiaXNzIjoiaHR0cDpcL1wvbG9jYWxob3N0IiwiZXhwIjoxNjUxNTAxODA2LCJkYXRhIjp7ImlkIjoiMjEyMzJmMjk3YTU3YTVhNzQzODk0YTBlNGE4MDFmYzMiLCJuYW1lIjoic3VwZXJBZG1pbiJ9fQ.CLu47WdTD_Y184evttfck2W7Q-cYaCpJ3o4E6tSPjv0'),
('superAdmin', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTE0OTY1OTAsImp0aSI6InBrT2FSblZNRFc5Wm5wVVFXOUxkWGY0dzY1cngyOUgzQWFlUEc4SldWYnc9IiwiaXNzIjoiaHR0cDpcL1wvbG9jYWxob3N0IiwiZXhwIjoxNjUxNTAzNzkwLCJkYXRhIjp7ImlkIjoiMjEyMzJmMjk3YTU3YTVhNzQzODk0YTBlNGE4MDFmYzMiLCJuYW1lIjoic3VwZXJBZG1pbiJ9fQ.AmoN50876P4_0j_nVWDxZ7zK9ij5l2RdP6Xhbac3BFw');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE `usuario` (
  `dni` varchar(9) COLLATE utf8_bin NOT NULL,
  `usuario` varchar(45) COLLATE utf8_bin NOT NULL,
  `contrasena` varchar(45) COLLATE utf8_bin NOT NULL,
  `id_rol` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`dni`, `usuario`, `contrasena`, `id_rol`, `borrado_logico`) VALUES
('34888012W', 'superAdmin', '21232f297a57a5a743894a0e4a801fc3', 4, 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `accion`
--
ALTER TABLE `accion`
  ADD PRIMARY KEY (`id_accion`),
  ADD KEY `id_accion` (`id_accion`);

--
-- Indices de la tabla `funcionalidad`
--
ALTER TABLE `funcionalidad`
  ADD PRIMARY KEY (`id_funcionalidad`),
  ADD KEY `id_funcionalidad` (`id_funcionalidad`);

--
-- Indices de la tabla `logexcepcionaccion`
--
ALTER TABLE `logexcepcionaccion`
  ADD PRIMARY KEY (`usuario`,`tiempo`);

--
-- Indices de la tabla `logexcepcionatributo`
--
ALTER TABLE `logexcepcionatributo`
  ADD PRIMARY KEY (`usuario`,`tiempo`);

--
-- Indices de la tabla `persona`
--
ALTER TABLE `persona`
  ADD PRIMARY KEY (`dni`),
  ADD KEY `dni` (`dni`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`id_rol`),
  ADD KEY `id_rol` (`id_rol`),
  ADD KEY `id_rol_2` (`id_rol`);

--
-- Indices de la tabla `rolaccionfuncionalidad`
--
ALTER TABLE `rolaccionfuncionalidad`
  ADD PRIMARY KEY (`id_rol`,`id_accion`,`id_funcionalidad`),
  ADD KEY `id_rol` (`id_rol`),
  ADD KEY `id_accion` (`id_accion`),
  ADD KEY `id_funcionalidad` (`id_funcionalidad`);

--
-- Indices de la tabla `session`
--
ALTER TABLE `session`
  ADD PRIMARY KEY (`TOKEN_SESSION`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`usuario`),
  ADD KEY `id_rol` (`id_rol`),
  ADD KEY `dni` (`dni`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `accion`
--
ALTER TABLE `accion`
  MODIFY `id_accion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;

--
-- AUTO_INCREMENT de la tabla `funcionalidad`
--
ALTER TABLE `funcionalidad`
  MODIFY `id_funcionalidad` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `id_rol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=370;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `rolaccionfuncionalidad`
--
ALTER TABLE `rolaccionfuncionalidad`
  ADD CONSTRAINT `rolaccionfuncionalidad_ibfk_1` FOREIGN KEY (`id_rol`) REFERENCES `rol` (`id_rol`),
  ADD CONSTRAINT `rolaccionfuncionalidad_ibfk_2` FOREIGN KEY (`id_funcionalidad`) REFERENCES `funcionalidad` (`id_funcionalidad`),
  ADD CONSTRAINT `rolaccionfuncionalidad_ibfk_3` FOREIGN KEY (`id_accion`) REFERENCES `accion` (`id_accion`);

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `dni` FOREIGN KEY (`dni`) REFERENCES `persona` (`dni`),
  ADD CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`id_rol`) REFERENCES `rol` (`id_rol`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
