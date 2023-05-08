fetch('https://jsonplaceholder.typicode.com/posts?fbclid=IwAR2C5GxM6J31eKvmjcriOkYAdI10mZf53SlW3hO5DesM3vlCqXuq79cthpA')
.then(response => response.json())
.then(data => {
    myArray = data;
    console.log(data)
    renderInfo(myArray);
})
// .catch(error => console.error(error));
function renderInfo(studentsInput) {
    const tableForm = document.getElementById('add_info');
    tableForm.innerHTML = "";
    let html = ''
    for (let i = 0; i < studentsInput.length; i++) {
        html += `<tr>
        <td id="td-code">${studentsInput[i].userId}</td>
        <td id="td-name">${studentsInput[i].id}</td>
        <td id="td-age">${studentsInput[i].title}</td>
        <td id="td-sex">${studentsInput[i].body}</td>
        </tr>`
    }
    tableForm.innerHTML = html
}