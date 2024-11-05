import React from "react";
import loginUser from "./../logic/loginUser";

interface LoginViewProps {
  onLoginSuccess: () => void;
  onRegisterClick: () => void;
}

interface ErrorMessage {
  message: string;
}

const LoginView: React.FC<LoginViewProps> = (props) => {
  return (
    <main>
      <h2>Login</h2>

      <form
        onSubmit={function (event: React.SyntheticEvent): void {
          event.preventDefault();
          const target = event.target as typeof event.target & {
            username: {value: string}
            password: {value: string}
          }
          

          const username = target.username.value
          const password = target.password.value

          try {
            loginUser(username, password);

            props.onLoginSuccess();
          } catch (error) {
            const typedError = error as ErrorMessage;
            alert(typedError.message);
            console.error(error);
          }
        }}
      >
        <label htmlFor="username">Username</label>
        <input type="text" id="username" required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" required />

        <button type="submit">Login</button>

        <p></p>

        <a
          href=""
          onClick={function (event: React.MouseEvent<HTMLAnchorElement>) {
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

export default LoginView;
