# 🎓 Maktab Blog (School Blog)

Maktab blog loyihasi - HTML, CSS, JavaScript, PHP va Python (Flask) texnologiyalarida yozilgan.

## 🛠️ Texnologiyalar

- **Frontend**: HTML5, CSS3, JavaScript
- **Backend (PHP)**: PHP + MySQL
- **Backend (Python)**: Python + Flask

## 📁 Fayl tuzilishi

```
school-blog/
├── index.html          # Asosiy HTML sahifa
├── index.php           # PHP versiyasi
├── app.py              # Python Flask backend
├── script.js           # JavaScript (frontend)
├── style.css           # CSS stillar
├── login.html          # Login sahifasi
├── posts.php           # Postlar API (PHP)
├── add_post.php        # Post qo'shish API (PHP)
├── database.sql        # MySQL ma'lumotlar bazasi
├── requirements.txt    # Python kutubxonalar
├── README.md           # Ushbu fayl
│
├── static/             # Flask statik fayllar
│   ├── style.css
│   └── script.js
│
└── templates/          # Flask HTML shablonlar
    └── index_flask.html
```

## 🚀 Ishga tushirish

### PHP versiyasi

1. XAMPP yoki WAMP o'rnating
2. `school-blog` papkasini `htdocs` papkasiga ko'chiring
3. MySQL da `database.sql` faylini import qiling
4. Brauzerda `http://localhost/school-blog/index.php` ni oching

### Python Flask versiyasi

```bash
# 1. Papkaga kiring
cd school-blog

# 2. Virtual muhit yarating
python -m venv venv
source venv/bin/activate  # Linux/Mac
# yoki
venv\Scripts\activate     # Windows

# 3. Kutubxonalarni o'rnating
pip install -r requirements.txt

# 4. Ishga tushiring
python app.py
```

5. Brauzerda `http://localhost:5000` ni oching

## ✨ Xususiyatlar

- 📰 Postlar kategoriyasi bo'yicha filtrlash
- 🔍 Postlarni qidirish
- ❤️ Postlarni like qilish
- ➕ Yangi post qo'shish
- 👤 Foydalanuvchi autentifikatsiya (demo)
- 📱 Responsive dizayn

## 📸 Rasmlar

Loyiha CSS3 gradientlar va modern dizayn prinsiplarini qo'llagan.

## 📝 litsenziya

MIT License
