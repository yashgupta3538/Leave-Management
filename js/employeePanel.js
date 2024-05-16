function apply() {
    const name = document.getElementById("unameEmp").value;
    const data = JSON.parse(localStorage.getItem("tempEmp"));
    const main = JSON.parse(localStorage.getItem('mainRecord'));
    const mainIndex = main.findIndex(employee => employee.Username == name);
    if (!main[mainIndex].Leaves > 0)
        alert("Zero leaves left!!");
    else {
        const leaveRecord = {
            Username: data.Username,
            Subject: document.getElementById("Subject").value,
            Date: document.getElementById("Date").value,
            Designation: document.getElementById("designation").value,
            Status: 'Pending'
        }
        if (localStorage.getItem("leaveRecord") == undefined) {
            data.Leaves--;
            localStorage.setItem("leaveRecord", JSON.stringify([leaveRecord]));
        }
        else {
            const getRecord = localStorage.getItem("leaveRecord");
            const newData = JSON.parse(getRecord);
            let count = newData.filter(e => e.Username == name && (e.Status == 'Approved' || e.Status == 'Pending')).length;
            data.Leaves = data.Leaves - count;
            if (data.Leaves < 0) data.Leaves = 0;
            newData.push(leaveRecord);
            localStorage.setItem("leaveRecord", JSON.stringify(newData));
        }
        localStorage.setItem('tempEmp', JSON.stringify(data));
        // update master
        const master = JSON.parse(localStorage.getItem("mainRecord"));
        const masterVal = master.find(employee => employee.Username == name);
        const index = master.findIndex(employee => employee.Username == name);
        masterVal.Leaves--;
        master[index] = masterVal;
        localStorage.setItem('mainRecord', JSON.stringify(master));
    }
}

function saveChange() {
    const obj = JSON.parse(localStorage.getItem("mainRecord"));

    const oldPass = document.getElementById("employeeOldPassword").value;
    const newPass = document.getElementById("employeeNewPassword").value;
    const confirmPass = document.getElementById("employeeConfirmPassword").value;

    const employee = JSON.parse(localStorage.getItem("tempEmp"));
    const uname = employee.Username;

    const temp1 = employee.Username == uname && employee.Password == oldPass
    const val = obj.find(employee => employee.Username == uname && employee.Password == oldPass);
    if (val == undefined)
        alert("Old Password is wrong!!");
    else {
        if (newPass == confirmPass) {
            temp1.Password = newPass;
            val.Password = newPass;
            localStorage.setItem("tempEmp", JSON.stringify(employee));
            localStorage.setItem("mainRecord", JSON.stringify(obj));
            alert("Successfully changes!!");
        }
        else {
            alert("New password and cofirm password must be same!!");
        }
    }
}

const lve = document.getElementById("leave");
lve.addEventListener("click", (e) => {
    const data = JSON.parse(localStorage.getItem("tempEmp"));
    document.getElementById("unameEmp").value = data.Username;
    document.getElementById("unameEmp").disabled = true;
})

function logout() {
    localStorage.removeItem("tempEmp");
    alert('Logout Successfully!!');
    window.location.href = '../html/employeeLogin.html';
}