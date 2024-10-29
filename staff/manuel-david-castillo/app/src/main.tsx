import { ReactElement } from "react"
import * as ReactDOM from "react-dom/client"

var title: ReactElement = <h1>App</h1>

var welcomeView = <main>
    <h2>Welcome!</h2>
    <p>Please, <a href="">Register</a> or <a href="">Login</a></p>
</main>

var registerView = <main>
    <h2>Register</h2>

    <form action="">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />

        <label htmlFor="email">Email</label>
        <input type="text" id="email" />

        <label htmlFor="username">Username</label>
        <input type="text" id="username" />

        <label htmlFor="password">Password</label>
        <input type="text" id="password" />

        <button type="submit">Regsiter</button>
    </form>

    <p></p>

    <a href="">Login</a>
</main>

var loginView = <main>
    <h2>Login</h2>

    <form>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />

        <label htmlFor="password">Password</label>
        <input type="text" id="password" />

        <button type="submit">Login</button>
    </form>

    <p></p>

    <a href="">Register</a>
</main>

var rootElement = document.querySelector("#root")
var root = ReactDOM.createRoot(rootElement)

root.render([title, welcomeView, loginView])