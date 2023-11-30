-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 19-05-2023 a las 10:15:54
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `IUtest`
--

-- DROP DATABASE IF EXISTS `IUtest1`;

CREATE DATABASE IF NOT EXISTS `IUtest1` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `IUtest1`;

--
-- DAMOS PERMISO USO Y BORRAMOS EL USUARIO QUE QUEREMOS CREAR POR SI EXISTE
--
GRANT USAGE ON * . * TO `IUtest1`@`localhost`;
-- DROP USER `iuuser`@`localhost`;

--
-- CREAMOS EL USUARIO Y LE DAMOS PASSWORD,DAMOS PERMISO DE USO Y DAMOS PERMISOS SOBRE LA BASE DE DATOS.
--
CREATE USER IF NOT EXISTS `iuuser`@`localhost` IDENTIFIED BY 'iupass';
GRANT USAGE ON *.* TO `iuuser`@`localhost` REQUIRE NONE WITH MAX_QUERIES_PER_HOUR 0 MAX_CONNECTIONS_PER_HOUR 0 MAX_UPDATES_PER_HOUR 0 MAX_USER_CONNECTIONS 0;
GRANT ALL PRIVILEGES ON `IUtest1`.* TO `iuuser`@`localhost` WITH GRANT OPTION;



-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `accion`
--

CREATE TABLE `accion` (
  `id_accion` int(11) NOT NULL,
  `nombre_accion` varchar(48) COLLATE utf8_bin NOT NULL,
  `descrip_accion` varchar(200) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `accion`
--

INSERT INTO `accion` (`id_accion`, `nombre_accion`, `descrip_accion`) VALUES
(1, 'ADD', 'Acción ADD'),
(2, 'EDIT', 'Accion EDIT'),
(3, 'DELETE', 'Acción DELETE'),
(4, 'SEARCH', 'Acción SEARCH'),
(5, 'LOGIN', 'Acción Login'),
(6, 'REGISTRAR', 'Acción Registrar'),
(7, 'CAMBIAR_CONTRASENA', 'Acción cambiar_contrasena');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `funcionalidad`
--

CREATE TABLE `funcionalidad` (
  `id_funcionalidad` int(11) NOT NULL,
  `nombre_funcionalidad` varchar(48) COLLATE utf8_bin NOT NULL,
  `descrip_funcionalidad` varchar(200) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `funcionalidad`
--

INSERT INTO `funcionalidad` (`id_funcionalidad`, `nombre_funcionalidad`, `descrip_funcionalidad`) VALUES
(1, 'accion', 'Funcionalidad accion'),
(2, 'AUTH', 'Funcionalidad para usuario no registrado'),
(3, 'funcionalidad', 'Funcionalidad que registra las entidades'),
(4, 'funcionalidad_accion', 'acciones de funcionalidad permitidas'),
(5, 'persona', 'Funcionalidad persona'),
(6, 'rol', 'Funcionalidad rol'),
(7, 'rolaccionfuncionalidad', 'Funcionalidad rolaccionfuncionalidad'),
(8, 'usuario', 'Funcionalidad usuario');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `funcionalidad_accion`
--

CREATE TABLE `funcionalidad_accion` (
  `id_funcionalidad` int(11) NOT NULL,
  `id_accion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `funcionalidad_accion`
--

INSERT INTO `funcionalidad_accion` (`id_funcionalidad`, `id_accion`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(2, 5),
(2, 6),
(2, 7),
(3, 1),
(3, 2),
(3, 3),
(3, 4),
(4, 1),
(4, 2),
(4, 3),
(4, 4),
(5, 1),
(5, 2),
(5, 3),
(5, 4),
(6, 1),
(6, 3),
(6, 4),
(7, 1),
(7, 2),
(7, 3),
(7, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `log`
--

CREATE TABLE `log` (
  `usuario` varchar(40) NOT NULL,
  `controlador` varchar(40) NOT NULL,
  `action` varchar(40) NOT NULL,
  `query` varchar(200) NOT NULL,
  `codigorespuesta` varchar(40) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `logexcepcionaccion`
--

CREATE TABLE `logexcepcionaccion` (
  `usuario` varchar(15) COLLATE utf8_bin NOT NULL,
  `funcionalidad` varchar(200) COLLATE utf8_bin NOT NULL,
  `accion` varchar(200) COLLATE utf8_bin NOT NULL,
  `codigo` varchar(200) COLLATE utf8_bin NOT NULL,
  `mensaje` varchar(200) COLLATE utf8_bin NOT NULL,
  `tiempo` varchar(200) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `logexcepcionatributo`
--

CREATE TABLE `logexcepcionatributo` (
  `usuario` varchar(200) COLLATE utf8_bin NOT NULL,
  `funcionalidad` varchar(200) COLLATE utf8_bin NOT NULL,
  `accion` varchar(200) COLLATE utf8_bin NOT NULL,
  `codigo` varchar(200) COLLATE utf8_bin NOT NULL,
  `mensaje` varchar(200) COLLATE utf8_bin NOT NULL,
  `tiempo` varchar(200) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `id_rol` int(11) NOT NULL,
  `rol_name` varchar(48) COLLATE utf8_bin NOT NULL,
  `rol_description` varchar(200) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`id_rol`, `rol_name`, `rol_description`) VALUES
(0, 'admin', 'administrador'),
(1, 'usuario', 'Usuario base');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rolaccionfuncionalidad`
--

CREATE TABLE `rolaccionfuncionalidad` (
  `id_rol` int(11) NOT NULL,
  `id_accion` int(11) NOT NULL,
  `id_funcionalidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `rolaccionfuncionalidad`
--

INSERT INTO `rolaccionfuncionalidad` (`id_rol`, `id_accion`, `id_funcionalidad`) VALUES
(0, 1, 1),
(0, 1, 3),
(0, 1, 4),
(0, 1, 5),
(0, 1, 6),
(0, 1, 7),
(0, 2, 1),
(0, 2, 3),
(0, 2, 4),
(0, 2, 5),
(0, 2, 7),
(0, 3, 1),
(0, 3, 3),
(0, 3, 4),
(0, 3, 5),
(0, 3, 6),
(0, 3, 7),
(0, 4, 1),
(0, 4, 3),
(0, 4, 4),
(0, 4, 5),
(0, 4, 6),
(0, 4, 7),
(0, 5, 2),
(0, 6, 2),
(0, 7, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `dni` varchar(9) COLLATE utf8_bin NOT NULL,
  `usuario` varchar(45) COLLATE utf8_bin NOT NULL,
  `contrasena` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `id_rol` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

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
-- Indices de la tabla `funcionalidad_accion`
--
ALTER TABLE `funcionalidad_accion`
  ADD PRIMARY KEY (`id_funcionalidad`,`id_accion`);

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
  ADD UNIQUE KEY `email_persona` (`email_persona`),
  ADD UNIQUE KEY `telefono_persona` (`telefono_persona`),
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
  ADD KEY `id_accion` (`id_accion`,`id_funcionalidad`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`usuario`),
  ADD KEY `dni` (`dni`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `accion`
--
ALTER TABLE `accion`
  MODIFY `id_accion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `funcionalidad`
--
ALTER TABLE `funcionalidad`
  MODIFY `id_funcionalidad` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `id_rol` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`dni`) REFERENCES `persona` (`dni`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
