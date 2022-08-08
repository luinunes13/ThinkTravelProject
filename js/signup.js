//Check if the user has already logged in at another time.
//firebase.auth().onAuthStateChanged(user => {
//    if(user){
//        window.location.href = "../html/localShopToGo.html";
//    }
//})

//Check Email
function onChangeEmail(){

    const emailIsValid = isEmailValidate();
    document.getElementById("register-button").disabled = !emailIsValid ;
    if(!emailIsValid){
        alert("Invalid Email");
    }
    toggleRegisterButtonDisable();
}

//Check Email
function isEmailValidate(){
    const email = document.getElementById("email").value;
    if(!email){
        return false;
    }
    return validateEmail(email);
            
}

//REGEX
function validateEmail(email){
    return /\S+@\S+\.\S+/.test(email);
}

//evaluates whether the password is valid
function onChangePassword(){

    const password = document.getElementById('password').value;
    if(password.length < 6){
        alert("Password needs 6 or more characters");
    }
    toggleRegisterButtonDisable();
}

//evaluates whether the password is valid
function onChangeConfirmPassword(){

    const confirmPassword = document.getElementById('confirmPassword').value;
    const password = document.getElementById('password').value;
    if(password != confirmPassword){
        alert("Password fields must be the same.");
    }
    else if(confirmPassword.length < 6){
        alert("Password needs 6 or more characters");

    }
    toggleRegisterButtonDisable();
}

//Disable the button if the fields are irregular
function toggleRegisterButtonDisable() {
    document.getElementById('register-button').disabled = !isFormValid();
}

//checks the validity of the form.
function isFormValid() {
    const email = document.getElementById('email').value;
    if (!email || !validateEmail(email)) {
        return false;
    }

    const password = document.getElementById('password').value;
    if (!password || password.length < 6) {
        return false;
    }

    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password != confirmPassword) {
        return false;
    }

    return true;
}

//Register with the help of github.
function register(){
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(
        email,password
    ).then(()=>{
        window.location.href = "../../html/localShopToGo.html";
    }).catch(error => {
        alert(getErrorMessage(error));
    })
}

//Shows errors derived from github.
function getErrorMessage(error){
    if(error.code == "auth/email-already-in-use"){
        return "Email is already in use.";
    }
    return error.message;
}