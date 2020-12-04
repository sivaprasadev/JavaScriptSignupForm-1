const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('re-password')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();//It checks for user input data
    finalCheck();//It checks whether all input fields are in a success stage or not
})
/*alertDisable function will disable success class when form submits data */
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

const alertPrompt = (successInc, count) => {
    if (successInc === count) {
        alert('You have successfully registred :)')
        username.value = ''
        email.value = ''
        password.value = ''
        password2.value = ''
        alertDisable(username, email, password, password2)
    }
}

const finalCheck = () => {
    let formCon = document.getElementsByClassName('form-control')
    var count = formCon.length - 1; //Total number of input field
    for (var i = 0; i < formCon.length; i++) {
        if (formCon[i].className === "form-control success") {
            var successInc = i; // value of i will store here when each condition become true
            alertPrompt(successInc, count)//function will call alert() if every input field is OK.
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
        setErrorFor(username, 'Username Cannot be blank !')

    } else if (usernameValue.length <= 5) {
        setErrorFor(username, 'Username must be greater than 5 characters !')
    } else {
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
        setErrorFor(password, 'Password Cannot be blank !')
    } else if (passwordValue.length < 8) {
        setErrorFor(password, 'Password must be atleast 8 in length !')
    } else {
        setSuccessFor(password)
    }
    if (password2Value === '') {
        setErrorFor(password2, 'Confirm Password Cannot be blank !')

    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'Passwords does not match !')
    } else {
        setSuccessFor(password2)
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    small.innerText = message
    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}