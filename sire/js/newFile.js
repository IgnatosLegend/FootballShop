document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('orderForm');
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close');

    form.addEventListener('submit', function (event) {
        event.preventDefault();  // ������������� �������� �����

        // ���������� ��������� ����
        modal.style.display = "block";

        // ������� ����� ����� ��������
        form.reset();
    });

    // ������� ��������� ����, ���� ������ �� �������
    closeButton.addEventListener('click', function () {
        modal.style.display = "none";
    });

    // ������� ��������� ����, ���� �������� ��� ����
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});




