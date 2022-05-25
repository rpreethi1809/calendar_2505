let tname;
let tpassword;

function logint() {
    tname=document.getElementById("teacher_name").value;
    tpassword=document.getElementById("teacher_password").value;
    console.log(tname,tpassword);
    window.location="calendar.html"
}