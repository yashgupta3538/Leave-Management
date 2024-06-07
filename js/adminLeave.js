function listUpdate() {
    if (localStorage.getItem('tempAdmin') == undefined) {
        window.location.href = '../html/adminLogin.html';
    }
    else {
        const record = JSON.parse(localStorage.getItem("leaveRecord"));
        const tablebody = document.getElementById("table-data").getElementsByTagName("tbody");
        tablebody[0].innerHTML = record
            .map(
                (student, index) => {
                    return `<tr>
                <td>${student.Username}</td>
                <td>${student.Subject}</td>
                <td>${student.Date}</td>
                <td>${student.Designation}</td>
                <td>${student.Status}</td>
                <td> <button type="button" onclick="approve(${index})">Approved</button>
                     <button type="button" onclick="reject(${index})">Rejected</button> </td>
            </tr>`}
            ).join("");
    }
}

function approve(index) {
    let obj = JSON.parse(localStorage.getItem("leaveRecord"));
    if (obj[index].Status == 'Approved') {
        alert("Already Approved");
    }
    else {
        obj[index].Status = 'Approved';
        localStorage.setItem("leaveRecord", JSON.stringify(obj));
        location.reload();
    }
}

function reject(index) {
    let obj = JSON.parse(localStorage.getItem("leaveRecord"));
    const master = JSON.parse(localStorage.getItem("mainRecord"));
    const masterVal = master.find(employee => employee.Username == obj[index].Username);
    const index1 = master.findIndex(employee => employee.Username == obj[index].Username);
    masterVal.Leaves++;
    master[index1] = masterVal;
    localStorage.setItem('mainRecord', JSON.stringify(master));
    obj[index].Status = 'Rejected';
    localStorage.setItem("leaveRecord", JSON.stringify(obj));
    location.reload();
}

function leaveManager() {
    window.location.href = '../html/adminLeave.html';
}