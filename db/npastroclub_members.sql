-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: npastroclub
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `members`
--

DROP TABLE IF EXISTS `members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `members` (
  `schoolid` int NOT NULL,
  `firstname` varchar(32) NOT NULL,
  `lastname` varchar(32) NOT NULL,
  `email` varchar(45) NOT NULL,
  `grade` int NOT NULL,
  `password` varchar(256) NOT NULL,
  `role` varchar(64) NOT NULL DEFAULT 'member',
  `status` tinyint(1) DEFAULT '1',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`schoolid`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `members`
--

LOCK TABLES `members` WRITE;
/*!40000 ALTER TABLE `members` DISABLE KEYS */;
INSERT INTO `members` VALUES (213422,'Mohammad','Polash','ggg@gmail.com',11,'$2b$10$DTIUElO2vmp0MM2s2Ltp6OGaGmuDigvBqk/CVn7boG5HZ9DrYTusK','admin',1,'2025-02-16 15:10:17','2025-02-16 17:44:28'),(269433,'User','5','use42r4@gmail.com',12,'$2b$10$DTIUElO2vmp0MM2s2Ltp6OGaGmuDigvBqk/CVn7boG5HZ9DrYTusK','member',1,'2025-02-16 17:46:04','2025-02-24 01:49:24'),(453344,'Test','Regular','regular@gmail.com',0,'$2b$10$DTIUElO2vmp0MM2s2Ltp6OE.CcOXyP62kwc1YAJoeGGRlGMqTHhfi','member',1,'2025-02-13 01:35:23','2025-06-04 00:06:29'),(465444,'Test','Admin','admin@gmail.com',0,'$2b$10$DTIUElO2vmp0MM2s2Ltp6OE.CcOXyP62kwc1YAJoeGGRlGMqTHhfi','admin',1,'2025-02-09 20:55:56','2025-02-15 18:00:36'),(654454,'Test','Regular 2','regular2@gmail.com',0,'$2b$10$DTIUElO2vmp0MM2s2Ltp6OE.CcOXyP62kwc1YAJoeGGRlGMqTHhfi','member',1,'2025-02-15 19:23:36','2025-02-15 19:23:36'),(657575,'dggd','fhgffg','gdhd@gmail.com',11,'$2b$10$DTIUElO2vmp0MM2s2Ltp6OE.CcOXyP62kwc1YAJoeGGRlGMqTHhfi','member',1,'2025-03-01 01:11:48','2025-03-01 01:11:48');
/*!40000 ALTER TABLE `members` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-09 22:07:13
