-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 15, 2026 at 06:22 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `camsociety`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'adnan@admin.com', NULL, '$2y$12$hHgVtc.8sno9LWYsuMII/OA07nPGRCdX3aL.SOZonMr4Uj1x/TSzi', NULL, '2025-01-24 10:56:03', '2025-01-24 10:56:03');

-- --------------------------------------------------------

--
-- Table structure for table `blogntips`
--

CREATE TABLE `blogntips` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `blogntips`
--

INSERT INTO `blogntips` (`id`, `title`, `content`, `image`, `user_id`, `created_at`, `updated_at`) VALUES
(4, 'বিবাহের ফটোগ্রাফি হল নিরবধি মুহূর্তগুলি ক্যাপচার করা। আপনাকে সেরা শট পেতে সাহায্য করার জন্য এখানে কিছু ব্যবহারিক টিপস রয়েছে:', 'মূল মুহূর্তের জন্য প্রস্তুত হতে ইভেন্টের সময়সূচী বুঝে নিন।\r\nSoft and Flattering ছবি তৈরি করতে যখনই সম্ভব প্রাকৃতিক আলো ব্যবহার করুন।\r\nCandid মুহূর্তগুলি ক্যাপচার করার উপর ফোকাস করুন, শুধু পোজ করা নয়।\r\nসৃজনশীল শট জন্য বিভিন্ন কোণ সঙ্গে পরীক্ষা.\r\nপ্রযুক্তিগত সমস্যা এড়াতে সর্বদা একটি ব্যাকআপ ক্যামেরা এবং ব্যাটারি রাখুন।', 'blog_images/gTVhb2SSqo0nWZ3Ez2R5tyhJgje7QO6RiJs6EEEp.png', 1, '2025-01-28 13:12:12', '2025-01-28 13:12:12'),
(5, '5 Tricks for Outdoor Portraits', 'Here are some tricks to take stunning outdoor portraits:\r\n\r\nUse the golden hour for soft and warm light.\r\nExperiment with bokeh by using a wide aperture.\r\nConsider your background to enhance the subject.\r\nCapture candid moments to convey emotions.\r\nMake use of natural surroundings for a more dynamic composition.', 'blog_images/9JlGHWKdrUmGAl3TzZKg4yjZNN4ZICKbIHzoQ4wJ.png', 1, '2025-01-28 13:13:37', '2025-01-28 13:13:37'),
(6, 'sdfsdfas', 'adfafasdfas', 'blog_images/W0p3KcJHpTg9oaI8kOAOj2ysXq9Xi1iRw6zWMsRt.jpg', 1, '2025-01-31 09:37:17', '2025-01-31 09:37:17');

-- --------------------------------------------------------

--
-- Table structure for table `book_events`
--

CREATE TABLE `book_events` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `event_name` varchar(255) NOT NULL,
  `created_by` bigint(20) UNSIGNED NOT NULL,
  `address` varchar(255) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL,
  `rate` int(11) NOT NULL,
  `description` text NOT NULL,
  `photo_url` varchar(255) DEFAULT NULL,
  `hiring_status` enum('open','closed') NOT NULL DEFAULT 'open',
  `application_count` tinyint(3) UNSIGNED NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `book_events`
--

