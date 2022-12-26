function addData() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var school_name = document.getElementById('school_name').value;
    var pw = document.getElementById('pw').value;
    var cpw = document.getElementById('cpw').value;

    localStorage.setItem('userFname', fname);
    localStorage.setItem('userLname', lname);
    localStorage.setItem('userEmail', email);
    localStorage.getItem('userSchool_name', school_name);
    localStorage.setItem('userPw', pw);
    localStorage.setItem('userCpw', cpw);
}