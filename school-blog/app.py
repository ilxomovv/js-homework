# School Blog - Python Flask Backend

from flask import Flask, jsonify, request, render_template
import json
import os
from datetime import datetime

app = Flask(__name__)

# Database file path
POSTS_FILE = 'posts.json'

# Sample data for demo mode
SAMPLE_POSTS = [
    {
        'id': 1,
        'title': "Yangi o'quv yili boshlandi!",
        'category': 'news',
        'content': "Maktabimizda 2025-2026 o'quv yili tantanali ravishda boshlandi. Barcha o'quvchilarni yangi o'quv yili bilan tabriklaymiz!",
        'date': '2026-02-10',
        'likes': 45,
        'comments': 12
    },
    {
        'id': 2,
        'title': "Sport musobaqasi g'oliblari",
        'category': 'sports',
        'content': "Maktabimizda o'tkazilgan sport musobaqasida 9-A sinf g'olib bo'ldi. Barcha ishtirokchilarga rahmat!",
        'date': '2026-02-08',
        'likes': 32,
        'comments': 8
    },
    {
        'id': 3,
        'title': 'Fan oyligi boshlandi',
        'category': 'science',
        'content': 'Bu oy maktabimizda fan oyligi. Barcha fan o\'qituvchilari qiziqarli tadbirlar tayyorlamoqda.',
        'date': '2026-02-05',
        'likes': 28,
        'comments': 5
    },
    {
        'id': 4,
        'title': 'Bayram tadbiri',
        'category': 'events',
        'content': '8-Mart Xalqaro xotin-qizlar kuni munosabati bilan bayram tadbiri o\'tkaziladi. Barcha xonimlarni tabriklaymiz!',
        'date': '2026-02-03',
        'likes': 56,
        'comments': 20
    }
]

def load_posts():
    """Load posts from JSON file or return sample data"""
    if os.path.exists(POSTS_FILE):
        try:
            with open(POSTS_FILE, 'r', encoding='utf-8') as f:
                return json.load(f)
        except:
            pass
    return SAMPLE_POSTS

def save_posts(posts):
    """Save posts to JSON file"""
    with open(POSTS_FILE, 'w', encoding='utf-8') as f:
        json.dump(posts, f, ensure_ascii=False, indent=2)

# Routes
@app.route('/')
def index():
    """Main page"""
    posts = load_posts()
    return render_template('index_flask.html', posts=posts)

@app.route('/api/posts', methods=['GET'])
def get_posts():
    """Get all posts API"""
    posts = load_posts()
    return jsonify({'success': True, 'posts': posts})

@app.route('/api/posts', methods=['POST'])
def add_post():
    """Add new post API"""
    data = request.get_json()
    
    if not data or not data.get('title') or not data.get('content'):
        return jsonify({'success': False, 'message': 'Noto\'g\'ri ma\'lumotlar'}), 400
    
    posts = load_posts()
    
    new_post = {
        'id': len(posts) + 1,
        'title': data['title'],
        'content': data['content'],
        'category': data.get('category', 'news'),
        'date': datetime.now().strftime('%Y-%m-%d'),
        'likes': 0,
        'comments': 0
    }
    
    posts.insert(0, new_post)
    save_posts(posts)
    
    return jsonify({'success': True, 'message': 'Post muvaffaqiyatli qo\'shildi'})

@app.route('/api/posts/<int:post_id>/like', methods=['POST'])
def like_post(post_id):
    """Like a post"""
    posts = load_posts()
    
    for post in posts:
        if post['id'] == post_id:
            post['likes'] = post.get('likes', 0) + 1
            save_posts(posts)
            return jsonify({'success': True, 'likes': post['likes']})
    
    return jsonify({'success': False, 'message': 'Post topilmadi'}), 404

@app.route('/api/search', methods=['GET'])
def search_posts():
    """Search posts"""
    query = request.args.get('q', '').lower()
    posts = load_posts()
    
    if not query:
        return jsonify({'success': True, 'posts': posts})
    
    filtered = [p for p in posts if query in p['title'].lower() or query in p['content'].lower()]
    return jsonify({'success': True, 'posts': filtered})

if __name__ == '__main__':
    # Create templates folder if not exists
    if not os.path.exists('templates'):
        os.makedirs('templates')
    
    print("🚀 School Blog Python Backend running on http://localhost:5000")
    app.run(debug=True, port=5000)
