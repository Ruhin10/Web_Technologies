let totalcount = 0;

function validation() {

    const usertName = document.getElementById("uName").value;
    const password = document.getElementById("pass").value;

    let hasNameError = true;
    let hasPassError = true;

    if (!usertName) {
        document.getElementById("uNameError").innerHTML = "User name Require";
        hasNameError = true;
    }
    else {
        document.getElementById("uNameError").innerHTML = "";
        hasNameError = false;
    }

    if (!password) {
        document.getElementById("passError").innerHTML = "Password Require";
         hasPassError = true;
    }
    else {
        document.getElementById("passError").innerHTML = "";
         hasPassError = false;
    }

    if(!hasNameError && !hasPassError){
        document.getElementById("count").innerHTML= ++totalcount;
    }


    return false
}