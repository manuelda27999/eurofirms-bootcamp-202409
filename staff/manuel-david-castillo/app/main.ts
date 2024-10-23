var sections = document.querySelectorAll('section')

var welcomeSection = sections[0]
var registerSection = sections[1]
var loginSection = sections[2]
var homeSection = sections[3]

registerSection.style.display = 'none'
loginSection.style.display = 'none'
homeSection.style.display = 'none'

var welcomeLinks = welcomeSection.querySelectorAll('a')

var welcomeRegisterLink = welcomeLinks[0]
var welcomeLoginLink = welcomeLinks[1]

welcomeRegisterLink.addEventListener('click', function (event) {
    event.preventDefault()

    welcomeSection.style.display = 'none'
    registerSection.style.display = ''
})

welcomeLoginLink.addEventListener('click', function () {
    event.preventDefault()

    welcomeSection.style.display = 'none'
    loginSection.style.display = ''
})

var registerLinks = registerSection.querySelectorAll('a')

var registerLoginLink = registerLinks[0]

registerLoginLink.addEventListener('click', function () {
    event.preventDefault()

    registerSection.style.display = 'none'
    loginSection.style.display = ''
})

var loginLinks = loginSection.querySelectorAll('a')

var loginRegisterLink = loginLinks[0]

loginRegisterLink.addEventListener('click', function (event) {
    event.preventDefault()

    loginSection.style.display = 'none'
    registerSection.style.display = ''
})

var registerForm = registerSection.querySelector('form')

registerForm.addEventListener('submit', function (event) {
    event.preventDefault()

    var registerFormInputs = registerForm.querySelectorAll('input')

    var registerFormNameInput = registerFormInputs[0]
    var registerFormEmailInput = registerFormInputs[1]
    var registerFormUserNameInput = registerFormInputs[2]
    var registerFormPasswordInput = registerFormInputs[3]

    var name = registerFormNameInput.value
    var email = registerFormEmailInput.value
    var username = registerFormUserNameInput.value
    var password = registerFormPasswordInput.value

    var user: User = {}
    user.name = name
    user.email = email
    user.username = username
    user.password = password

    users.push(user)

    registerForm.reset()

    registerSection.style.display = 'none'
    loginSection.style.display = ''
})