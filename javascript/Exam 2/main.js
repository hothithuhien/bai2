var getElementById = function (id) {
    return document.getElementById(id)
};
var students = []
$(document).ready(function(){
    $.getJSON("students.json", function(result){
        students = result
      renderStudents(result)
    });
console.log(students);
});
students = JSON.parse(localStorage.getItem('students'));
var studentid = getElementById("idStudent");
var studentName = getElementById('nameStudent')
var studentBirthday = getElementById('birthdayStudent')
var studentPhone = getElementById('phoneStudent')
function addStudent() {
    let id = studentid.value;
    let name = studentName.value;
    let birthday = studentBirthday.value;
    let phoneNumber = studentPhone.value;
    const existingStudentIndex = students.findIndex(student => student.id === id);
    if (existingStudentIndex !== -1) {
        // Nếu sinh viên đã có trong danh sách, cập nhật thông tin
        students[existingStudentIndex] = { id, name, birthday, phoneNumber };
    } else {
        // Nếu sinh viên chưa có trong danh sách, thêm mới
        students.push({ id, name, birthday, phoneNumber });
    }
    // Lưu danh sách sinh viên vào Local Storage
    localStorage.setItem('students', JSON.stringify(students));
    console.log(students);
}
let validate = function () {
    isValid = true;
    var message = "This id is require";

    if (studentid.value === "") {
        studentid.nextElementSibling.firstChild.nodeValue = message;
        isValid = false;
    } else {
        studentid.nextElementSibling.firstChild.nodeValue = ""
    }

    if (studentName.value === "") {
        studentName.nextElementSibling.firstChild.nodeValue = message;
        isValid = false;
    } else {
        studentName.nextElementSibling.firstChild.nodeValue = "";
    }

    if (studentName.value.length > 5 && studentName.value.length < 15) {
        console.log('ok');
        isValid = true
    } else {
        console.log('Enter correct name');
        isValid = false
    }

    if (studentBirthday.value === "") {
        studentBirthday.nextSibling.firstChild.nodeValue = message;
        isValid = false
    } else {
        studentBirthday.nextSibling.firstChild.nodeValue = ""
    }
    let today = new Date();
    let birthday = new Date(studentBirthday.value);
    let age = today.getFullYear() - birthday.getFullYear();
    let month = today.getMonth() - birthday.getMonth();
    if (month < 0 || month == 0 && (today.getDate() - birthday.getDate() < 0)) {
        age--
    }
    if (age < 18) {
        isValid = false
        studentBirthday.nextElementSibling.firstChild.nodeValue = "Please, age must enough 18"
    }

    if (studentPhone.value === "") {
        studentPhone.nextElementSibling.firstChild.nodeValue = message;
        isValid = false
    } else {
        studentPhone.nextElementSibling.firstChild.nodeValue = ""
    }
    if (studentPhone.value.length !== 10) {
        studentPhone.nextElementSibling.firstChild.nodeValue = "Please enter 10 number";
    } else {
        studentPhone.nextElementSibling.firstChild.nodeValue = ""
    }
    addStudent()
    renderStudents(students)
    getElementById('table').getAttribute("class");
    getElementById('table').setAttribute("class", "table_display")
}

function renderStudents(studentsInput) {
    const tableForm = getElementById('add_info');
    tableForm.innerHTML = "";
    let html = ''
    for (let i = 0; i < studentsInput.length; i++) {
        html += `<tr>
        <td id="td-code">${studentsInput[i].id}</td>
        <td id="td-name">${studentsInput[i].name}</td>
        <td id="td-age">${studentsInput[i].birthday}</td>
        <td id="td-sex">${studentsInput[i].phoneNumber}</td>
        </tr>`
    }
    tableForm.innerHTML = html
}
// function renderStudents ()
getElementById('submit_form').onclick = validate;   