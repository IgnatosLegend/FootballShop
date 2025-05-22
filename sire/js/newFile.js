document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('orderForm');
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close');

    form.addEventListener('submit', function (event) {
        event.preventDefault();  // предотвращаем отправку формы

        // Показываем модальное окно
        modal.style.display = "block";

        // Очищаем форму после отправки
        form.reset();
    });

    // Закрыть модальное окно, если нажать на крестик
    closeButton.addEventListener('click', function () {
        modal.style.display = "none";
    });

    // Закрыть модальное окно, если кликнуть вне окна
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});




