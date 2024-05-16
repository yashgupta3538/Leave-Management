function leaveList() {
    window.location.href = '../html/leaveList.html';
}

function listUpdate() {
    const record = JSON.parse(localStorage.getItem("leaveRecord"));
    const temp = JSON.parse(localStorage.getItem('tempEmp'));
    const tempUname = temp.Username;
    const aa = record.filter(employee => employee.Username == tempUname);
    const tablebody = document.getElementById("table-data").getElementsByTagName("tbody");
    tablebody[0].innerHTML = aa
        .map(
            (student) => {
                return `<tr>
                <td>${student.Username}</td>
                <td>${student.Subject}</td>
                <td>${student.Date}</td>
                <td>${student.Designation}</td>
                <td>${student.Status}</td>
            </tr>`}
        ).join("");
}