<?php
// School Blog - Get Posts API

header('Content-Type: application/json');

// Database configuration (replace with your actual database credentials)
$db_host = 'localhost';
$db_name = 'school_blog';
$db_user = 'root';
$db_pass = '';

$response = ['success' => false, 'posts' => []];

try {
    // Try to connect to database
    $pdo = new PDO("mysql:host=$db_host;dbname=$db_name", $db_user, $db_pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Get posts from database
    $stmt = $pdo->query("SELECT * FROM posts ORDER BY created_at DESC");
    $posts = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    $response['success'] = true;
    $response['posts'] = $posts;
    
} catch (PDOException $e) {
    // Database not available - use sample data
    $response['success'] = true;
    $response['posts'] = [
        [
            'id' => 1,
            'title' => "Yangi o'quv yili boshlandi!",
            'category' => 'news',
            'content' => "Maktabimizda 2025-2026 o'quv yili tantanali ravishda boshlandi. Barcha o'quvchilarni yangi o'quv yili bilan tabriklaymiz!",
            'date' => '2026-02-10',
            'likes' => 45,
            'comments' => 12
        ],
        [
            'id' => 2,
            'title' => 'Sport musobaqasi g\'oliblari',
            'category' => 'sports',
            'content' => "Maktabimizda o'tkazilgan sport musobaqasida 9-A sinf g'olib bo'ldi. Barcha ishtirokchilarga rahmat!",
            'date' => '2026-02-08',
            'likes' => 32,
            'comments' => 8
        ],
        [
            'id' => 3,
            'title' => 'Fan oyligi boshlandi',
            'category' => 'science',
            'content' => 'Bu oy maktabimizda fan oyligi. Barcha fan o\'qituvchilari qiziqarli tadbirlar tayyorlamoqda.',
            'date' => '2026-02-05',
            'likes' => 28,
            'comments' => 5
        ],
        [
            'id' => 4,
            'title' => 'Bayram tadbiri',
            'category' => 'events',
            'content' => '8-Mart Xalqaro xotin-qizlar kuni munosabati bilan bayram tadbiri o\'tkaziladi. Barcha xonimlarni tabriklaymiz!',
            'date' => '2026-02-03',
            'likes' => 56,
            'comments' => 20
        ]
    ];
}

echo json_encode($response);
