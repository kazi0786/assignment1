function validate() {
    var n = document.getElementById("name").value;
    var sID = document.getElementById("staffid").value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var mail = document.getElementById("email").value;
    var passformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,12}$/;
    var pwd = document.getElementById("password").value;
    var conpwd = document.getElementById("confirm-password").value;
    var add = document.getElementById("address").value;
    var qua = document.getElementById("qualification").value;
    var exper = document.getElementById("expertise").value;
    var phoneformat = /^[0-9]{10}$/;
    var phn = document.getElementById("phone").value;
    

    
    
    if (n==""){
        alert("Please Type Your Name.");
        return false;
        
    }else if (sID==""){
        alert("Enter Your Staff ID.");
        return false;
        
    }else if (mail=="") {
        alert("Enter Your Email Address.");
        return false;
    }else if (!mail.match(mailformat)) {
        alert("Enter correct formet(eg.XXXXX@gmail.com).");
        return false;
    }else if (pwd=="") {
        alert("Enter Your Password");
        return false;
    }else if (!pwd.match(passformat)) {
        alert("Invalid password! Password must have contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character (#,$,%,& etc.) ");
        return false;
    }else if (conpwd=="") {
        alert("Re-type Your password");
        return false;

    }else if (pwd !=conpwd) {
        alert("password don't match");
        return false;
    }else if (add=="") {
        alert("Enter Your Address (eg. 5/520 Collins Stree, Hobart, TAS).");
        return false;
    }else if (qua=="") {
        alert("Enter Your Qualification (eg. PhD in Computer Science).");
        return false;
    }else if (exper=="") {
        alert("Enter Your Expertise (eg. Web Development).");
        return false;
    }else if (phn=="") {
        alert("Enter Your Phone Number.");
        return false;
    }else if (!phn.match(phoneformat)) {
        alert("Invalid Phone Number. Follow the example (eg. 04XXXXXXXX)");
        return false;
    }
}



function studentformValidation() {
    var studName = document.getElementById("name2").value;
    var studID = document.getElementById("studentid").value;

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var mail = document.getElementById("email2").value;
    var passformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,12}$/;
    var pwd = document.getElementById("password2").value;
    var conpwd = document.getElementById("confirm-password2").value;
    var add = document.getElementById("address2").value;
    var dobformat = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
    var dob = document.getElementById("dateofbirth").value;
    var phoneformat = /^[0-9]{10}$/;
    var phn = document.getElementById("phone2").value;
    

    
    
    if (studName==""){
        alert("Please Type Your Name.");
        return false;
        
    }else if (studID==""){
        alert("Enter Your Student ID.");
        return false;
        
    }else if (mail=="") {
        alert("Enter Your Email Address.");
        return false;
    }else if (!mail.match(mailformat)) {
        alert("Enter correct formet(eg.XXXXX@gmail.com).");
        return false;
    }else if (pwd=="") {
        alert("Enter Your Password");
        return false;
    }else if (!pwd.match(passformat)) {
        alert("Invalid password! Password must have contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character (#,$,%,& etc.) ");
        return false;
    }else if (conpwd=="") {
        alert("Re-type Your password");
        return false;

    }else if (pwd !=conpwd) {
        alert("password don't match");
        return false;
    }else if (dob=="") {
        alert("Enter Your Age.");
        return false;
    }else if (!dob.match(dobformat)) {
        alert("Invalid Data Format (eg. MM/DD/YYYY");
        return false;
    }else if (add=="") {
        alert("Enter Your Address (eg. 5/520 Collins Stree, Hobart, TAS).");
        return false;
    }else if (phn=="") {
        alert("Enter Your Phone Number.");
        return false;
    }else if (!phn.match(phoneformat)) {
        alert("Invalid Phone Number. Follow the example (eg. 04XXXXXXXX)");
        return false;
    }
}



