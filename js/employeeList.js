function listUpdate() {
    if (localStorage.getItem('tempAdmin') == undefined) {
        window.location.href = '../html/adminLogin.html';
    }
    else {
        const record = JSON.parse(localStorage.getItem("mainRecord"));
        const tablebody = document.getElementById("table-data").getElementsByTagName("tbody");
        tablebody[0].innerHTML = record
            .map(
                (student) => {
                    return `<tr>
                <td>${student.Name}</td>
                <td>${student.Username}</td>
                <td>${student.Password}</td>
                <td>${student.Leaves}</td>
            </tr>`}
            ).join("");
    }
}