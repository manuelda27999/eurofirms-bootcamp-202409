var sections: NodeListOf<HTMLElement> = document.querySelectorAll('section')

var welcomeSection: HTMLElement = sections[0]
var registerSection: HTMLElement = sections[1]
var loginSection: HTMLElement = sections[2]
var homeSection: HTMLElement = sections[3]

registerSection.style.display = 'none'
loginSection.style.display = 'none'
homeSection.style.display = 'none'

var welcomeLinks: NodeListOf<HTMLAnchorElement> = welcomeSection.querySelectorAll('a')

var welcomeRegisterLink: HTMLAnchorElement = welcomeLinks[0]
var welcomeLoginLink: HTMLAnchorElement = welcomeLinks[1]

welcomeRegisterLink.addEventListener('click', function (event: MouseEvent) {
    event.preventDefault()

    welcomeSection.style.display = 'none'
    registerSection.style.display = ''
})

welcomeLoginLink.addEventListener('click', function (event: MouseEvent) {
    event.preventDefault()

    welcomeSection.style.display = 'none'
    loginSection.style.display = ''
})

var registerLinks: NodeListOf<HTMLAnchorElement> = registerSection.querySelectorAll('a')

var registerLoginLink: HTMLAnchorElement = registerLinks[0]

registerLoginLink.addEventListener('click', function (event: MouseEvent) {
    event.preventDefault()

    registerSection.style.display = 'none'
    loginSection.style.display = ''
})

var loginLinks: NodeListOf<HTMLAnchorElement> = loginSection.querySelectorAll('a')

var loginRegisterLink: HTMLAnchorElement = loginLinks[0]

loginRegisterLink.addEventListener('click', function (event: MouseEvent) {
    event.preventDefault()

    loginSection.style.display = 'none'
    registerSection.style.display = ''
})

const registerForm: HTMLFormElement | null = registerSection.querySelector('form')

if (registerForm) {
    registerForm.addEventListener('submit', function (event: SubmitEvent) {
        event.preventDefault()

        var registerFormInputs: NodeListOf<HTMLInputElement> = registerForm.querySelectorAll('input')

        var registerFormNameInput: HTMLInputElement = registerFormInputs[0]
        var registerFormEmailInput: HTMLInputElement = registerFormInputs[1]
        var registerFormUserNameInput: HTMLInputElement = registerFormInputs[2]
        var registerFormPasswordInput: HTMLInputElement = registerFormInputs[3]

        var name: string = registerFormNameInput.value
        var email: string = registerFormEmailInput.value
        var username: string = registerFormUserNameInput.value
        var password: string = registerFormPasswordInput.value

        var feedback: HTMLParagraphElement | null = registerSection.querySelector("p")
        if (feedback) {
            try {
                registerUser(name, email, username, password)

                registerForm.reset()
                feedback.innerText = ""

                registerSection.style.display = "none"
                loginSection.style.display = ""
            } catch (error) {
                feedback.innerText = error.message

                console.log(error)
            }
        } else {
            console.warn("El elemento <p> no se encontró en registerSection.")
        }
    })
} else {
    console.warn("Elemento registerForm no encontrado")
}


const loginForm: HTMLFormElement | null = loginSection.querySelector("form")

if (loginForm) {
    const form = loginForm as HTMLFormElement

    form.addEventListener("submit", function (event: SubmitEvent) {
        event.preventDefault()

        const loginFormInputs: NodeListOf<HTMLInputElement> = form.querySelectorAll("input")

        const loginFormUsernameInput: HTMLInputElement = loginFormInputs[0]
        const loginFormPasswordInput: HTMLInputElement = loginFormInputs[1]

        const username: string = loginFormUsernameInput.value
        const password: string = loginFormPasswordInput.value

        const feedback: HTMLParagraphElement | null = loginSection.querySelector('p')

        if (feedback) {
            try {
                const user: User | undefined = authenticateUser(username, password)

                form.reset()
                feedback.innerText = ""

                loginSection.style.display = "none"
                homeSection.style.display = ""

                const userTitle: HTMLHeadElement | null = homeSection.querySelector("h3")
                if (userTitle) {
                    userTitle.innerText = "Hello, " + user?.name + "!"
                } else {
                    console.warn("El elemento <h3> no se encontró en loginSection.")
                }

            } catch (error) {
                feedback.innerText = error.message

                console.error(error)
            }
        } else {
            console.warn("El elemento <p> no se encontró en loginSection.")
        }

    })
}

var logoutButton: HTMLButtonElement | null = homeSection.querySelector("button")

if (logoutButton) {
    logoutButton.addEventListener("click", function (event: MouseEvent) {
        event.preventDefault()

        homeSection.style.display = "none"
        loginSection.style.display = ""
    })
} else {
    console.warn("El elemento <button> no se encontró.")
}