INSERT INTO `book_events` (`id`, `event_name`, `created_by`, `address`, `start_date`, `end_date`, `start_time`, `end_time`, `rate`, `description`, `photo_url`, `hiring_status`, `application_count`, `created_at`, `updated_at`) VALUES
(1, 'Gaye Holud Shoot', 4, 'Chawkbazar, Cumilla', '2026-04-29', '2026-05-17', '13:08:00', '22:44:00', 4000, 'Need a professional photographer for a premium shoot. Experience in similar events is required. Please share your portfolio when applying. Minus eaque sequi fugit illo corporis.', 'https://loremflickr.com/600/400/wedding,photography,bangladesh?lock=1072', 'open', 32, '2026-03-11 10:46:59', '2026-03-11 10:46:59'),
(2, 'Fashion Show Coverage', 25, 'Zindabazar, Sylhet', '2026-04-14', '2026-06-02', '15:26:00', '14:36:00', 7400, 'Looking for a reliable photographer to cover our program. Need full event coverage including guest photos and key moments. Quick delivery of edited photos is expected. Aut voluptates ducimus et consectetur perspiciatis dolores.', 'https://loremflickr.com/600/400/fashion,runway,bangladesh?lock=6916', 'closed', 0, '2026-03-11 10:46:59', '2026-03-11 10:46:59'),
(3, 'Concert / Live Music Photography', 12, 'Sadar Road, Barisal', '2026-04-11', '2026-05-28', '07:52:00', '05:27:00', 11500, 'Need a professional photographer for a premium shoot. Experience in similar events is required. Please share your portfolio when applying. Dolor similique qui quidem aspernatur provident nam praesentium.', 'https://loremflickr.com/600/400/concert,music,bangladesh?lock=8015', 'open', 31, '2026-03-11 10:46:59', '2026-03-11 10:46:59'),
(4, 'Corporate Event Photography', 10, 'Sadar Road, Barisal', '2026-03-15', '2026-06-01', '08:32:00', '03:22:00', 17800, 'We are looking for an experienced photographer for our upcoming event. The photographer should have their own professional gear and handle both raw and edited photo delivery within 3 days. Nemo quis ut enim.', 'https://loremflickr.com/600/400/corporate,event,bangladesh?lock=6712', 'closed', 35, '2026-03-11 10:46:59', '2026-03-11 10:46:59'),
(5, 'Newborn Baby Portrait', 20, 'Shibbari, Khulna', '2026-04-16', '2026-05-16', '03:56:00', '13:00:00', 4400, 'We are looking for an experienced photographer for our upcoming event. The photographer should have their own professional gear and handle both raw and edited photo delivery within 3 days. Ipsa natus quam corrupti excepturi velit dolorum ipsum.', 'https://loremflickr.com/600/400/baby,maternity,bangladesh?lock=3488', 'open', 11, '2026-03-11 10:46:59', '2026-03-11 10:46:59'),
(6, 'Wedding Photography', 26, 'Chawkbazar, Cumilla', '2026-03-21', '2026-05-23', '19:11:00', '09:34:00', 8500, 'We need a skilled photographer for an outdoor shoot. Must be good at natural light photography. drone photography capability is a bonus. Ea molestias laboriosam ut neque officia.', 'https://loremflickr.com/600/400/wedding,photography,bangladesh?lock=8328', 'closed', 37, '2026-03-11 10:46:59', '2026-03-11 10:46:59'),
(7, 'Gaye Holud Shoot', 26, 'Gulshan, Dhaka', '2026-05-03', '2026-05-31', '06:54:00', '09:52:00', 9200, 'We are looking for an experienced photographer for our upcoming event. The photographer should have their own professional gear and handle both raw and edited photo delivery within 3 days. Ut eveniet officia quia alias saepe.', 'https://loremflickr.com/600/400/wedding,photography,bangladesh?lock=8620', 'closed', 9, '2026-03-11 10:46:59', '2026-03-11 10:46:59'),
(8, 'Fashion Show Coverage', 10, 'Agrabad, Chattogram', '2026-04-16', '2026-06-06', '13:11:00', '09:35:00', 5600, 'Need a professional photographer for a premium shoot. Experience in similar events is required. Please share your portfolio when applying. Vel qui nam omnis expedita.', 'https://loremflickr.com/600/400/fashion,runway,bangladesh?lock=8724', 'open', 8, '2026-03-11 10:46:59', '2026-03-11 10:46:59'),
(9, 'Birthday Party Coverage', 27, 'Agrabad, Chattogram', '2026-04-01', '2026-05-12', '03:07:00', '12:15:00', 17200, 'Seeking a creative photographer to capture candid moments. Lighting equipment is a plus. Expected to cover the entire duration of the event. Ea sed nobis ut qui.', 'https://loremflickr.com/600/400/birthday,party,bangladesh?lock=638', 'open', 17, '2026-03-11 10:46:59', '2026-03-11 10:46:59'),
(10, 'Corporate Event Photography', 23, 'Mirpur, Dhaka', '2026-03-29', '2026-06-02', '22:35:00', '06:06:00', 5100, 'Seeking a creative photographer to capture candid moments. Lighting equipment is a plus. Expected to cover the entire duration of the event. Expedita deleniti amet ipsa ratione.', 'https://loremflickr.com/600/400/corporate,event,bangladesh?lock=696', 'closed', 21, '2026-03-11 10:46:59', '2026-03-11 10:46:59'),
(11, 'Anniversary Celebration', 16, 'Shaheb Bazar, Rajshahi', '2026-05-07', '2026-05-25', '21:11:00', '18:56:00', 12000, 'Looking for a reliable photographer to cover our program. Need full event coverage including guest photos and key moments. Quick delivery of edited photos is expected. Perferendis recusandae ducimus architecto in.', 'https://loremflickr.com/600/400/event,bangladesh?lock=3641', 'closed', 38, '2026-03-11 10:46:59', '2026-03-11 10:46:59'),
(12, 'Cultural Program Photography', 49, 'Shaheb Bazar, Rajshahi', '2026-03-17', '2026-05-21', '12:02:00', '12:07:00', 5500, 'Need a professional photographer for a premium shoot. Experience in similar events is required. Please share your portfolio when applying. Asperiores cum et libero illo.', 'https://loremflickr.com/600/400/event,bangladesh?lock=5025', 'open', 44, '2026-03-11 10:46:59', '2026-03-11 10:46:59'),
(13, 'Real Estate/Interior Photography', 13, 'Mirpur, Dhaka', '2026-03-17', '2026-05-26', '18:00:00', '12:14:00', 3000, 'Looking for a reliable photographer to cover our program. Need full event coverage including guest photos and key moments. Quick delivery of edited photos is expected. Molestiae quo quidem facilis aut.', 'https://loremflickr.com/600/400/interior,house,bangladesh?lock=6262', 'open', 38, '2026-03-11 10:47:00', '2026-03-11 10:47:00'),
(14, 'Gaye Holud Shoot', 25, 'Puran Dhaka', '2026-04-14', '2026-06-08', '12:20:00', '02:17:00', 6700, 'Looking for a reliable photographer to cover our program. Need full event coverage including guest photos and key moments. Quick delivery of edited photos is expected. Illum qui esse et est unde libero nihil.', 'https://loremflickr.com/600/400/wedding,photography,bangladesh?lock=5178', 'open', 13, '2026-03-11 10:47:00', '2026-03-11 10:47:00'),
(15, 'Pre-Wedding Outdoor Shoot', 30, 'Nasirabad, Chattogram', '2026-05-08', '2026-05-19', '13:01:00', '21:53:00', 17500, 'We are looking for an experienced photographer for our upcoming event. The photographer should have their own professional gear and handle both raw and edited photo delivery within 3 days. Accusantium maiores officiis inventore sed sapiente.', 'https://loremflickr.com/600/400/wedding,photography,bangladesh?lock=4997', 'open', 36, '2026-03-11 10:47:00', '2026-03-11 10:47:00'),
(16, 'Pre-Wedding Outdoor Shoot', 37, 'Agrabad, Chattogram', '2026-04-30', '2026-06-03', '03:22:00', '21:51:00', 12000, 'Looking for a reliable photographer to cover our program. Need full event coverage including guest photos and key moments. Quick delivery of edited photos is expected. Repellendus ab dolorem eligendi dolorem explicabo.', 'https://loremflickr.com/600/400/wedding,photography,bangladesh?lock=3973', 'open', 5, '2026-03-11 10:47:00', '2026-03-11 10:47:00'),
(17, 'Concert / Live Music Photography', 6, 'Mohammadpur, Dhaka', '2026-04-19', '2026-05-29', '08:14:00', '22:40:00', 16400, 'Looking for a reliable photographer to cover our program. Need full event coverage including guest photos and key moments. Quick delivery of edited photos is expected. Architecto saepe qui eos corrupti pariatur doloribus.', 'https://loremflickr.com/600/400/concert,music,bangladesh?lock=635', 'closed', 50, '2026-03-11 10:47:00', '2026-03-11 10:47:00'),
(18, 'Maternity Photoshoot', 21, 'Puran Dhaka', '2026-04-14', '2026-05-17', '19:13:00', '21:17:00', 7600, 'Need a professional photographer for a premium shoot. Experience in similar events is required. Please share your portfolio when applying. Nisi cupiditate cum in voluptas quia hic.', 'https://loremflickr.com/600/400/baby,maternity,bangladesh?lock=6974', 'closed', 26, '2026-03-11 10:47:00', '2026-03-11 10:47:00'),
(19, 'Gaye Holud Shoot', 21, 'Chawkbazar, Cumilla', '2026-03-22', '2026-06-04', '18:36:00', '13:25:00', 6700, 'We are looking for an experienced photographer for our upcoming event. The photographer should have their own professional gear and handle both raw and edited photo delivery within 3 days. Ut esse aut dolorem ut est cupiditate cupiditate.', 'https://loremflickr.com/600/400/wedding,photography,bangladesh?lock=5073', 'open', 7, '2026-03-11 10:47:00', '2026-03-11 10:47:00'),
(20, 'Fashion Show Coverage', 39, 'Baily Road, Dhaka', '2026-03-31', '2026-06-07', '10:53:00', '10:06:00', 14000, 'Need a professional photographer for a premium shoot. Experience in similar events is required. Please share your portfolio when applying. Commodi aut libero aut voluptatem accusantium eos.', 'https://loremflickr.com/600/400/fashion,runway,bangladesh?lock=5331', 'open', 24, '2026-03-11 10:47:00', '2026-03-11 10:47:00'),
(21, 'Bou Bhat Ceremony', 18, 'Shibbari, Khulna', '2026-03-30', '2026-06-05', '06:01:00', '00:08:00', 6200, 'We need a skilled photographer for an outdoor shoot. Must be good at natural light photography. drone photography capability is a bonus. Ducimus est quisquam aut error.', 'https://loremflickr.com/600/400/wedding,photography,bangladesh?lock=5018', 'open', 16, '2026-03-11 10:47:00', '2026-03-11 10:47:00'),
(22, 'Corporate Event Photography', 53, 'Banani, Dhaka', '2026-04-27', '2026-05-16', '02:57:00', '19:58:00', 9200, 'We need a skilled photographer for an outdoor shoot. Must be good at natural light photography. drone photography capability is a bonus. Autem vero modi sunt.', 'https://loremflickr.com/600/400/corporate,event,bangladesh?lock=97', 'open', 11, '2026-03-11 10:47:00', '2026-03-11 10:47:00'),
(23, 'Anniversary Celebration', 32, 'Nasirabad, Chattogram', '2026-03-23', '2026-06-10', '09:15:00', '13:26:00', 8300, 'We need a skilled photographer for an outdoor shoot. Must be good at natural light photography. drone photography capability is a bonus. Eos necessitatibus nostrum consequatur impedit.', 'https://loremflickr.com/600/400/event,bangladesh?lock=5106', 'open', 21, '2026-03-11 10:47:00', '2026-03-11 10:47:00'),
(24, 'Birthday Party Coverage', 5, 'Mirpur, Dhaka', '2026-04-02', '2026-05-27', '12:20:00', '23:21:00', 12500, 'Seeking a creative photographer to capture candid moments. Lighting equipment is a plus. Expected to cover the entire duration of the event. Id possimus reprehenderit eaque corporis ut voluptatem sapiente perspiciatis.', 'https://loremflickr.com/600/400/birthday,party,bangladesh?lock=7055', 'open', 34, '2026-03-11 10:47:00', '2026-03-11 10:47:00'),
(25, 'Bou Bhat Ceremony', 30, 'Banani, Dhaka', '2026-05-05', '2026-06-08', '01:46:00', '15:08:00', 10700, 'Need a professional photographer for a premium shoot. Experience in similar events is required. Please share your portfolio when applying. Rerum eligendi necessitatibus quos.', 'https://loremflickr.com/600/400/wedding,photography,bangladesh?lock=4974', 'closed', 1, '2026-03-11 10:47:00', '2026-03-11 10:47:00'),
(26, 'Bou Bhat Ceremony', 33, 'GEC Circle, Chattogram', '2026-05-02', '2026-05-12', '01:47:00', '03:50:00', 7800, 'We need a skilled photographer for an outdoor shoot. Must be good at natural light photography. drone photography capability is a bonus. Rerum itaque ducimus beatae aspernatur.', 'https://loremflickr.com/600/400/wedding,photography,bangladesh?lock=6218', 'closed', 38, '2026-03-11 10:47:00', '2026-03-11 10:47:00'),
(27, 'Newborn Baby Portrait', 29, 'Agrabad, Chattogram', '2026-04-18', '2026-05-19', '11:51:00', '13:32:00', 7500, 'We are looking for an experienced photographer for our upcoming event. The photographer should have their own professional gear and handle both raw and edited photo delivery within 3 days. Omnis quia illum officia qui.', 'https://loremflickr.com/600/400/baby,maternity,bangladesh?lock=5003', 'open', 18, '2026-03-11 10:47:00', '2026-03-11 10:47:00'),
(28, 'Concert / Live Music Photography', 50, 'Nasirabad, Chattogram', '2026-03-31', '2026-05-18', '16:56:00', '13:32:00', 14200, 'We are looking for an experienced photographer for our upcoming event. The photographer should have their own professional gear and handle both raw and edited photo delivery within 3 days. Quasi corporis aut voluptatem dolor facere eveniet dolor deleniti.', 'https://loremflickr.com/600/400/concert,music,bangladesh?lock=7576', 'closed', 26, '2026-03-11 10:47:00', '2026-03-11 10:47:00'),
(29, 'Fashion Show Coverage', 33, 'Shaheb Bazar, Rajshahi', '2026-05-01', '2026-06-07', '04:54:00', '08:54:00', 12600, 'Seeking a creative photographer to capture candid moments. Lighting equipment is a plus. Expected to cover the entire duration of the event. Quia quo est amet sunt ut consequatur.', 'https://loremflickr.com/600/400/fashion,runway,bangladesh?lock=7951', 'open', 37, '2026-03-11 10:47:00', '2026-03-11 10:47:00'),
(30, 'Bou Bhat Ceremony', 5, 'Baily Road, Dhaka', '2026-03-27', '2026-06-02', '12:54:00', '16:59:00', 10400, 'Need a professional photographer for a premium shoot. Experience in similar events is required. Please share your portfolio when applying. Aperiam omnis voluptas commodi itaque voluptatum.', 'https://loremflickr.com/600/400/wedding,photography,bangladesh?lock=3502', 'open', 17, '2026-03-11 10:47:00', '2026-03-11 10:47:00');

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `item_type` enum('photo','product') NOT NULL,
  `cart_item_id` bigint(20) UNSIGNED NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `status` enum('pending','completed','cancelled') NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `carts`
