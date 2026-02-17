<?php
// School Blog - Add Post API

header('Content-Type: application/json');

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

// Validate input
if (!isset($input['title']) || !isset($input['content']) || !isset($input['category'])) {
    echo json_encode(['success' => false, 'message' => 'Noto\'g\'ri ma\'lumotlar']);
    exit;
}

$title = htmlspecialchars(trim($input['title']));
$content = htmlspecialchars(trim($input['content']));
$category = htmlspecialchars(trim($input['category']));
$date = date('Y-m-d');

// Database configuration
$db_host = 'localhost';
$db_name = 'school_blog';
$db_user = 'root';
$db_pass = '';

try {
    // Try to connect to database
    $pdo = new PDO("mysql:host=$db_host;dbname=$db_name", $db_user, $db_pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Insert post
    $stmt = $pdo->prepare("INSERT INTO posts (title, content, category, created_at, likes, comments) VALUES (?, ?, ?, ?, 0, 0)");
    $stmt->execute([$title, $content, $category, $date]);
    
    echo json_encode(['success' => true, 'message' => 'Post muvaffaqiyatli qo\'shildi']);
    
} catch (PDOException $e) {
    // Save to JSON file as fallback
    $postsFile = 'posts.json';
    $posts = [];
    
    if (file_exists($postsFile)) {
        $posts = json_decode(file_get_contents($postsFile), true);
    }
    
    $newPost = [
        'id' => count($posts) + 1,
        'title' => $title,
        'content' => $content,
        'category' => $category,
        'date' => $date,
        'likes' => 0,
        'comments' => 0
    ];
    
    array_unshift($posts, $newPost);
    file_put_contents($postsFile, json_encode($posts, JSON_PRETTY_PRINT));
    
    echo json_encode(['success' => true, 'message' => 'Post muvaffaqiyatli qo\'shildi (JSON)']);
}
