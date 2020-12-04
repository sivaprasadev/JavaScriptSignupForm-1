const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('re-password')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
    finalCheck();
})

function alertDisable(input1, input2, input3, input4) {
    const formControl = input1.parentElement
    const formControl1 = input2.parentElement
    const formControl2 = input3.parentElement
    const formControl3 = input4.parentElement
    formControl.className = 'form-control'
    formControl1.className = 'form-control'
    formControl2.className = 'form-control'
    formControl3.className = 'form-control'
}

const sendData = (sRate, count) => {
    if (sRate === count) {
        alert('Thanks')
        username.value = ''
        email.value = ''
        password.value = ''
        password2.value = ''
        alertDisable(username, email, password, password2)
    }
}

const finalCheck = () => {
    let formCon = document.getElementsByClassName('form-control')
    var count = formCon.length - 1;
    for (var i = 0; i < formCon.length; i++) {
        if (formCon[i].className === "form-control success") {
            var sRate = 0 + i;
            sendData(sRate, count)
        } else {
            return false
        }
    }

}

function checkInputs() {
    //get the value from inputs
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()
    if (usernameValue === '') {
        //show error
        // add error class
        setErrorFor(username, 'Username Cannot be blank !')

    } else {
        // add success class
        setSuccessFor(username)

    }

    if (emailValue === '') {
        setErrorFor(email, 'Email Cannot be blank !')
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, "It's not an email format")
    } else {
        setSuccessFor(email)

    }

    if (passwordValue === '') {

        //show error
        // add error class
        setErrorFor(password, 'Password Cannot be blank !')
    } else {
        // add success class
        setSuccessFor(password)
    }
    if (password2Value === '') {

        //show error
        // add error class
        setErrorFor(password2, 'This field Cannot be blank !')
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'Passwords does not match !')
    } else {
        // add success class
        setSuccessFor(password2)

    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small')

    //add error msg inside the small tag
    small.innerText = message

    //add error class
    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}