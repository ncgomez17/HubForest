-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 06-05-2022 a las 14:06:57
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
-- DAMOS PERMISO USO Y BORRAMOS EL USUARIO QUE QUEREMOS CREAR POR SI EXISTE
--
GRANT USAGE ON * . * TO `reservaequipos`@`localhost`;
DROP USER `reservaequipos`@`localhost`;

--
-- CREAMOS EL USUARIO Y LE DAMOS PASSWORD,DAMOS PERMISO DE USO Y DAMOS PERMISOS SOBRE LA BASE DE DATOS.
--
CREATE USER IF NOT EXISTS `reservaequipos`@`localhost` IDENTIFIED BY 'A.1,B.2,C.3,D.4,E.5,G.6,H.7,I.8,J.9';
GRANT USAGE ON *.* TO `reservaequipos`@`localhost` REQUIRE NONE WITH MAX_QUERIES_PER_HOUR 0 MAX_CONNECTIONS_PER_HOUR 0 MAX_UPDATES_PER_HOUR 0 MAX_USER_CONNECTIONS 0;
GRANT ALL PRIVILEGES ON `reservaequipos`.* TO `reservaequipos`@`localhost` WITH GRANT OPTION;

-- --------------------------------------------------------

DROP DATABASE IF EXISTS `reservaequipos`;
CREATE DATABASE `reservaequipos` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
--
-- SELECCIONAMOS PARA USAR
--
USE `reservaequipos`;

-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `EQUIPO`
--

