<?php
// School Blog - Main PHP Page

// Database configuration
$db_host = 'localhost';
$db_name = 'school_blog';
$db_user = 'root';
$db_pass = '';

$posts = [];
$dbConnected = false;

try {
    $pdo = new PDO("mysql:host=$db_host;dbname=$db_name", $db_user, $db_pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $dbConnected = true;
    
    $stmt = $pdo->query("SELECT * FROM posts ORDER BY created_at DESC LIMIT 10");
    $posts = $stmt->fetchAll(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    // Use sample data if database not available
    $posts = [
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

$categoryNames = [
    'news' => 'Yangiliklar',
    'events' => 'Tadbirlar',
    'science' => 'Fan',
    'sports' => 'Sport'
];

function formatDate($dateStr) {
    $date = new DateTime($dateStr);
    return $date->format('d-F Y');
}
?>
<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Maktab Blog - Bosh Sahifa</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div class="container">
            <h1>🎓 Maktab Blog</h1>
            <nav>
                <a href="index.php">Bosh Sahifa</a>
                <a href="#about">Haqida</a>
                <a href="#contact">Bog'lanish</a>
                <a href="login.html" class="btn-login">Kirish</a>
            </nav>
        </div>
    </header>

    <main class="container">
        <aside class="sidebar">
            <div class="widget">
                <h3>Qidirish</h3>
                <input type="text" id="searchInput" placeholder="Post qidirish...">
                <button id="searchBtn">Qidirish</button>
            </div>
            
            <div class="widget">
                <h3>Kategoriyalar</h3>
                <ul id="categoriesList">
                    <li><a href="#" data-category="all">Barcha postlar</a></li>
                    <li><a href="#" data-category="news">Yangiliklar</a></li>
                    <li><a href="#" data-category="events">Tadbirlar</a></li>
                    <li><a href="#" data-category="science">Fan</a></li>
                    <li><a href="#" data-category="sports">Sport</a></li>
                </ul>
            </div>

            <div class="widget">
                <h3>So'nggi Postlar</h3>
                <ul id="recentPosts">
                    <?php foreach($posts as $post): ?>
                    <li><a href="#post-<?php echo $post['id']; ?>"><?php echo htmlspecialchars($post['title']); ?></a></li>
                    <?php endforeach; ?>
                </ul>
            </div>
        </aside>

        <section class="content">
            <div class="hero">
                <h2>Xush Kelibsiz!</h2>
                <p>Maktabimiz blog sahifasida siz eng so'nggi yangiliklar, tadbirlar va ma'lumotlar bilan tanishishingiz mumkin.</p>
                <?php if($dbConnected): ?>
                <p style="color: green; margin-top: 10px;">✓ Bazaga ulangan</p>
                <?php else: ?>
                <p style="color: orange; margin-top: 10px;">⚠ Demo rejim</p>
                <?php endif; ?>
            </div>

            <div id="postsContainer">
                <?php foreach($posts as $post): ?>
                <article class="post" id="post-<?php echo $post['id']; ?>">
                    <span class="post-category category-<?php echo $post['category']; ?>">
                        <?php echo $categoryNames[$post['category']] ?? $post['category']; ?>
                    </span>
                    <h2><?php echo htmlspecialchars($post['title']); ?></h2>
                    <p class="post-date"><?php echo formatDate($post['date']); ?></p>
                    <p class="post-content"><?php echo htmlspecialchars($post['content']); ?></p>
                    <div class="post-actions">
                        <button class="btn-like" onclick="likePost(<?php echo $post['id']; ?>)">
                            ❤️ <?php echo $post['likes']; ?> likes
                        </button>
                        <button class="btn-comment" onclick="showComments(<?php echo $post['id']; ?>)">
                            💬 <?php echo $post['comments']; ?> izoh
                        </button>
                    </div>
                </article>
                <?php endforeach; ?>
            </div>

            <div class="add-post-section">
                <h3>Yangi Post Qo'shish</h3>
                <form id="addPostForm">
                    <input type="text" id="postTitle" placeholder="Post sarlavhasi" required>
                    <select id="postCategory">
                        <option value="news">Yangiliklar</option>
                        <option value="events">Tadbirlar</option>
                        <option value="science">Fan</option>
                        <option value="sports">Sport</option>
                    </select>
                    <textarea id="postContent" placeholder="Post matni..." rows="5" required></textarea>
                    <button type="submit" class="btn-submit">Post Qo'shish</button>
                </form>
            </div>
        </section>
    </main>

    <footer>
        <div class="container" id="contact">
            <p>&copy; 2026 Maktab Blog. Barcha huquqlar himoyalangan.</p>
            <p>Tel: +998 90 123-45-67 | Email: info@maktab-blog.uz</p>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
