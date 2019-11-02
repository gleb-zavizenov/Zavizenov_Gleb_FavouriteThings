-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 02, 2019 at 03:01 PM
-- Server version: 5.7.26
-- PHP Version: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_favourite_things`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_main_page`
--

DROP TABLE IF EXISTS `tbl_main_page`;
CREATE TABLE IF NOT EXISTS `tbl_main_page` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(30) NOT NULL,
  `color` varchar(10) NOT NULL,
  `heading` varchar(30) NOT NULL,
  `subheading` varchar(30) NOT NULL,
  `description` text NOT NULL,
  `anchor` varchar(15) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_main_page`
--

INSERT INTO `tbl_main_page` (`ID`, `image`, `color`, `heading`, `subheading`, `description`, `anchor`) VALUES
(1, 'wine.png', '#FFFCFC', 'Rose wine', 'Any rose wine', 'Because no great story ever started with someone eating a salad', 'wine'),
(2, 'iphone.png', '#FFFFFF', 'iPhone 11 Pro', 'I like this one', 'It is expensive, but beauty requires sacrifice', 'iphone'),
(3, 'toblerone.png', '#FFFDF6', 'Toblerone', 'All products of this brand', 'An easy way to get to know dentists in your town', 'toblerone');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
