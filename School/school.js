function addData() {
    var school_name = document.getElementById('school_name').value;
    var school_address = document.getElementById('school_address').value;
    var school_email = document.getElementById('school_email').value;


    localStorage.setItem('userSchool_Name', school_name);
    localStorage.setItem('userSchool_Address', school_address);
    localStorage.setItem('userSchool_Email', school_email);
   
}