--

INSERT INTO `carts` (`id`, `user_id`, `item_type`, `cart_item_id`, `quantity`, `price`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, 'photo', 1, 1, 456.53, 'pending', '2025-01-27 07:14:45', '2025-01-27 07:14:45');

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `event_name` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL,
  `rate` decimal(8,2) NOT NULL,
  `description` text NOT NULL,
  `photo_url` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `event_name`, `location`, `start_date`, `end_date`, `start_time`, `end_time`, `rate`, `description`, `photo_url`, `created_at`, `updated_at`) VALUES
(1, 'UIU CSE Fest 2025', 'United International University', '2025-01-11', '2025-01-23', '11:00:00', '21:00:00', 7999.00, 'Cover All Functional Activities', 'uiucsefest.png', '2025-01-26 13:59:17', '2025-01-26 13:59:17'),
(2, 'Birth Day', 'notunbazar', '2025-01-11', '2025-01-23', '14:04:00', '18:30:00', 5000.00, 'Capture all.', NULL, '2025-01-26 14:04:32', '2025-01-26 14:04:32'),
(3, 'Hello', 'adfsda', '2025-01-11', '2025-01-23', '18:00:00', '18:00:00', 5000.00, 'adfadsfasdf', 'images/CriLtxSXs1GQOuhvQ1RVRInzuPUMY5D6uvh3C8FE.jpg', '2025-01-31 07:55:14', '2025-01-31 07:55:14'),
(4, 'Hello', 'afdfaf', '2025-01-11', '2025-01-20', '18:00:00', '18:00:00', 2000.00, 'adfdsfasdf adfasfsa', 'storage/images/pQwfkvWXmG6WqCnEc8p62ZehwD6Gh9I6iIWMU2R5.png', '2025-01-31 08:11:11', '2025-01-31 08:11:11'),
(5, 'Hello', 'adfsda', '2025-01-11', '2025-01-23', '18:00:00', '18:00:00', 4999.00, 'af sdafasdfasd fasdf asd fda', 'storage/images/birthdayevent.png', '2025-01-31 08:14:19', '2025-01-31 08:14:19'),
(6, 'Hello', 'dfasfsa', '2025-01-11', '2025-01-23', '18:00:00', '20:00:00', 5000.00, 'dfasdfasdf', 'storage/images/IMG_20241227_155303.jpg', '2025-01-31 08:34:12', '2025-01-31 08:34:12'),
(7, 'adfsdf', 'adfasdf', '2025-02-05', '2025-02-12', '07:00:00', '14:56:00', 432.00, 'dfadfasdf', 'storage/images/IMG_99998 (6).jpg', '2025-01-31 22:56:45', '2025-01-31 22:56:45'),
(8, 'Hello', 'adfadsfa', '2025-02-07', '2025-02-27', '00:09:00', '18:06:00', 5000.00, 'adfsdafsda', 'storage/images/IMG_99998 (1).jpg', '2025-01-31 23:25:22', '2025-01-31 23:25:22'),
(9, 'adfsdf', 'adsfsdafa', '2025-01-31', '2025-02-27', '07:00:00', '19:00:00', 45543.00, 'sdffdsfasd', 'storage/images/IMG_99998 (4).jpg', '2025-01-31 23:27:15', '2025-01-31 23:27:15'),
(10, 'adfsdf', 'adsfsdafa', '2025-01-31', '2025-02-27', '07:00:00', '19:00:00', 45543.00, 'sdffdsfasd', 'storage/images/IMG_99998 (4).jpg', '2025-01-31 23:29:46', '2025-01-31 23:29:46'),
(11, 'dfadf', 'dfafasdf', '2025-01-31', '2025-02-14', '00:02:00', '21:00:00', 343.00, 'dsasdf', 'storage/images/IMG_99998 (9).jpg', '2025-01-31 23:31:10', '2025-01-31 23:31:10'),
(12, 'dfadf', 'dfafasdf', '2025-01-31', '2025-02-14', '00:02:00', '21:00:00', 343.00, 'dsasdf', 'storage/images/IMG_99998 (9).jpg', '2025-01-31 23:31:40', '2025-01-31 23:31:40'),
(13, 'adfadsf', 'asdfasdfasd', '2025-02-04', '2025-02-27', '00:00:00', '17:00:00', 34324.00, 'asdfasdfasdfasd', 'storage/images/IMG_99998 (6).jpg', '2025-01-31 23:33:01', '2025-01-31 23:33:01'),
(14, 'adfsdf', 'dafaf', '2025-02-04', '2025-02-06', '01:01:00', '14:05:00', 234.00, 'dfadsfsdf', 'storage/images/IMG_99999 (10).jpg', '2025-01-31 23:38:57', '2025-01-31 23:38:57'),
(15, 'adfsdf', 'dafaf', '2025-02-04', '2025-02-06', '01:01:00', '14:05:00', 234.00, 'dfadsfsdf', 'storage/images/IMG_99999 (10).jpg', '2025-01-31 23:39:15', '2025-01-31 23:39:15'),
(16, 'Hello', 'adfadsfa', '2025-01-31', '2025-02-13', '05:00:00', '18:00:00', 5000.00, 'adkfjasdlkfjas oikpajfr ajflkjasdlkf', 'storage/images/IMG_99999 (4).jpg', '2025-02-01 06:04:52', '2025-02-01 06:04:52'),
(17, 'Hello', 'adfadsfa', '2025-01-31', '2025-02-13', '05:00:00', '18:00:00', 5000.00, 'adkfjasdlkfjas oikpajfr ajflkjasdlkf', 'storage/images/IMG_99999 (4).jpg', '2025-02-01 06:06:23', '2025-02-01 06:06:23'),
(18, 'adfsdf', 'adfsda', '2025-01-31', '2025-02-01', '05:05:00', '16:04:00', 500.00, 'afdfadf', 'storage/images/IMG_99998 (3).jpg', '2025-02-01 06:21:19', '2025-02-01 06:21:19'),
(19, 'adfsdf', 'adfsda', '2025-01-31', '2025-02-01', '05:05:00', '16:04:00', 500.00, 'afdfadf', 'storage/images/IMG_99998 (3).jpg', '2025-02-01 06:24:00', '2025-02-01 06:24:00'),
(20, 'adfsdf', 'adfsda', '2025-01-31', '2025-02-01', '05:05:00', '16:04:00', 500.00, 'afdfadf', 'storage/images/IMG_99998 (3).jpg', '2025-02-01 06:26:07', '2025-02-01 06:26:07'),
(21, 'Hello', '123', '2025-02-04', '2025-02-13', '03:00:00', '18:00:00', 5555.00, 'dfdsafasd', 'storage/images/IMG_99999 (9).jpg', '2025-02-01 06:26:58', '2025-02-01 06:26:58');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(9, '0001_01_01_000000_create_users_table', 1),
(10, '0001_01_01_000001_create_cache_table', 1),
(11, '0001_01_01_000002_create_jobs_table', 1),
(12, '2025_01_14_034549_create_admins_table', 1),
(14, '2025_01_17_195140_create_carts_table', 1),
(15, '2025_01_20_165239_create_o_t_p_s_table', 1),
(16, '2025_01_20_175238_create_transections_table', 1),
(17, '2025_01_24_165251_create_blogntips_table', 2),
(19, '2025_01_20_145339_create_events_table', 3),
(21, '2025_01_26_224232_create_photographer_applications_table', 4),
(22, '2025_01_26_185932_create_book_events_table', 5),
(23, '2025_01_15_191744_create_photo_sells_table', 6);

