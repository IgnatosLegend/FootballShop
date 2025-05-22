// JavaScript source code
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Отменяем стандартное поведение ссылки
            const url = this.getAttribute('href'); // Получаем URL страницы
            document.getElementById('content').setAttribute('src', url); // Загружаем страницу в iframe
        });
    });
});