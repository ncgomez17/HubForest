-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: mariadb
-- Tiempo de generación: 15-01-2024 a las 01:52:43
-- Versión del servidor: 10.4.21-MariaDB-1:10.4.21+maria~focal
-- Versión de PHP: 7.4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `HubForest`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `analisis`
--

CREATE TABLE `analisis` (
  `idanalisis` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `pmuestra` int(11) DEFAULT NULL,
  `manalisis` int(11) DEFAULT NULL,
  `mmanalisis` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `metodoalmacenamiento`
--

CREATE TABLE `metodoalmacenamiento` (
  `idmalmac` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` mediumtext DEFAULT NULL,
  `fichero` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `metodologia`
--

CREATE TABLE `metodologia` (
  `idmetodologia` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `fichero` varchar(150) DEFAULT NULL,
  `descripcion` mediumtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `metodologiaanalisis`
--

CREATE TABLE `metodologiaanalisis` (
  `idmanalisis` int(11) NOT NULL,
  `descripcion` mediumtext DEFAULT NULL,
  `fichero` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `metodomuestreo`
--

CREATE TABLE `metodomuestreo` (
  `idmmuestreo` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` mediumtext DEFAULT NULL,
  `fichero` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `modificacionmetododemuestreo`
--

CREATE TABLE `modificacionmetododemuestreo` (
  `idmmmuestreo` int(11) NOT NULL,
  `descripcion` mediumtext DEFAULT NULL,
  `fichero` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `modificacionmetodologiaanalisis`
--

CREATE TABLE `modificacionmetodologiaanalisis` (
  `idmmanalisis` int(11) NOT NULL,
  `descripcion` mediumtext DEFAULT NULL,
  `fichero` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `muestra`
--

CREATE TABLE `muestra` (
  `idmuestra` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `muestreo` int(11) DEFAULT NULL,
  `malmacec` int(11) DEFAULT NULL,
  `mmuestreo` int(11) DEFAULT NULL,
  `mmmuestreo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `muestreo`
--

CREATE TABLE `muestreo` (
  `idmuestreo` int(11) NOT NULL,
  `nombremuestreo` varchar(45) DEFAULT NULL,
  `fichero` varchar(150) DEFAULT NULL,
  `tipoubicacion` int(11) DEFAULT NULL,
  `proyecto` int(11) DEFAULT NULL,
  `metodologia` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `muestreorealizado`
--

CREATE TABLE `muestreorealizado` (
  `idmuestreor` int(11) NOT NULL,
  `fechamuestreo` datetime(1) DEFAULT NULL,
  `fichero` varchar(150) DEFAULT NULL,
  `usuario` int(11) DEFAULT NULL,
  `ubicacion` int(11) DEFAULT NULL,
  `muestreo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `parametro`
--

CREATE TABLE `parametro` (
  `idparametro` int(11) NOT NULL,
  `nombreparametro` varchar(45) DEFAULT NULL,
  `analisis` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permisos`
--

CREATE TABLE `permisos` (
  `idpermisos` int(11) NOT NULL,
  `usuario` int(11) DEFAULT NULL,
  `proyecto` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preparacionanalisis`
--

CREATE TABLE `preparacionanalisis` (
  `idpanalisis` int(11) NOT NULL,
  `descripcion` mediumtext DEFAULT NULL,
  `fichero` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `procesadomuestra`
--

CREATE TABLE `procesadomuestra` (
  `idpmuestra` int(11) NOT NULL,
  `descripcion` mediumtext DEFAULT NULL,
  `fichero` varchar(150) DEFAULT NULL,
  `muestra` int(11) DEFAULT NULL,
  `panalisis` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyecto`
--

CREATE TABLE `proyecto` (
  `idproyecto` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `fichero` varchar(150) DEFAULT NULL,
  `descripcion` mediumtext DEFAULT NULL,
  `encargado` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `proyecto`
--


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipoubicacion`
--

CREATE TABLE `tipoubicacion` (
  `idtipoubicacion` int(11) NOT NULL,
  `tipoubicacion` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ubicacion`
--

CREATE TABLE `ubicacion` (
  `idubicacion` int(11) NOT NULL,
  `latitud` varchar(45) DEFAULT NULL,
  `longitud` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `ubicacion`
--


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `unidad`
--

CREATE TABLE `unidad` (
  `idunidad` int(11) NOT NULL,
  `nombreunidad` varchar(45) DEFAULT NULL,
  `descripcion` mediumtext DEFAULT NULL,
  `parametro` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `correo` varchar(45) DEFAULT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `password` varchar(150) DEFAULT NULL,
  `rol` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuario`
--

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `analisis`
--
ALTER TABLE `analisis`
  ADD PRIMARY KEY (`idanalisis`),
  ADD KEY `manalisis_idx` (`manalisis`),
  ADD KEY `mmanalisis_idx` (`mmanalisis`),
  ADD KEY `pmuestra_idx` (`pmuestra`);

--
-- Indices de la tabla `metodoalmacenamiento`
--
ALTER TABLE `metodoalmacenamiento`
  ADD PRIMARY KEY (`idmalmac`);

--
-- Indices de la tabla `metodologia`
--
ALTER TABLE `metodologia`
  ADD PRIMARY KEY (`idmetodologia`);

--
-- Indices de la tabla `metodologiaanalisis`
--
ALTER TABLE `metodologiaanalisis`
  ADD PRIMARY KEY (`idmanalisis`);

--
-- Indices de la tabla `metodomuestreo`
--
ALTER TABLE `metodomuestreo`
  ADD PRIMARY KEY (`idmmuestreo`);

--
-- Indices de la tabla `modificacionmetododemuestreo`
--
ALTER TABLE `modificacionmetododemuestreo`
  ADD PRIMARY KEY (`idmmmuestreo`);

--
-- Indices de la tabla `modificacionmetodologiaanalisis`
--
ALTER TABLE `modificacionmetodologiaanalisis`
  ADD PRIMARY KEY (`idmmanalisis`);

--
-- Indices de la tabla `muestra`
--
ALTER TABLE `muestra`
  ADD PRIMARY KEY (`idmuestra`),
  ADD KEY `muestreo_idx` (`muestreo`),
  ADD KEY `malmac_idx` (`malmacec`),
  ADD KEY `mmuestreo_idx` (`mmuestreo`),
  ADD KEY `mmmuestreo_idx` (`mmmuestreo`);

--
-- Indices de la tabla `muestreo`
--
ALTER TABLE `muestreo`
  ADD PRIMARY KEY (`idmuestreo`),
  ADD KEY `tipoubicacion_idx` (`tipoubicacion`),
  ADD KEY `proyecto_idx` (`proyecto`),
  ADD KEY `metodologia_idx` (`metodologia`);

--
-- Indices de la tabla `muestreorealizado`
--
ALTER TABLE `muestreorealizado`
  ADD PRIMARY KEY (`idmuestreor`),
  ADD KEY `usuario_idx` (`usuario`),
  ADD KEY `ubicacion_idx` (`ubicacion`),
  ADD KEY `muestreo_idx` (`muestreo`);

--
-- Indices de la tabla `parametro`
--
ALTER TABLE `parametro`
  ADD PRIMARY KEY (`idparametro`),
  ADD KEY `analisis_idx` (`analisis`);

--
-- Indices de la tabla `permisos`
--
ALTER TABLE `permisos`
  ADD PRIMARY KEY (`idpermisos`),
  ADD KEY `usuario1_idx` (`usuario`);

--
-- Indices de la tabla `preparacionanalisis`
--
ALTER TABLE `preparacionanalisis`
  ADD PRIMARY KEY (`idpanalisis`);

--
-- Indices de la tabla `procesadomuestra`
--
ALTER TABLE `procesadomuestra`
  ADD PRIMARY KEY (`idpmuestra`),
  ADD KEY `muestra_idx` (`muestra`),
  ADD KEY `panalisis_idx` (`panalisis`);

--
-- Indices de la tabla `proyecto`
--
ALTER TABLE `proyecto`
  ADD PRIMARY KEY (`idproyecto`),
  ADD KEY `encargado_idx` (`encargado`);

--
-- Indices de la tabla `tipoubicacion`
--
ALTER TABLE `tipoubicacion`
  ADD PRIMARY KEY (`idtipoubicacion`);

--
-- Indices de la tabla `ubicacion`
--
ALTER TABLE `ubicacion`
  ADD PRIMARY KEY (`idubicacion`);

--
-- Indices de la tabla `unidad`
--
ALTER TABLE `unidad`
  ADD PRIMARY KEY (`idunidad`),
  ADD KEY `parametro_idx` (`parametro`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `analisis`
--
ALTER TABLE `analisis`
  MODIFY `idanalisis` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `metodoalmacenamiento`
--
ALTER TABLE `metodoalmacenamiento`
  MODIFY `idmalmac` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `metodologia`
--
ALTER TABLE `metodologia`
  MODIFY `idmetodologia` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `metodomuestreo`
--
ALTER TABLE `metodomuestreo`
  MODIFY `idmmuestreo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `modificacionmetododemuestreo`
--
ALTER TABLE `modificacionmetododemuestreo`
  MODIFY `idmmmuestreo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `muestra`
--
ALTER TABLE `muestra`
  MODIFY `idmuestra` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `muestreo`
--
ALTER TABLE `muestreo`
  MODIFY `idmuestreo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `muestreorealizado`
--
ALTER TABLE `muestreorealizado`
  MODIFY `idmuestreor` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `permisos`
--
ALTER TABLE `permisos`
  MODIFY `idpermisos` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `preparacionanalisis`
--
ALTER TABLE `preparacionanalisis`
  MODIFY `idpanalisis` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `procesadomuestra`
--
ALTER TABLE `procesadomuestra`
  MODIFY `idpmuestra` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `proyecto`
--
ALTER TABLE `proyecto`
  MODIFY `idproyecto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `tipoubicacion`
--
ALTER TABLE `tipoubicacion`
  MODIFY `idtipoubicacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `ubicacion`
--
ALTER TABLE `ubicacion`
  MODIFY `idubicacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `analisis`
--
ALTER TABLE `analisis`
  ADD CONSTRAINT `manalisis` FOREIGN KEY (`manalisis`) REFERENCES `metodologiaanalisis` (`idmanalisis`),
  ADD CONSTRAINT `mmanalisis` FOREIGN KEY (`mmanalisis`) REFERENCES `metodologiaanalisis` (`idmanalisis`),
  ADD CONSTRAINT `pmuestra` FOREIGN KEY (`pmuestra`) REFERENCES `procesadomuestra` (`idpmuestra`);

--
-- Filtros para la tabla `muestra`
--
ALTER TABLE `muestra`
  ADD CONSTRAINT `malmac` FOREIGN KEY (`malmacec`) REFERENCES `metodoalmacenamiento` (`idmalmac`),
  ADD CONSTRAINT `mmmuestreo` FOREIGN KEY (`mmmuestreo`) REFERENCES `modificacionmetododemuestreo` (`idmmmuestreo`),
  ADD CONSTRAINT `mmuestreo` FOREIGN KEY (`mmuestreo`) REFERENCES `metodomuestreo` (`idmmuestreo`),
  ADD CONSTRAINT `muestreo1` FOREIGN KEY (`muestreo`) REFERENCES `muestreo` (`idmuestreo`);

--
-- Filtros para la tabla `muestreo`
--
ALTER TABLE `muestreo`
  ADD CONSTRAINT `metodologia` FOREIGN KEY (`metodologia`) REFERENCES `metodologia` (`idmetodologia`),
  ADD CONSTRAINT `proyecto` FOREIGN KEY (`proyecto`) REFERENCES `proyecto` (`idproyecto`),
  ADD CONSTRAINT `tipoubicacion` FOREIGN KEY (`tipoubicacion`) REFERENCES `tipoubicacion` (`idtipoubicacion`);

--
-- Filtros para la tabla `muestreorealizado`
--
ALTER TABLE `muestreorealizado`
  ADD CONSTRAINT `muestreo` FOREIGN KEY (`muestreo`) REFERENCES `muestreo` (`idmuestreo`),
  ADD CONSTRAINT `ubicacion` FOREIGN KEY (`ubicacion`) REFERENCES `ubicacion` (`idubicacion`),
  ADD CONSTRAINT `usuario` FOREIGN KEY (`usuario`) REFERENCES `usuario` (`id`);

--
-- Filtros para la tabla `parametro`
--
ALTER TABLE `parametro`
  ADD CONSTRAINT `analisis` FOREIGN KEY (`analisis`) REFERENCES `analisis` (`idanalisis`);

--
-- Filtros para la tabla `permisos`
--
ALTER TABLE `permisos`
  ADD CONSTRAINT `proyecto1` FOREIGN KEY (`idpermisos`) REFERENCES `proyecto` (`idproyecto`),
  ADD CONSTRAINT `usuario1` FOREIGN KEY (`usuario`) REFERENCES `usuario` (`id`);

--
-- Filtros para la tabla `procesadomuestra`
--
ALTER TABLE `procesadomuestra`
  ADD CONSTRAINT `muestra` FOREIGN KEY (`muestra`) REFERENCES `muestra` (`idmuestra`),
  ADD CONSTRAINT `panalisis` FOREIGN KEY (`panalisis`) REFERENCES `preparacionanalisis` (`idpanalisis`);

--
-- Filtros para la tabla `proyecto`
--
ALTER TABLE `proyecto`
  ADD CONSTRAINT `encargado` FOREIGN KEY (`encargado`) REFERENCES `usuario` (`id`);

--
-- Filtros para la tabla `unidad`
--
ALTER TABLE `unidad`
  ADD CONSTRAINT `parametro` FOREIGN KEY (`parametro`) REFERENCES `parametro` (`idparametro`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
