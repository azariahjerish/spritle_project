document.getElementById("teacher-log").addEventListener("click", () => {
    document.getElementById("log").style.display="flex"
})

document.getElementById("student-log").addEventListener("click", () => {
    document.getElementById("log").style.display="flex"
})

document.getElementById("close").addEventListener("click", () => {
    document.getElementById("log").style.display="none"
})

var email = "name@example.com";
var password = "password";

document.getElementById("validation").addEventListener("click", () => {
    var em = document.getElementById("email").value;
    var ps = document.getElementById("pass").value;

    if (email == em && ps == password) {
        document.location.href="/main.html"
    }

    document.getElementById("email").value = "";
    document.getElementById("pass").value="";
})