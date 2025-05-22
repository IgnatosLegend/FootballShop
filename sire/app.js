const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const path = require('path');

const app = express();
const port = 3000;

// Парсинг данных формы
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // Папка с HTML, CSS, image

// Подключение к MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ochko123321',  // ЗАМЕНИ на свой пароль
    database: 'my_database'     // ЗАМЕНИ на свою базу
});

connection.connect(err => {
    if (err) {
        console.error('Ошибка подключения к базе:', err);
        return;
    }
    console.log('Подключено к базе данных MySQL');
});

// Обработка маршрута для корня
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));  // Путь к вашему главному HTML файлу
});

// Обработка регистрации
app.post('/register', (req, res) => {
    const { name, email, password, confirm_password } = req.body;

    if (password !== confirm_password) {
        return res.send('Пароли не совпадают');
    }

    connection.query(
        'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
        [name, email, password],
        (err, results) => {
            if (err) {
                console.error(err);
                return res.send('Ошибка при регистрации');
            }
            res.send('Регистрация прошла успешно!');
        }
    );
});

// Обработка входа
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    connection.query(
        'SELECT * FROM users WHERE email = ? AND password = ?',
        [email, password],
        (err, results) => {
            if (err) {
                console.error(err);
                return res.send('Ошибка при входе');
            }

            if (results.length > 0) {
                res.send('Вход выполнен успешно!');
            } else {
                res.send('Неверный email или пароль');
            }
        }
    );
});

app.listen(port, () => {
    console.log(`Сервер запущен: http://localhost:${port}`);
});
