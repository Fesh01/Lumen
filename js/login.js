function checkData() {
    var fname = document.getElementById(fname);
    var enterEmail = document.getElementById('email').value;
    var pw = document.getElementById('pw').value;


    var getEmail = localStorage.getItem('userEmail');
    var getPw = localStorage.getItem('userPw');
   

            if (enterEmail == getEmail) {
              
                    
                if (pw == getPw) {
                    alert("Welcome " + fname);
                    window.location.href = `/home/home.html?=${fname}`;
                }
                else{
                    alert("wrong password")
                }

            }else{
                alert("Invaild details")
            }
          }
             
 
        //   alert("Welcome " + user[0].fname);
        //   window.location.href = `welcome.html?id=${user[0].id}`;
