-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-11-2022 a las 23:10:57
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

-- --------------------------------------------------------

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `log_excepciones`
--

DROP TABLE IF EXISTS `log_excepciones`;
CREATE TABLE `log_excepciones` (
  `id_logExcepciones` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(48) NOT NULL,
  `tipo_excepcion` varchar(255) NOT NULL,
  `descripcion_excepcion` text NOT NULL,
  `fecha` date NOT NULL,
   PRIMARY KEY (`id_logExcepciones`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

DROP TABLE IF EXISTS `rol`;
CREATE TABLE `rol` (
  `id_rol` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_rol` varchar(32) NOT NULL,
  `descripcion_rol` text NOT NULL,
  `borrado_rol` int(11) NOT NULL,
  PRIMARY KEY (`id_rol`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `rol`
--

LOCK TABLES `rol` WRITE;
INSERT INTO `rol` (`id_rol`, `nombre_rol`, `descripcion_rol`, `borrado_rol`) VALUES
(1, 'Administrador', 'Contendrá a todos los responsables de administrar la aplicación', 0),
(2, 'Usuario', 'Contendrá a todas las personas registradas en la aplicación', 0),
(3, 'Gestor', 'Contendrá a todos los usuarios que sean responsables de una categoría', 0);
UNLOCK TABLES;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol_accion_funcionalidad`

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE `usuario` (
  `dni_usuario` varchar(9) NOT NULL,
  `usuario` varchar(48) NOT NULL,
  `passwd_usuario` varchar(32) NOT NULL,
  `borrado_usuario` int(11) NOT NULL,
  `id_rol` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

LOCK TABLES `usuario` WRITE;
INSERT INTO `usuario` (`dni_usuario`, `usuario`, `passwd_usuario`, `borrado_usuario`, `id_rol`) VALUES
('39514532A', 'miguel', '9eb0c9605dc81a68731f61b3e0838937', 0, 3),
('45146319X', 'fatima', 'b5d5f67b30809413156655abdda382a3', 0, 2),
('45146321N', 'anita1312', '83349cbdac695f3943635a4fd1aaa7d0', 0, 1);
UNLOCK TABLES;

--
-- Índices para tablas volcadas
--




--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD UNIQUE KEY `nombre_rol` (`nombre_rol`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`dni_usuario`),
  ADD UNIQUE KEY `usuario` (`usuario`),
  ADD KEY `id_rol_fk` (`id_rol`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `log_excepciones`
--
ALTER TABLE `log_excepciones`
  MODIFY `id_logExcepciones` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `id_rol` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;