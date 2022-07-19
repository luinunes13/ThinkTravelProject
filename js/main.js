/*Firebase conf*/

import { initializeApp } from 'firebase/https://think-travel-980d8-default-rtdb.europe-west1.firebasedatabase.app/';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4B5pZLuY1NIL23mvjn7gN6mtvZ8ngR2E",
    authDomain: "think-travel-980d8.firebaseapp.com",
    databaseURL: "https://think-travel-980d8-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "think-travel-980d8",
    storageBucket: "think-travel-980d8.appspot.com",
    messagingSenderId: "316025540931",
    appId: "1:316025540931:web:3d68968a71286eff68dff6",
    measurementId: "G-7D0MCFMRM0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
    const citiesCol = collection(db, 'cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
}


getCities.get();




(function() {
    var $body = document.querySelector('body');
    $body.classList.remove('no-js')
    $body.classList.add('js')


    var menu = new Menu({
        container: '.header__nav',
        toggleBtn: '.header__btnMenu',
        widthEnabled: 1024
    })

    var carouselImgs = new Carousel({
        container: '.laptop-slider .slideshow',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
    })

    var carouselQuotes = new Carousel({
        container: '.quote-slideshow',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
    })
})()

/* Webpage: Sign Up*/
let btn = document.querySelector('#verPassword')
let btnConfirm = document.querySelector('#lookConfirmPassword')


let name = document.querySelector('#name')
let labelName = document.querySelector('#labelName')
let validName = false

let username = document.querySelector('#username')
let labelUsername = document.querySelector('#labelUsername')
let validUsername = false

let password = document.querySelector('#password')
let labelPassword = document.querySelector('#labelPassword')
let validPassword = false

let confirmPassword = document.querySelector('#confirmPassword')
let labelConfirmPassword = document.querySelector('#labelConfirmPassword')
let validConfirmPassword = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

name.addEventListener('keyup', () => {
    if (name.value.length <= 2) {
        labelName.setAttribute('style', 'color: red')
        labelName.innerHTML = 'Name *enter at least 3 characters'
        name.setAttribute('style', 'border-color: red')
        validName = false
    } else {
        labelName.setAttribute('style', 'color: green')
        labelName.innerHTML = 'Name'
        name.setAttribute('style', 'border-color: green')
        validName = true
    }
})

usurname.addEventListener('keyup', () => {
    if (usurname.value.length <= 4) {
        labelUsurname.setAttribute('style', 'color: red')
        labelUsurname.innerHTML = 'Username *Enter at least 3 characters'
        username.setAttribute('style', 'border-color: red')
        validUsername = false
    } else {
        labelUsername.setAttribute('style', 'color: green')
        labelUsername.innerHTML = 'Username'
        username.setAttribute('style', 'border-color: green')
        validUsername = true
    }
})

password.addEventListener('keyup', () => {
    if (password.value.length <= 5) {
        labelPassword.setAttribute('style', 'color: red')
        labelPassword.innerHTML = 'Password *Enter at least 5 characters'
        password.setAttribute('style', 'border-color: red')
        validPassword = false
    } else {
        labelPassword.setAttribute('style', 'color: green')
        labelPassword.innerHTML = 'Password'
        password.setAttribute('style', 'border-color: green')
        validPassword = true
    }
})

confirmPassword.addEventListener('keyup', () => {
    if (password.value != confirmPassword.value) {
        labelConfirmPassword.setAttribute('style', 'color: red')
        labelConfirmPassword.innerHTML = 'Confirm Password *The password does not confirm'
        confirmPassword.setAttribute('style', 'border-color: red')
        validConfirmPassword = false
    } else {
        labelConfirmPassword.setAttribute('style', 'color: green')
        labelConfirmPassword.innerHTML = 'Confirm Password'
        confirmPassword.setAttribute('style', 'border-color: green')
        validConfirmPassword = true
    }
})

function signup() {
    if (validName && validUsurname && validPassword && validConfirmPassword) {
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push({
            nameCad: name.value,
            userCad: username.value,
            passwordCad: password.value
        })

        localStorage.setItem('listaUser', JSON.stringify(listaUser))


        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = '<strong>Registering user...</strong>'
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''

        setTimeout(() => {
            window.location.href = 'file:///Users/luisanunes/Documents/Macbook/NCI/Project/Think%20Travel%20Project/login.html'
        }, 3000)


    } else {
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<strong>Please fill in all fields correctly before registering</strong>'
        msgSuccess.innerHTML = ''
        msgSuccess.setAttribute('style', 'display: none')
    }
}

btn.addEventListener('click', () => {
    let inputPassword = document.querySelector('#password')

    if (inputPassword.getAttribute('type') == 'password') {
        inputPassword.setAttribute('type', 'text')
    } else {
        inputPassword.setAttribute('type', 'password')
    }
})

btnConfirm.addEventListener('click', () => {
    let inputConfirmPassword = document.querySelector('#confirmPassword')

    if (inputConfirmPassword.getAttribute('type') == 'password') {
        inputConfirmPassword.setAttribute('type', 'text')
    } else {
        inputConfirmPassword.setAttribute('type', 'password')
    }
})


/* Webpage: Sign in*/

let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', () => {
    let inputPassword = document.querySelector('#password')

    if (inputPassword.getAttribute('type') == 'password') {
        inputPassword.setAttribute('type', 'text')
    } else {
        inputPassword.setAttribute('type', 'password')
    }
})

function signin() {
    let username = document.querySelector('#username')
    let userLabel = document.querySelector('#userLabel')

    let password = document.querySelector('#password')
    let passwordLabel = document.querySelector('#passwordLabel')

    let msgError = document.querySelector('#msgError')
    let listaUser = []

    let userValid = {
        name: '',
        user: '',
        password: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser.forEach((item) => {
        if (username.value == item.userCad && username.value == item.passwordCad) {

            userValid = {
                name: item.nameCad,
                username: item.userCad,
                password: item.passwordCad
            }

        }
    })

    if (username.value == userValid.user && password.value == userValid.password) {
        window.location.href = 'file:///Users/luisanunes/Documents/Macbook/NCI/Project/Think%20Travel%20Project/index.html'

        let mathRandom = Math.random().toString(16).substr(2)
        let token = mathRandom + mathRandom

        localStorage.setItem('token', token)
        localStorage.setItem('userSignin', JSON.stringify(userValid))
    } else {
        userLabel.setAttribute('style', 'color: red')
        username.setAttribute('style', 'border-color: red')
        passwordLabel.setAttribute('style', 'color: red')
        password.setAttribute('style', 'border-color: red')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'username or incorrect password'
        password.focus()
    }

}