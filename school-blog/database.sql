-- School Blog Database Setup
-- MySQL Database

-- Create database
CREATE DATABASE IF NOT EXISTS school_blog CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE school_blog;

-- Posts table
CREATE TABLE IF NOT EXISTS posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    category VARCHAR(50) NOT NULL DEFAULT 'news',
    created_at DATE NOT NULL,
    likes INT DEFAULT 0,
    comments INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_category (category),
    INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Users table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'teacher', 'student') DEFAULT 'student',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_username (username)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Comments table
CREATE TABLE IF NOT EXISTS comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    post_id INT NOT NULL,
    user_id INT,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
    INDEX idx_post_id (post_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Sample admin user (password: admin123)
INSERT INTO users (username, email, password, role) VALUES 
('admin', 'admin@maktab-blog.uz', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin');

-- Sample posts
INSERT INTO posts (title, content, category, created_at, likes, comments) VALUES 
('Yangi o''quv yili boshlandi!', 'Maktabimizda 2025-2026 o''quv yili tantanali ravishda boshlandi. Barcha o''quvchilarni yangi o''quv yili bilan tabriklaymiz!', 'news', '2026-02-10', 45, 12),
('Sport musobaqasi g''oliblari', 'Maktabimizda o''tkazilgan sport musobaqasida 9-A sinf g''olib bo''ldi. Barcha ishtirokchilarga rahmat!', 'sports', '2026-02-08', 32, 8),
('Fan oyligi boshlandi', 'Bu oy maktabimizda fan oyligi. Barcha fan o''qituvchilari qiziqarli tadbirlar tayyorlamoqda.', 'science', '2026-02-05', 28, 5),
('Bayram tadbiri', '8-Mart Xalqaro xotin-qizlar kuni munosabati bilan bayram tadbiri o''tkaziladi. Barcha xonimlarni tabriklaymiz!', 'events', '2026-02-03', 56, 20);
