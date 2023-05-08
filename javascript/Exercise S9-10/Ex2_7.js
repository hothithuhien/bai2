let getElementById = function (id) {
    return document.getElementById(id)
}

function addStudent() {
    let students = [];
    let code = getElementById("code").value;
    let name = getElementById("name").value;
    let age = getElementById("age").value;
    let sex = getElementById("sex").value;
    let student = {
        code: code,
        name: name,
        age: age,
        sex: sex
    };
    students.push(student);

    displayinfo(students);
}

getElementById("submit").onclick = addStudent;

function displayinfo(students) {
    const listStudent = getElementById('displayinfo')

    for (let i = 0; i < students.length; i++) {
        let item = document.createElement('tr');
        item.innerHTML = `<tr>
        <td id="td-code">${students[i].code}</td>
        <td id="td-name">${students[i].name}</td>
        <td id="td-age">${students[i].age}</td>
        <td id="td-sex">${students[i].sex}</td>
    </tr>`
        listStudent.appendChild(item);
    }
}

