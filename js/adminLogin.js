function adminCredentials(uname, pass) {
    obj = JSON.parse(localStorage.getItem("adminRecord"));
    if (uname == obj.Username && pass == obj.Password) {
        const tempAdmin = {
            Username: uname,
            Password: pass
        };
        localStorage.setItem("tempAdmin", JSON.stringify(tempAdmin));
        return true;
    }
    else
        return false;
}

function admin() {
    window.location.href = "../html/adminLogin.html";
    const adminRecord = {
        Username: "admin@gmail.com",
        Password: "12345678"
    }
    localStorage.setItem("adminRecord", JSON.stringify(adminRecord));
}

const btn = document.getElementById("submitBtn");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    const username = document.getElementById("adminUname").value;
    const password = document.getElementById("adminPass").value;
    if (adminCredentials(username, password))
        window.location.href = "../html/adminPanel.html";
    else
        alert("Wrong username/password!!");
})