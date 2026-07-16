let count = 0;
function validation() {

    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const stdId = document.getElementById("stdId").value;
    const email = document.getElementById("email").value;
    const credits = document.getElementById("credit").value;
    const dept = document.getElementById("dept").value;

    let fnameerr = true;
    let lnameerr = true;
    let iderr = true;
    let emailerr = true;
    let creditserr = true;
    let depterr = true;


    if (!fname) {
        document.getElementById("fnameError").innerHTML = "First Name should be given";
    }
    else {

        document.getElementById("fnameError").innerHTML = "";
        fnameerr = false;
    }
    if (!lname) {
        document.getElementById("lnameError").innerHTML = "Last Name should be given";
    }
    else {
        lnameerr = false;
        document.getElementById("lnameError").innerHTML = "";
    }
    if (!stdId) {
        document.getElementById("stdIdError").innerHTML = "ID should be given";
    }
    else if (!stdId.includes("-")) {
        document.getElementById("stdIdError").innerHTML = "ID Should be includes '- '";
    }
    else {
        document.getElementById("stdIdError").innerHTML = "";
        iderr = false;
    }
    if (!email) {
        document.getElementById("emailError").innerHTML = "Email should be given";
    }
    else if (!email.includes("@student.aiub.edu")) {
        document.getElementById("emailError").innerHTML = "Email should be contain ''@student.aiub.edu";
    }
    else {
        document.getElementById("emailError").innerHTML = "";
        emailerr = false;
    }
if(!credits){
     document.getElementById("creditError").innerHTML = " Credit should be ";
}
    else if (credits < 0) {
        document.getElementById("creditError").innerHTML = " Credit cannot be negetive";
    }
    else if (credits >= 148) {
        document.getElementById("creditError").innerHTML = " Credit should less than 148";
    }
    else{
        document.getElementById("creditError").innerHTML="";
        creditserr = false;
    }

    if(dept != "Select -- Option"){
        document.getElementById("deptError").innerHTML = "";
        depterr =false;
    }

    
    if(!fnameerr && !lnameerr && !iderr && !emailerr && !creditserr && !depterr){
        const info = document.createElement("div");
        count++;
        info.textContent = `${count} -- ${fname} ---- ${lname} --- ${stdId} --- ${email} --- ${credits} --- ${dept}`;
        document.getElementById("stdInfo").append(info);
    }

    return false;

}