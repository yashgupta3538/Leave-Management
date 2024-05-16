document.getElementById("employeeAdd").addEventListener("click", (e) => {
    const mainRecord = {
        Name: document.getElementById("employeeName").value,
        Username: document.getElementById("employeeUsername").value,
        Password: document.getElementById("employeePassword").value,
        Leaves: parseInt(document.getElementById("Leaves").value)
    }
    if (localStorage.getItem("mainRecord") == undefined) {
        localStorage.setItem("mainRecord", JSON.stringify([mainRecord]));
    }
    else {
        const getRecord = localStorage.getItem("mainRecord");
        const newData = JSON.parse(getRecord);
        newData.push(mainRecord);
        localStorage.setItem("mainRecord", JSON.stringify(newData));
    }

})

function employeeList() {
    window.location.href = "../html/employeeList.html";
}

function logoutAdmin() {
    localStorage.removeItem("tempAdmin");
    alert('Logout Successfully!!');
    window.location.href = '../html/adminLogin.html';
}