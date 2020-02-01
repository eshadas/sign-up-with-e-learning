function runCode() {
    alert("DO YOU WANT TO CONTINUE WITH FACEBOOK!!!!!");
}
function runFast() {
    alert("DO YOU WANT TO CONTINUE WITH TWITTER!!!!!")
}
function myFun() {
    //variables
    var correct_way = /^[A-Za-z]+$/;
    var a = document.getElementById("user_name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var con_password = document.getElementById("con_password").value;
    //Invalid user name
    if (a === "") {
        document.getElementById("username").innerHTML = "**Please fill username";
        return false;
    }
    else if (a.match(correct_way)) {
        document.getElementById("username").innerHTML = "";
        true;
    }
    else {
        document.getElementById("username").innerHTML = "*only alphabets are allowed";
        return false;
    }
    //Invalid phone number
    if (phone === "") {
        document.getElementById("phn").innerHTML = "**Please fill phone number";
        return false;
    }
    if (isNaN(phone)) {
        document.getElementById("phn").innerHTML = "**Only digits are allowed";
        return false;
    }
    if (phone.length != 10) {
        document.getElementById("phn").innerHTML = "**Phone number must be 10 digits only";
        return false;
    }
    else {
        document.getElementById("phn").innerHTML = "";
        true;
    }
    //Invalid email id
    if (email === "") {
        document.getElementById("em").innerHTML = "**Please fill email";
        return false;
    }
    if (email.indexOf('@') <= 0) {
        document.getElementById("em").innerHTML = "**@ invalid position";
        return false;
    }
    if ((email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 3) != '.')) {
        document.getElementById("em").innerHTML = "**Invalid email";
        return false;
    }
    else {
        document.getElementById("em").innerHTML = "";
        true;
    }
    //Invalid password
    if (password === "") {
        document.getElementById("pass").innerHTML = "**Please fill password";
        return false;
    }
    if ((password.length <= 6) || (password.length > 20)) {
        document.getElementById("pass").innerHTML = "**password length must be between 6 to 20";
        return false;
    }
    else {
        document.getElementById("pass").innerHTML = "";
        true;
    }
    //Confirm password
    if (con_password === "") {
        document.getElementById("cpass").innerHTML = "**Please fill confirm password";
        return false;
    }
    else {
        document.getElementById("cpass").innerHTML = "";
        true;
    }
    //password matching
    if (password != con_password) {
        document.getElementById("cpass").innerHTML = "**passwords are not matching";
        return false;
    }
    else {
         document.getElementById("cpass").innerHTML = "";
    }
    alert("sign up completed");
}
