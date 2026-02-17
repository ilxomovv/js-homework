// School Blog - JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Load posts on page load
    loadPosts();
    
    // Set up event listeners
    setupEventListeners();
});

// Global variables
let posts = [];
let currentCategory = 'all';

// Event Listeners Setup
function setupEventListeners() {
    // Search button
    const searchBtn = document.getElementById('searchBtn');
    if (searchBtn) {
        searchBtn.addEventListener('click', searchPosts);
    }
    
    // Search input - press Enter
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchPosts();
            }
        });
    }
    
    // Category links
    const categoriesList = document.getElementById('categoriesList');
    if (categoriesList) {
        categoriesList.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                e.preventDefault();
                const category = e.target.getAttribute('data-category');
                filterByCategory(category);
            }
        });
    }
    
    // Add post form
    const addPostForm = document.getElementById('addPostForm');
    if (addPostForm) {
        addPostForm.addEventListener('submit', handleAddPost);
    }
}

// Load posts from Python Flask backend
async function loadPosts() {
    const postsContainer = document.getElementById('postsContainer');
    if (!postsContainer) return;
    
    try {
        const response = await fetch('/api/posts');
        const data = await response.json();
        
        if (data.success) {
            posts = data.posts;
            displayPosts(posts);
        }
    } catch (error) {
        console.log('Flask backend not available, using demo data');
        loadDemoPosts();
    }
}

// Load demo posts for demonstration
function loadDemoPosts() {
    const demoPosts = [
        {
            id: 1,
            title: "Yangi o'quv yili boshlandi!",
            category: "news",
            content: "Maktabimizda 2025-2026 o'quv yili tantanali ravishda boshlandi. Barcha o'quvchilarni yangi o'quv yili bilan tabriklaymiz!",
            date: "2026-02-10",
            likes: 45,
            comments: 12
        },
        {
            id: 2,
            title: "Sport musobaqasi g'oliblari",
            category: "sports",
            content: "Maktabimizda o'tkazilgan sport musobaqasida 9-A sinf g'olib bo'ldi. Barcha ishtirokchilarga rahmat!",
            date: "2026-02-08",
            likes: 32,
            comments: 8
        },
        {
            id: 3,
            title: "Fan oyligi boshlandi",
            category: "science",
            content: "Bu oy maktabimizda fan oyligi. Barcha fan o'qituvchilari qiziqarli tadbirlar tayyorlamoqda.",
            date: "2026-02-05",
            likes: 28,
            comments: 5
        },
        {
            id: 4,
            title: "Bayram tadbiri",
            category: "events",
            content: "8-Mart Xalqaro xotin-qizlar kuni munosabati bilan bayram tadbiri o'tkaziladi. Barcha xonimlarni tabriklaymiz!",
            date: "2026-02-03",
            likes: 56,
            comments: 20
        }
    ];
    
    posts = demoPosts;
    displayPosts(posts);
}

// Display posts in the container
function displayPosts(postsToDisplay) {
    const postsContainer = document.getElementById('postsContainer');
    if (!postsContainer) return;
    
    if (postsToDisplay.length === 0) {
        postsContainer.innerHTML = '<div class="error">Postlar topilmadi</div>';
        return;
    }
    
    postsContainer.innerHTML = postsToDisplay.map(post => createPostHTML(post)).join('');
}

// Create HTML for a single post
function createPostHTML(post) {
    const categoryNames = {
        news: 'Yangiliklar',
        events: 'Tadbirlar',
        science: 'Fan',
        sports: 'Sport'
    };
    
    return `
        <article class="post" data-id="${post.id}">
            <span class="post-category category-${post.category}">${categoryNames[post.category] || post.category}</span>
            <h2>${escapeHTML(post.title)}</h2>
            <p class="post-date">${formatDate(post.date)}</p>
            <p class="post-content">${escapeHTML(post.content)}</p>
            <div class="post-actions">
                <button class="btn-like" onclick="likePost(${post.id})">
                    ❤️ ${post.likes || 0} likes
                </button>
                <button class="btn-comment" onclick="showComments(${post.id})">
                    💬 ${post.comments || 0} izoh
                </button>
            </div>
        </article>
    `;
}

// Escape HTML to prevent XSS
function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// Format date
function formatDate(dateStr) {
    const date = new Date(dateStr);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('uz-UZ', options);
}

// Search posts
function searchPosts() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (!searchTerm) {
        displayPosts(posts);
        return;
    }
    
    const filteredPosts = posts.filter(post => 
        post.title.toLowerCase().includes(searchTerm) ||
        post.content.toLowerCase().includes(searchTerm)
    );
    
    displayPosts(filteredPosts);
}

// Filter by category
function filterByCategory(category) {
    currentCategory = category;
    
    if (category === 'all') {
        displayPosts(posts);
    } else {
        const filteredPosts = posts.filter(post => post.category === category);
        displayPosts(filteredPosts);
    }
}

// Like a post
function likePost(postId) {
    fetch(`/api/posts/${postId}/like`, { method: 'POST' })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                loadPosts();
            }
        })
        .catch(() => {
            // Demo mode
            const post = posts.find(p => p.id === postId);
            if (post) {
                post.likes = (post.likes || 0) + 1;
                displayPosts(posts);
            }
        });
}

// Show comments (demo)
function showComments(postId) {
    const post = posts.find(p => p.id === postId);
    if (post) {
        alert(`Izohlar soni: ${post.comments || 0}\n\nBu demo versiya - Python Flask backend bilan ishlaydi!`);
    }
}

// Handle adding a new post
async function handleAddPost(e) {
    e.preventDefault();
    
    const title = document.getElementById('postTitle').value;
    const category = document.getElementById('postCategory').value;
    const content = document.getElementById('postContent').value;
    
    const newPost = {
        title: title,
        category: category,
        content: content
    };
    
    try {
        const response = await fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPost)
        });
        
        const data = await response.json();
        
        if (data.success) {
            alert('Post muvaffaqiyatli qo\'shildi!');
            document.getElementById('addPostForm').reset();
            loadPosts();
        } else {
            alert('Xatolik: ' + data.message);
        }
    } catch (error) {
        // Demo mode - add post locally
        newPost.id = posts.length + 1;
        newPost.date = new Date().toISOString().split('T')[0];
        newPost.likes = 0;
        newPost.comments = 0;
        
        posts.unshift(newPost);
        displayPosts(posts);
        document.getElementById('addPostForm').reset();
        alert('Post qo\'shildi (demo rejim)!');
    }
}

// Export functions for global access
window.likePost = likePost;
window.showComments = showComments;
