const adminData = [
    { username: 'admin', password: 'Aa@123456' },
    { username: 'admin2', password: 'admin123admin' }
];
localStorage.setItem("admin", JSON.stringify(adminData));
const loginModal = document.getElementById('login-modal');
const loginSubmit = document.getElementById('submit');
const form = document.getElementById('form');
const logoutButton = document.getElementById('logout-button');
const accountData = JSON.parse(localStorage.getItem("admin"));
let isLoggedIn = false;
if (localStorage.getItem('isLoggedIn') === 'true') {
    isLoggedIn = true;
}
if (isLoggedIn) {
    loginModal.style.display = 'none';
    form.style.display = 'block';
} else {
    loginModal.style.display = 'block';
    form.style.display = 'none';
}
loginSubmit.addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const account = accountData.find((acc) => acc.username === username && acc['password'] === password);
    if (account) {
        // đăng nhập thành công
        isLoggedIn = true;
        localStorage.setItem('isLoggedIn', true);
        loginModal.style.display = 'none';
        form.style.display = 'block';
    } else {
        // đăng nhập không thành công
        alert('Thông tin đăng nhập không đúng');
    }
});

logoutButton.addEventListener('click', () => {
    isLoggedIn = false;
    localStorage.removeItem('isLoggedIn');
    loginModal.style.display = 'block';
    form.style.display = 'none';
    localStorage.removeItem('students');
});