import React from "react";
import registerUser from "./../logic/registerUser"

interface RegisterViewProps {
  onRegisterSuccess: () => void;
  onLoginClick: () => void;
}

interface ErrorMessage {
  message: string
}

const RegisterView: React.FC<RegisterViewProps> = (props)  => {
  console.log("RegisterView -> render");

  return (
        <main>
      <h2>Register</h2>

      <form
        onSubmit={function (event: React.SyntheticEvent): void {
          event.preventDefault();
          const target = event.target as typeof event.target & {
            name: {value: string}
            email: {value: string}
            username: {value: string}
            password: {value: string}
          }

          const name = target.name.value
          const email = target.email.value
          const username = target.username.value
          const password = target.password.value

          try {
            registerUser(name, email, username, password);

            props.onRegisterSuccess();
          } catch (error) {
            const typedError = error as ErrorMessage;
            alert(typedError.message);
            console.error(error);
          }
        }}
      >
        <label htmlFor="name">Name</label>
        <input type="text" id="name" required/>

        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" required/>

        <label htmlFor="username">Username</label>
        <input type="text" id="username" required/>

        <label htmlFor="password">Password</label>
        <input type="password" id="password" required/>

        <button type="submit">Register</button>
      </form>

      <p></p>

      <a
        href=""
        onClick={function (event: React.FormEvent<HTMLAnchorElement>) {
          event.preventDefault();

          props.onLoginClick();
        }}
      ></a>
    </main>
  );
}

export default RegisterView;