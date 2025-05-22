// JavaScript source code
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // �������� ����������� ��������� ������
            const url = this.getAttribute('href'); // �������� URL ��������
            document.getElementById('content').setAttribute('src', url); // ��������� �������� � iframe
        });
    });
});