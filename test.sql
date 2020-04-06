-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 05-Abr-2020 às 23:22
-- Versão do servidor: 10.4.8-MariaDB
-- versão do PHP: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `test`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `fmxxx`
--

CREATE TABLE `fmxxx` (
  `date` varchar(10) NOT NULL,
  `id_form` int(11) NOT NULL,
  `autoconer` decimal(6,3) DEFAULT NULL,
  `urdideira` decimal(6,3) DEFAULT NULL,
  `fsg_eng` decimal(6,3) DEFAULT NULL,
  `fcg_eng` decimal(6,3) DEFAULT NULL,
  `fcg_tecelagem` decimal(6,3) DEFAULT NULL,
  `res_picanol` decimal(6,3) DEFAULT NULL,
  `res_itema` decimal(6,3) DEFAULT NULL,
  `varreduras` decimal(6,3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `fmxxx`
--

INSERT INTO `fmxxx` (`date`, `id_form`, `autoconer`, `urdideira`, `fsg_eng`, `fcg_eng`, `fcg_tecelagem`, `res_picanol`, `res_itema`, `varreduras`) VALUES
('2020-03-26', 1, '10.160', '2.600', '17.520', '25.440', '75.200', '10.000', '14.700', '23.600');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `fmxxx`
--
ALTER TABLE `fmxxx`
  ADD PRIMARY KEY (`id_form`),
  ADD UNIQUE KEY `date` (`date`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `fmxxx`
--
ALTER TABLE `fmxxx`
  MODIFY `id_form` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
