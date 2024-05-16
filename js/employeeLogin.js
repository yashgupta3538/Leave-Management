function adminCredentials(uname, pass) {
    const obj = JSON.parse(localStorage.getItem("mainRecord"));
    const val = obj.find(employee => employee.Username == uname && employee.Password == pass);
    if (val == undefined)
        return false;
    else {
        const tempEmp = {
            Username: uname,
            Password: pass,
            Leaves: val.Leaves
        };
        localStorage.setItem("tempEmp", JSON.stringify(tempEmp));
        return true;
    }
}

function employee() {
    window.location.href = "../html/employeeLogin.html";
}

document.getElementById("submitBtn").addEventListener("click", (e) => {
    e.preventDefault();
    const username = document.getElementById("empUname").value;
    const password = document.getElementById("empPass").value;
    if (adminCredentials(username, password))
        window.location.href = "../html/employeePanel.html";
    else
        alert("Wrong username/password!!");
})