CREATE TABLE `EQUIPO` (
  `ID_EQUIPO` int(3) NOT NULL,
  `NOMBRE_EQUIPO` varchar(50) COLLATE utf8_bin NOT NULL,
  `DESCRIPCION_EQUIPO` varchar(1000) COLLATE utf8_bin NOT NULL,
  `EQUIPO_PRIVADO` enum('SI','NO') COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `EQUIPO`
--

INSERT INTO `EQUIPO` (`ID_EQUIPO`, `NOMBRE_EQUIPO`, `DESCRIPCION_EQUIPO`, `EQUIPO_PRIVADO`) VALUES
(1, 'A', 'A', 'NO'),
(2, 'Fermentador 50 L BIOSTAT D50', 'Modelo: Biostat D.\r\nFabricante: Sartorius.\r\nFermentador a escala piloto con un volumen total de 50 L esterilizable in situ. El fermentador está equipado con medidores digitales y sistemas de control, incluyendo temperatura, pH y oxígeno disuelto.\r\n\r\n▸ 50 L de volume útil.\r\n▸ Agitación mecánica: 50-700 rpm.\r\n▸ Entradas de aire, vapor y auga.\r\n▸ Electrodos de T, pH, pO2 y escuma.\r\n▸ Posibilidade de esterilización in situ\r\n▸ Sistema de control dixital (DCU) de las variables del proceso.', 'SI');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `EQUIPO`
--
ALTER TABLE `EQUIPO`
  ADD PRIMARY KEY (`ID_EQUIPO`);

ALTER TABLE `EQUIPO`
  MODIFY `ID_EQUIPO` int(3) NOT NULL AUTO_INCREMENT;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `FORMULARIO`
--

CREATE TABLE `FORMULARIO` (
  `ID_SOLICITUD` int(11) NOT NULL,
  `NOMBRE_SOLICITANTE` varchar(100) COLLATE utf8_bin NOT NULL,
  `TELEFONO_SOLICITANTE` varchar(9) COLLATE utf8_bin NOT NULL,
  `EMAIL_SOLICITANTE` varchar(60) COLLATE utf8_bin NOT NULL,
  `NOMBRE_RF` varchar(100) COLLATE utf8_bin NOT NULL,
  `GRUPO_RF` varchar(100) COLLATE utf8_bin NOT NULL,
  `CENTRO_RF` varchar(100) COLLATE utf8_bin NOT NULL,
  `ORGANISMO_RF` varchar(100) COLLATE utf8_bin NOT NULL,
  `CIF_RF` varchar(11) COLLATE utf8_bin NOT NULL,
  `DIRECCION_RF` varchar(100) COLLATE utf8_bin NOT NULL,
  `TELEFONO_RF` varchar(9) COLLATE utf8_bin NOT NULL,
  `EMAIL_RF` varchar(60) COLLATE utf8_bin NOT NULL,
  `NOMBRE_SERVICIO` varchar(100) COLLATE utf8_bin NOT NULL,
  `FECHA_INICIO_RF` date NOT NULL,
  `HORA_INICIO_RF` varchar(5) COLLATE utf8_bin NOT NULL,
  `FECHA_FIN_RF` date NOT NULL,
  `HORA_FIN_RF` varchar(5) COLLATE utf8_bin NOT NULL,
  `CONCEDIDA` enum('SI','NO') COLLATE utf8_bin NOT NULL,
  `FECHA_CONCESION` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `FORMULARIO`
--

INSERT INTO `FORMULARIO` (`ID_SOLICITUD`, `NOMBRE_SOLICITANTE`, `TELEFONO_SOLICITANTE`, `EMAIL_SOLICITANTE`, `NOMBRE_RF`, `GRUPO_RF`, `CENTRO_RF`, `ORGANISMO_RF`, `CIF_RF`, `DIRECCION_RF`, `TELEFONO_RF`, `EMAIL_RF`, `NOMBRE_SERVICIO`, `FECHA_INICIO_RF`, `HORA_INICIO_RF`, `FECHA_FIN_RF`, `HORA_FIN_RF`, `CONCEDIDA`, `FECHA_CONCESION`) VALUES
(1, 'Javier Rodeiro Iglesias', '988387020', 'jrodeiro@uvigo.es', 'Iago Fernández Díaz', 'Informática Gráfica y Multimedia (SI06)', 'Escola Superior Enxeñeria Informática', 'Universidade de Vigo', 'Q8650002B', 'Edificio Politécnico, Campus As Lagoas s/n 32004, Ourense', '988387000', 'esei@uvigo.es', 'CLARIFICADORA CENTRÍFUGA', '2022-05-15', '10:00', '2022-05-15', '12:00', 'SI', '0000-00-00');


ALTER TABLE `FORMULARIO`
  ADD PRIMARY KEY (`ID_SOLICITUD`);

ALTER TABLE `FORMULARIO`
  MODIFY `ID_SOLICITUD` int(11) NOT NULL AUTO_INCREMENT;

--
-- Estructura de tabla para la tabla `RESERVA`
--

CREATE TABLE `RESERVA` (
  `ID_RESERVA` int(11) NOT NULL,
  `CIF_RF` varchar(11) COLLATE utf8_bin NOT NULL,
  `FECHA_RESERVA` date NOT NULL,
  `TOTAL_DIAS_RESERVA` int(2) NOT NULL,
  `TOTAL_HORAS_RESERVA` int(3) NOT NULL,
  `IMPORTE_RESERVA_SINIVA` decimal(6,2) NOT NULL,
  `NUM_ALBARAN_RESERVA` varchar(20) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `RESERVA`
--
ALTER TABLE `RESERVA`
  ADD PRIMARY KEY (`ID_RESERVA`);

ALTER TABLE `RESERVA`
  MODIFY `ID_RESERVA` int(11) NOT NULL AUTO_INCREMENT;

--
-- Base de datos: `reservaequipos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `RESERVA_FORMULARIO`
--

CREATE TABLE `RESERVA_FORMULARIO` (
  `ID_SOLICITUD` int(11) NOT NULL,
  `ID_RESERVA` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `RESERVA_FORMULARIO`
--
ALTER TABLE `RESERVA_FORMULARIO`
  ADD PRIMARY KEY (`ID_SOLICITUD`,`ID_RESERVA`);


--
-- Estructura de tabla para la tabla `LINEAS_RESERVA`
--

CREATE TABLE `LINEAS_RESERVA` (
  `ID_RESERVA` int(11) NOT NULL,
  `ID_LINEA_RESERVA` int(11) NOT NULL,
  `CONCEPTO_LINEA_RESERVA` varchar(100) COLLATE utf8_bin NOT NULL,
  `ID_EQUIPO` int(11) NOT NULL,
  `UNIDAD_RESERVA` enum('DIA','HORA') COLLATE utf8_bin NOT NULL,
  `CANTIDAD_RESERVA` int(3) NOT NULL,
  `PRECIO_UNIDAD_RESERVA` decimal(6,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `LINEAS_RESERVA`
--
ALTER TABLE `LINEAS_RESERVA`
  ADD PRIMARY KEY (`ID_LINEA_RESERVA`);

ALTER TABLE `LINEAS_RESERVA`
  MODIFY `ID_LINEA_RESERVA` int(11) NOT NULL AUTO_INCREMENT;

  
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;