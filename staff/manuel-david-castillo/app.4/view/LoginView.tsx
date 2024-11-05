import React from "react";
import loginUser from "./../logic/loginUser"

interface LoginViewProps {
  onLoginSuccess: () => void;
  onRegisterClick: () => void;
}

const LoginView: React.FC<LoginViewProps> = (props) => {

  return (
    <main>
      <h2>Login</h2>

      <form
        onSubmit={function (event: React.FormEvent<HTMLFormElement>) {
          event.preventDefault();

          const formData = new FormData(event.currentTarget);

          const username = formData.get("username") as string;
          const password = formData.get("password") as string;

          try {
            loginUser(username, password)

            props.onLoginSuccess()
          } catch (error) {
            alert(error.message)
            console.error(error)
          }
        }}
      >
        <label htmlFor="username">Username</label>
        <input type="text" id="username" required/>

        <label htmlFor="password">Password</label>
        <input type="password" id="password" required/>

        <button type="submit">Login</button>

        <p></p>

        <a
          href=""
          onClick={function (event) {
            event.preventDefault();

            props.onRegisterClick();
          }}
        >
          Register
        </a>
      </form>
    </main>
  );
};

export default LoginView