-- --------------------------------------------------------

--
-- Table structure for table `o_t_p_s`
--

CREATE TABLE `o_t_p_s` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `email` varchar(255) NOT NULL,
  `otp` varchar(255) NOT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `photographer_applications`
--

CREATE TABLE `photographer_applications` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `event_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `photo_sells`
--

CREATE TABLE `photo_sells` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `created_by` bigint(20) UNSIGNED NOT NULL,
  `description` text DEFAULT NULL,
  `price` int(11) NOT NULL,
  `category` enum('All','Nature','People','Food','Architecture','Travel','Technology','Animals','Fashion','Health','Art','Business','Sports','Science','Education','Music','Transportation','Holidays','Religion','Backgrounds','Textures','Patterns','Colors','Abstract') NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `photo_sells`
--

INSERT INTO `photo_sells` (`id`, `title`, `created_by`, `description`, `price`, `category`, `image_url`, `created_at`, `updated_at`) VALUES
(1, 'qui Masterpiece', 46, 'Exclusive rights available for this unique capture. Detailed EXIF data included upon purchase.', 6300, 'Health', 'https://loremflickr.com/600/400/health,bangladesh?lock=36', '2026-03-11 10:47:00', '2026-03-11 10:47:00'),
(2, 'Stunning Sports Shot', 29, 'Professional grade photograph with meticulous post-processing to highlight authentic colors.', 5200, 'Sports', 'https://loremflickr.com/600/400/sports,bangladesh?lock=9537', '2026-03-11 10:47:00', '2026-03-11 10:47:00'),
(3, 'Modern Dhaka Skyline', 13, 'A breathtaking moment frozen in time. Perfect for large-scale prints and interior decor.', 7000, 'Architecture', 'https://loremflickr.com/600/400/architecture,bangladesh?lock=9275', '2026-03-11 10:47:00', '2026-03-11 10:47:00'),
(4, 'Creative Travel Perspective', 51, 'A breathtaking moment frozen in time. Perfect for large-scale prints and interior decor.', 4600, 'Travel', 'https://loremflickr.com/600/400/travel,bangladesh?lock=1947', '2026-03-11 10:47:00', '2026-03-11 10:47:00'),
(5, 'Creative Health Perspective', 15, 'High-resolution digital download perfect for commercial use or editorial printing. Captured with professional equipment.', 2800, 'Health', 'https://loremflickr.com/600/400/health,bangladesh?lock=1788', '2026-03-11 10:47:00', '2026-03-11 10:47:00'),
(6, 'Modern Dhaka Skyline', 48, 'Exclusive rights available for this unique capture. Detailed EXIF data included upon purchase.', 3200, 'Architecture', 'https://loremflickr.com/600/400/architecture,bangladesh?lock=7570', '2026-03-11 10:47:00', '2026-03-11 10:47:00'),
(7, 'Stunning Fashion Shot', 29, 'Stunning composition showcasing the raw beauty of the subject. Ideal for website backgrounds or marketing materials.', 2000, 'Fashion', 'https://loremflickr.com/600/400/fashion,bangladesh?lock=1357', '2026-03-11 10:47:00', '2026-03-11 10:47:00'),
(8, 'The Beauty of Abstract', 36, 'Stunning composition showcasing the raw beauty of the subject. Ideal for website backgrounds or marketing materials.', 1500, 'Abstract', 'https://loremflickr.com/600/400/abstract,bangladesh?lock=9988', '2026-03-11 10:47:00', '2026-03-11 10:47:00'),
(9, 'Bridge at Night', 15, 'High-resolution digital download perfect for commercial use or editorial printing. Captured with professional equipment.', 1100, 'Architecture', 'https://loremflickr.com/600/400/architecture,bangladesh?lock=5603', '2026-03-11 10:47:00', '2026-03-11 10:47:00'),
(10, 'Stunning Animals Shot', 33, 'Professional grade photograph with meticulous post-processing to highlight authentic colors.', 8900, 'Animals', 'https://loremflickr.com/600/400/animals,bangladesh?lock=1217', '2026-03-11 10:47:00', '2026-03-11 10:47:00'),
(11, 'Creative Textures Perspective', 44, 'Professional grade photograph with meticulous post-processing to highlight authentic colors.', 1700, 'Textures', 'https://loremflickr.com/600/400/textures,bangladesh?lock=5740', '2026-03-11 10:47:00', '2026-03-11 10:47:00'),
(12, 'Creative Patterns Perspective', 52, 'Exclusive rights available for this unique capture. Detailed EXIF data included upon purchase.', 6400, 'Patterns', 'https://loremflickr.com/600/400/patterns,bangladesh?lock=3700', '2026-03-11 10:47:00', '2026-03-11 10:47:00'),
(13, 'Stunning Music Shot', 36, 'Professional grade photograph with meticulous post-processing to highlight authentic colors.', 8900, 'Music', 'https://loremflickr.com/600/400/music,bangladesh?lock=297', '2026-03-11 10:47:00', '2026-03-11 10:47:00'),
(14, 'illo Masterpiece', 37, 'Stunning composition showcasing the raw beauty of the subject. Ideal for website backgrounds or marketing materials.', 4300, 'Sports', 'https://loremflickr.com/600/400/sports,bangladesh?lock=9197', '2026-03-11 10:47:00', '2026-03-11 10:47:00'),
(15, 'ea Masterpiece', 24, 'High-resolution digital download perfect for commercial use or editorial printing. Captured with professional equipment.', 2500, 'Religion', 'https://loremflickr.com/600/400/religion,bangladesh?lock=1606', '2026-03-11 10:47:00', '2026-03-11 10:47:00'),
(16, 'qui Masterpiece', 48, 'Stunning composition showcasing the raw beauty of the subject. Ideal for website backgrounds or marketing materials.', 5600, 'Backgrounds', 'https://loremflickr.com/600/400/backgrounds,bangladesh?lock=3416', '2026-03-11 10:47:00', '2026-03-11 10:47:00'),
(17, 'Creative Holidays Perspective', 29, 'Professional grade photograph with meticulous post-processing to highlight authentic colors.', 6300, 'Holidays', 'https://loremflickr.com/600/400/holidays,bangladesh?lock=5016', '2026-03-11 10:47:00', '2026-03-11 10:47:00'),
(18, 'Stunning Fashion Shot', 29, 'Stunning composition showcasing the raw beauty of the subject. Ideal for website backgrounds or marketing materials.', 6100, 'Fashion', 'https://loremflickr.com/600/400/fashion,bangladesh?lock=8836', '2026-03-11 10:47:00', '2026-03-11 10:47:00'),
(19, 'Stunning Technology Shot', 35, 'Exclusive rights available for this unique capture. Detailed EXIF data included upon purchase.', 6400, 'Technology', 'https://loremflickr.com/600/400/technology,bangladesh?lock=5561', '2026-03-11 10:47:00', '2026-03-11 10:47:00'),
(20, 'Lush Green Bandarban', 36, 'Exclusive rights available for this unique capture. Detailed EXIF data included upon purchase.', 4300, 'Nature', 'https://loremflickr.com/600/400/nature,bangladesh?lock=5152', '2026-03-11 10:47:00', '2026-03-11 10:47:00'),
(21, 'Stunning Technology Shot', 50, 'A breathtaking moment frozen in time. Perfect for large-scale prints and interior decor.', 8500, 'Technology', 'https://loremflickr.com/600/400/technology,bangladesh?lock=5049', '2026-03-11 10:47:00', '2026-03-11 10:47:00'),
(22, 'Stunning Technology Shot', 27, 'Stunning composition showcasing the raw beauty of the subject. Ideal for website backgrounds or marketing materials.', 1500, 'Technology', 'https://loremflickr.com/600/400/technology,bangladesh?lock=660', '2026-03-11 10:47:00', '2026-03-11 10:47:00'),
(23, 'Local Farmers at Work', 38, 'Stunning composition showcasing the raw beauty of the subject. Ideal for website backgrounds or marketing materials.', 4000, 'People', 'https://loremflickr.com/600/400/people,bangladesh?lock=6784', '2026-03-11 10:47:00', '2026-03-11 10:47:00'),
(24, 'Creative Business Perspective', 19, 'Stunning composition showcasing the raw beauty of the subject. Ideal for website backgrounds or marketing materials.', 6600, 'Business', 'https://loremflickr.com/600/400/business,bangladesh?lock=874', '2026-03-11 10:47:00', '2026-03-11 10:47:00'),
(25, 'The Beauty of Business', 19, 'Professional grade photograph with meticulous post-processing to highlight authentic colors.', 1600, 'Business', 'https://loremflickr.com/600/400/business,bangladesh?lock=6143', '2026-03-11 10:47:00', '2026-03-11 10:47:00'),
(26, 'Creative Travel Perspective', 27, 'Exclusive rights available for this unique capture. Detailed EXIF data included upon purchase.', 5700, 'Travel', 'https://loremflickr.com/600/400/travel,bangladesh?lock=2724', '2026-03-11 10:47:00', '2026-03-11 10:47:00'),
(27, 'Creative Art Perspective', 2, 'High-resolution digital download perfect for commercial use or editorial printing. Captured with professional equipment.', 8100, 'Art', 'https://loremflickr.com/600/400/art,bangladesh?lock=1327', '2026-03-11 10:47:00', '2026-03-11 10:47:00'),
(28, 'The Beauty of Colors', 7, 'A breathtaking moment frozen in time. Perfect for large-scale prints and interior decor.', 10000, 'Colors', 'https://loremflickr.com/600/400/colors,bangladesh?lock=3619', '2026-03-11 10:47:00', '2026-03-11 10:47:00'),
(29, 'Creative Patterns Perspective', 47, 'A breathtaking moment frozen in time. Perfect for large-scale prints and interior decor.', 600, 'Patterns', 'https://loremflickr.com/600/400/patterns,bangladesh?lock=4291', '2026-03-11 10:47:00', '2026-03-11 10:47:00'),
(30, 'Stunning Sports Shot', 19, 'Professional grade photograph with meticulous post-processing to highlight authentic colors.', 9400, 'Sports', 'https://loremflickr.com/600/400/sports,bangladesh?lock=9689', '2026-03-11 10:47:00', '2026-03-11 10:47:00');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('1N8CxLvVEFInXjzHtKCblMkWMHh8xDppnXrDj3mg', 53, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36', 'YTo1OntzOjY6Il90b2tlbiI7czo0MDoiOTA0b2tseGd3TlJpMFpPS1JPQXR6V3FpOHNGTmoyZmo3Z01vNm1uVCI7czozOiJ1cmwiO2E6MDp7fXM6OToiX3ByZXZpb3VzIjthOjE6e3M6MzoidXJsIjtzOjMyOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYmxvZ3NudGlwcyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fXM6NTA6ImxvZ2luX3dlYl81OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjtpOjUzO30=', 1773242922),
('8RY2hQZZqdvhG9fpxBAL7TDAAVrXMDQWxAg5gX0T', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Cursor/2.5.17 Chrome/142.0.7444.265 Electron/39.3.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoibW5BQUZSdWQ0MnBqeGhwVXFSZDNieFpjVHFEU1gxcm1vTWJtMTJsRSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1773242892),
('HKO2rzqAish3ZiA7j6I4FqNBNudoHDkBtU931LqU', 53, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiRGpsYVlJb3FyRDVwdWpjZzFYcXEyazJhWDVWdkpXV1NPQkpucTh0ViI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9ibG9nbnRpcHMiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX1zOjUwOiJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI7aTo1Mzt9', 1773242754),
('kcpsDcKb8ZOwVMGR8pJfyXArVAtQ2JpRPJ3pOO9E', 53, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoib2J5UTFSdXF6N1cxeGhMS1loS0xLdEg1ZkxCQmFnNEhlclNEdjZsaCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzg6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9oaXJlcGhvdG9ncmFwaGVyIjt9czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6NTM7fQ==', 1773248712),
('lq78w8TdS6fvimq1zfw7rFGYOYPNnxprs1KELYtA', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiT1hXbjhJd3c5dlFTcGFnWVlIZHBpYzdNZGhFcThLY2kyTk5yNTZmQyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1773244300),
('WyVsNlejd498hInuCgUxpwgNdUZJoSGmVN6jnZrA', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Cursor/2.5.17 Chrome/142.0.7444.265 Electron/39.3.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiRFFNTlpnUmxXYjBNN2gwSDl2cFdibUI3b1A4N2cyd0JvRFNIMmNtMiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1773242713);

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `email` varchar(255) NOT NULL,
  `total_amount` decimal(10,2) NOT NULL,
  `transaction_id` varchar(255) NOT NULL,
  `transaction_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `made_by` bigint(20) UNSIGNED NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'pending',
  `photo_ids` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`photo_ids`)),
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `role` tinyint(4) NOT NULL DEFAULT 0,
  `profile_picture` varchar(255) DEFAULT NULL,
  `bio` varchar(255) DEFAULT NULL,
  `specializations` text DEFAULT NULL,
  `rating` decimal(3,2) NOT NULL DEFAULT 0.00,
  `is_active` tinyint(4) NOT NULL DEFAULT 1,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `role`, `profile_picture`, `bio`, `specializations`, `rating`, `is_active`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'User', 'adnan@user.com', '2025-01-24 10:56:03', '$2y$12$zc0U7xuzkrzzxOTLaBZCJu1L8chm6h9pQU5cNJyXFCcOr1nEBg9MC', 0, NULL, NULL, NULL, 0.00, 1, '6LvraIwskWIJkFMtwOH0bBvoSfmIQLinwwePvvxFas19XNVogVJjVlVDLUVN', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(2, 'Photographer', 'adnan@photo.com', '2025-01-24 10:56:04', '$2y$12$aQMZtIJcj7ZHq3zXjmQlPeMpps9Z0eaT7BWbOlLg8CVLW3WXNTEAC', 1, NULL, NULL, NULL, 0.00, 1, 'KzTG8NNlPU', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(3, 'William Morar', 'mgottlieb@example.com', '2025-01-24 10:56:04', '$2y$12$3NQhrNLhwNkidp2qXxhE8egXzafZm5frq3b0ZrFWF2WPcXbyMmE46', 1, NULL, NULL, NULL, 0.00, 1, 'EqHXOf7kfs', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(4, 'Mrs. Nicole Gerlach Sr.', 'ulueilwitz@example.org', '2025-01-24 10:56:04', '$2y$12$3NQhrNLhwNkidp2qXxhE8egXzafZm5frq3b0ZrFWF2WPcXbyMmE46', 0, NULL, NULL, NULL, 0.00, 1, 'A1dcz944Rt', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(5, 'Kaela O\'Reilly', 'maggio.therese@example.com', '2025-01-24 10:56:04', '$2y$12$3NQhrNLhwNkidp2qXxhE8egXzafZm5frq3b0ZrFWF2WPcXbyMmE46', 0, NULL, NULL, NULL, 0.00, 1, 'f6SGry9QsQ', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(6, 'Parker Sporer MD', 'luettgen.leola@example.com', '2025-01-24 10:56:04', '$2y$12$3NQhrNLhwNkidp2qXxhE8egXzafZm5frq3b0ZrFWF2WPcXbyMmE46', 0, NULL, NULL, NULL, 0.00, 1, 'B3ScdUnn9s', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(7, 'Gilberto Dicki Jr.', 'angela.champlin@example.com', '2025-01-24 10:56:04', '$2y$12$3NQhrNLhwNkidp2qXxhE8egXzafZm5frq3b0ZrFWF2WPcXbyMmE46', 1, NULL, NULL, NULL, 0.00, 1, 'zGEbr7RKGM', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(8, 'Kylie Schowalter', 'wemard@example.com', '2025-01-24 10:56:04', '$2y$12$3NQhrNLhwNkidp2qXxhE8egXzafZm5frq3b0ZrFWF2WPcXbyMmE46', 0, NULL, NULL, NULL, 0.00, 1, '6qXsygSi1D', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(9, 'Mrs. Anissa Gottlieb V', 'taltenwerth@example.org', '2025-01-24 10:56:04', '$2y$12$3NQhrNLhwNkidp2qXxhE8egXzafZm5frq3b0ZrFWF2WPcXbyMmE46', 1, NULL, NULL, NULL, 0.00, 1, 'Z0dSAnu3OY', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(10, 'Dr. Gianni Dickens II', 'tconsidine@example.com', '2025-01-24 10:56:04', '$2y$12$3NQhrNLhwNkidp2qXxhE8egXzafZm5frq3b0ZrFWF2WPcXbyMmE46', 1, NULL, NULL, NULL, 0.00, 1, 'RykpGIHiwL', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(11, 'Asha Batz', 'znitzsche@example.net', '2025-01-24 10:56:04', '$2y$12$3NQhrNLhwNkidp2qXxhE8egXzafZm5frq3b0ZrFWF2WPcXbyMmE46', 0, NULL, NULL, NULL, 0.00, 1, 'WYmP1Syijw', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(12, 'Dr. Joany Rippin', 'jhayes@example.net', '2025-01-24 10:56:04', '$2y$12$3NQhrNLhwNkidp2qXxhE8egXzafZm5frq3b0ZrFWF2WPcXbyMmE46', 0, NULL, NULL, NULL, 0.00, 1, 'SrPryb6rf3', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(13, 'Mae Feeney', 'fhackett@example.com', '2025-01-24 10:56:04', '$2y$12$3NQhrNLhwNkidp2qXxhE8egXzafZm5frq3b0ZrFWF2WPcXbyMmE46', 1, NULL, NULL, NULL, 0.00, 1, '0XWTggLBgv', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(14, 'Krista Hauck', 'jameson98@example.net', '2025-01-24 10:56:04', '$2y$12$3NQhrNLhwNkidp2qXxhE8egXzafZm5frq3b0ZrFWF2WPcXbyMmE46', 1, NULL, NULL, NULL, 0.00, 1, 'OnYq5oW4QI', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(15, 'Francesca Raynor', 'mills.tyrese@example.org', '2025-01-24 10:56:04', '$2y$12$3NQhrNLhwNkidp2qXxhE8egXzafZm5frq3b0ZrFWF2WPcXbyMmE46', 0, NULL, NULL, NULL, 0.00, 1, 'lqnZfoKgHR', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(16, 'Lane Gusikowski', 'roslyn32@example.com', '2025-01-24 10:56:04', '$2y$12$3NQhrNLhwNkidp2qXxhE8egXzafZm5frq3b0ZrFWF2WPcXbyMmE46', 1, NULL, NULL, NULL, 0.00, 1, '7SBz7towYt', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(17, 'Dr. Jayden Strosin DDS', 'collier.concepcion@example.net', '2025-01-24 10:56:04', '$2y$12$3NQhrNLhwNkidp2qXxhE8egXzafZm5frq3b0ZrFWF2WPcXbyMmE46', 0, NULL, NULL, NULL, 0.00, 1, 'sx8V2I7Yqn', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(18, 'Miss Izabella Robel', 'ernest29@example.org', '2025-01-24 10:56:04', '$2y$12$3NQhrNLhwNkidp2qXxhE8egXzafZm5frq3b0ZrFWF2WPcXbyMmE46', 0, NULL, NULL, NULL, 0.00, 1, '3rHJPPWLxe', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(19, 'Providenci Fadel', 'barney13@example.net', '2025-01-24 10:56:04', '$2y$12$3NQhrNLhwNkidp2qXxhE8egXzafZm5frq3b0ZrFWF2WPcXbyMmE46', 0, NULL, NULL, NULL, 0.00, 1, '4MGgNIhnGB', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(20, 'Dr. Serena Roob MD', 'harber.garland@example.com', '2025-01-24 10:56:04', '$2y$12$3NQhrNLhwNkidp2qXxhE8egXzafZm5frq3b0ZrFWF2WPcXbyMmE46', 1, NULL, NULL, NULL, 0.00, 1, 'lqU7uwm9ol', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(21, 'Icie Beer', 'jabernathy@example.org', '2025-01-24 10:56:04', '$2y$12$3NQhrNLhwNkidp2qXxhE8egXzafZm5frq3b0ZrFWF2WPcXbyMmE46', 0, NULL, NULL, NULL, 0.00, 1, 'FfbejM2AlS', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(22, 'Prof. Idell Gibson', 'noemie.jacobson@example.com', '2025-01-24 10:56:04', '$2y$12$3NQhrNLhwNkidp2qXxhE8egXzafZm5frq3b0ZrFWF2WPcXbyMmE46', 0, NULL, NULL, NULL, 0.00, 1, 'BMNBj0kdA2', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(23, 'Darrion Langosh', 'halvorson.clara@example.org', '2025-01-24 10:56:04', '$2y$12$3NQhrNLhwNkidp2qXxhE8egXzafZm5frq3b0ZrFWF2WPcXbyMmE46', 1, NULL, NULL, NULL, 0.00, 1, 'J2Q9ng6K4P', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(24, 'Ms. Carlee Koss', 'jacques20@example.org', '2025-01-24 10:56:04', '$2y$12$3NQhrNLhwNkidp2qXxhE8egXzafZm5frq3b0ZrFWF2WPcXbyMmE46', 0, NULL, NULL, NULL, 0.00, 1, 'yQAkMkhQto', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(25, 'Prof. Mavis Lebsack', 'carlee.vandervort@example.com', '2025-01-24 10:56:04', '$2y$12$3NQhrNLhwNkidp2qXxhE8egXzafZm5frq3b0ZrFWF2WPcXbyMmE46', 0, NULL, NULL, NULL, 0.00, 1, 'v8jnLDxzGz', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(26, 'Prof. Alexander Bins III', 'taryn54@example.org', '2025-01-24 10:56:04', '$2y$12$3NQhrNLhwNkidp2qXxhE8egXzafZm5frq3b0ZrFWF2WPcXbyMmE46', 0, NULL, NULL, NULL, 0.00, 1, 'Nl9ZizYAgv', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(27, 'Stephon Schuster DDS', 'will.hillary@example.net', '2025-01-24 10:56:04', '$2y$12$3NQhrNLhwNkidp2qXxhE8egXzafZm5frq3b0ZrFWF2WPcXbyMmE46', 1, NULL, NULL, NULL, 0.00, 1, 'lO8gGtLlAB', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(28, 'Pattie Davis', 'bogisich.daryl@example.net', '2025-01-24 10:56:04', '$2y$12$3NQhrNLhwNkidp2qXxhE8egXzafZm5frq3b0ZrFWF2WPcXbyMmE46', 1, NULL, NULL, NULL, 0.00, 1, 'ddq3fhglNR', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(29, 'Lillian Becker Sr.', 'kiehn.kaylin@example.com', '2025-01-24 10:56:04', '$2y$12$3NQhrNLhwNkidp2qXxhE8egXzafZm5frq3b0ZrFWF2WPcXbyMmE46', 1, NULL, NULL, NULL, 0.00, 1, 'bsNUoIg3gR', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(30, 'Belle Gorczany MD', 'bsimonis@example.com', '2025-01-24 10:56:04', '$2y$12$3NQhrNLhwNkidp2qXxhE8egXzafZm5frq3b0ZrFWF2WPcXbyMmE46', 1, NULL, NULL, NULL, 0.00, 1, 'ufEjHz4I8n', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(31, 'Ursula Nikolaus', 'jones.connie@example.com', '2025-01-24 10:56:04', '$2y$12$3NQhrNLhwNkidp2qXxhE8egXzafZm5frq3b0ZrFWF2WPcXbyMmE46', 0, NULL, NULL, NULL, 0.00, 1, 'dkfUtwrcIV', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(32, 'Abbie Flatley', 'armand77@example.com', '2025-01-24 10:56:04', '$2y$12$3NQhrNLhwNkidp2qXxhE8egXzafZm5frq3b0ZrFWF2WPcXbyMmE46', 1, NULL, NULL, NULL, 0.00, 1, '0atXMDdeQM', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(33, 'Sandy Blanda', 'braden29@example.net', '2025-01-24 10:56:04', '$2y$12$3NQhrNLhwNkidp2qXxhE8egXzafZm5frq3b0ZrFWF2WPcXbyMmE46', 1, NULL, NULL, NULL, 0.00, 1, 'Qq7QaVMTag', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(34, 'Miss Kattie Brekke II', 'okon.tania@example.com', '2025-01-24 10:56:04', '$2y$12$3NQhrNLhwNkidp2qXxhE8egXzafZm5frq3b0ZrFWF2WPcXbyMmE46', 0, NULL, NULL, NULL, 0.00, 1, 'Ii8G5qAwJn', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(35, 'Holly Pouros', 'johnson.roel@example.org', '2025-01-24 10:56:04', '$2y$12$3NQhrNLhwNkidp2qXxhE8egXzafZm5frq3b0ZrFWF2WPcXbyMmE46', 1, NULL, NULL, NULL, 0.00, 1, '8R5BNa2CVn', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(36, 'Prof. Ashlynn Hyatt', 'brigitte.goyette@example.com', '2025-01-24 10:56:04', '$2y$12$3NQhrNLhwNkidp2qXxhE8egXzafZm5frq3b0ZrFWF2WPcXbyMmE46', 0, NULL, NULL, NULL, 0.00, 1, '45Q3ELpiTJ', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(37, 'Moises Osinski III', 'kozey.fatima@example.com', '2025-01-24 10:56:04', '$2y$12$3NQhrNLhwNkidp2qXxhE8egXzafZm5frq3b0ZrFWF2WPcXbyMmE46', 1, NULL, NULL, NULL, 0.00, 1, '2NeplBEqaI', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(38, 'Trystan Kuvalis III', 'dibbert.rolando@example.com', '2025-01-24 10:56:04', '$2y$12$3NQhrNLhwNkidp2qXxhE8egXzafZm5frq3b0ZrFWF2WPcXbyMmE46', 0, NULL, NULL, NULL, 0.00, 1, '2FM4LYrZKp', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(39, 'Dr. Sterling Collier MD', 'paucek.krystina@example.net', '2025-01-24 10:56:04', '$2y$12$3NQhrNLhwNkidp2qXxhE8egXzafZm5frq3b0ZrFWF2WPcXbyMmE46', 0, NULL, NULL, NULL, 0.00, 1, 'EhgHl7QGFu', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(40, 'Mr. Felix O\'Conner', 'dbraun@example.net', '2025-01-24 10:56:04', '$2y$12$3NQhrNLhwNkidp2qXxhE8egXzafZm5frq3b0ZrFWF2WPcXbyMmE46', 0, NULL, NULL, NULL, 0.00, 1, 'kAR3YfPlWn', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(41, 'Vida Grady', 'alanna.heathcote@example.net', '2025-01-24 10:56:04', '$2y$12$3NQhrNLhwNkidp2qXxhE8egXzafZm5frq3b0ZrFWF2WPcXbyMmE46', 1, NULL, NULL, NULL, 0.00, 1, 'uWBiCyKGtH', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(42, 'Cora Thiel', 'river33@example.com', '2025-01-24 10:56:04', '$2y$12$3NQhrNLhwNkidp2qXxhE8egXzafZm5frq3b0ZrFWF2WPcXbyMmE46', 0, NULL, NULL, NULL, 0.00, 1, 'Gm3ens2WiL', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(43, 'Ms. Bryana Funk II', 'kub.salvador@example.com', '2025-01-24 10:56:04', '$2y$12$3NQhrNLhwNkidp2qXxhE8egXzafZm5frq3b0ZrFWF2WPcXbyMmE46', 0, NULL, NULL, NULL, 0.00, 1, 'pCI4h564Zw', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(44, 'Ms. Isabel Bradtke Jr.', 'cmarquardt@example.com', '2025-01-24 10:56:04', '$2y$12$3NQhrNLhwNkidp2qXxhE8egXzafZm5frq3b0ZrFWF2WPcXbyMmE46', 0, NULL, NULL, NULL, 0.00, 1, 'zCohjrWAkA', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(45, 'Dr. Aniya Strosin DVM', 'daniel.candido@example.org', '2025-01-24 10:56:04', '$2y$12$3NQhrNLhwNkidp2qXxhE8egXzafZm5frq3b0ZrFWF2WPcXbyMmE46', 0, NULL, NULL, NULL, 0.00, 1, 'KbCeU6j0vl', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(46, 'Theron Leffler', 'elyssa19@example.com', '2025-01-24 10:56:04', '$2y$12$3NQhrNLhwNkidp2qXxhE8egXzafZm5frq3b0ZrFWF2WPcXbyMmE46', 0, NULL, NULL, NULL, 0.00, 1, 'gIUBhRIWZq', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(47, 'Rylee Becker', 'axel12@example.org', '2025-01-24 10:56:04', '$2y$12$3NQhrNLhwNkidp2qXxhE8egXzafZm5frq3b0ZrFWF2WPcXbyMmE46', 1, NULL, NULL, NULL, 0.00, 1, 'eQ9K8ZNat7', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(48, 'Alice Brekke', 'simeon08@example.net', '2025-01-24 10:56:04', '$2y$12$3NQhrNLhwNkidp2qXxhE8egXzafZm5frq3b0ZrFWF2WPcXbyMmE46', 1, NULL, NULL, NULL, 0.00, 1, 'SQM36L2R7p', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(49, 'Britney Stracke', 'treutel.ford@example.org', '2025-01-24 10:56:04', '$2y$12$3NQhrNLhwNkidp2qXxhE8egXzafZm5frq3b0ZrFWF2WPcXbyMmE46', 1, NULL, NULL, NULL, 0.00, 1, 'ytz2KH0X49', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(50, 'Roma Hyatt', 'colleen52@example.com', '2025-01-24 10:56:04', '$2y$12$3NQhrNLhwNkidp2qXxhE8egXzafZm5frq3b0ZrFWF2WPcXbyMmE46', 1, NULL, NULL, NULL, 0.00, 1, 'wOwEhGz1mQ', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(51, 'Judson Leannon IV', 'balistreri.sydney@example.com', '2025-01-24 10:56:04', '$2y$12$3NQhrNLhwNkidp2qXxhE8egXzafZm5frq3b0ZrFWF2WPcXbyMmE46', 1, NULL, NULL, NULL, 0.00, 1, 'BUgYYM62cp', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(52, 'Brooklyn Kemmer Sr.', 'ibrahim82@example.com', '2025-01-24 10:56:04', '$2y$12$3NQhrNLhwNkidp2qXxhE8egXzafZm5frq3b0ZrFWF2WPcXbyMmE46', 0, NULL, NULL, NULL, 0.00, 1, 'pPu8d6QDLt', '2025-01-24 10:56:04', '2025-01-24 10:56:04'),
(53, 'Shariful Islam', 'sharifislam0505@gmail.com', NULL, '$2y$12$PGfTocTaBXYjPJcIroeRsO/.J6hq8xBHBT8yDV2QD24ZDn6sxG6WS', 0, NULL, NULL, NULL, 0.00, 1, NULL, '2026-01-08 04:54:08', '2026-01-08 04:54:08');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admins_email_unique` (`email`);

--
-- Indexes for table `blogntips`
--
ALTER TABLE `blogntips`
  ADD PRIMARY KEY (`id`),
  ADD KEY `blogntips_user_id_foreign` (`user_id`);

--
-- Indexes for table `book_events`
--
ALTER TABLE `book_events`
  ADD PRIMARY KEY (`id`),
  ADD KEY `book_events_created_by_foreign` (`created_by`);

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `carts_user_id_foreign` (`user_id`),
  ADD KEY `carts_cart_item_id_foreign` (`cart_item_id`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `o_t_p_s`
--
ALTER TABLE `o_t_p_s`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `photographer_applications`
--
ALTER TABLE `photographer_applications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `photographer_applications_user_id_foreign` (`user_id`),
  ADD KEY `photographer_applications_event_id_foreign` (`event_id`);

--
-- Indexes for table `photo_sells`
--
ALTER TABLE `photo_sells`
  ADD PRIMARY KEY (`id`),
  ADD KEY `photo_sells_created_by_foreign` (`created_by`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `transactions_transaction_id_unique` (`transaction_id`),
  ADD KEY `transactions_made_by_foreign` (`made_by`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `blogntips`
--
ALTER TABLE `blogntips`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `book_events`
--
ALTER TABLE `book_events`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `o_t_p_s`
--
ALTER TABLE `o_t_p_s`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `photographer_applications`
--
ALTER TABLE `photographer_applications`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `photo_sells`
--
ALTER TABLE `photo_sells`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `blogntips`
--
ALTER TABLE `blogntips`
  ADD CONSTRAINT `blogntips_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `book_events`
--
ALTER TABLE `book_events`
  ADD CONSTRAINT `book_events_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `carts_cart_item_id_foreign` FOREIGN KEY (`cart_item_id`) REFERENCES `photo_sells` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `carts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `photographer_applications`
--
ALTER TABLE `photographer_applications`
  ADD CONSTRAINT `photographer_applications_event_id_foreign` FOREIGN KEY (`event_id`) REFERENCES `book_events` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `photographer_applications_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `photo_sells`
--
ALTER TABLE `photo_sells`
  ADD CONSTRAINT `photo_sells_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_made_by_foreign` FOREIGN KEY (`made_by`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
