const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ochko123321',
    database: 'my_database'
});

connection.connect((err) => {
    if (err) {
        console.error('������ ����������� � ��:', err.message);
        return;
    }
    console.log('����������� � ���� ������ �������!');
});

module.exports = connection;
