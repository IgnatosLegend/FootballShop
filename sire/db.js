const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ochko123321',
    database: 'my_database'
});

connection.connect((err) => {
    if (err) {
        console.error('Ошибка подключения к БД:', err.message);
        return;
    }
    console.log('Подключение к базе данных успешно!');
});

module.exports = connection;
