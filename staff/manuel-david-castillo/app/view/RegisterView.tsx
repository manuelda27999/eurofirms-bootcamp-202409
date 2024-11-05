import React from "react";
import registerUser from "./../logic/registerUser"

interface RegisterViewProps {
  onRegisterSuccess: () => void;
  onLoginClick: () => void;
}

const RegisterView: React.FC<RegisterViewProps> = (props)  => {
  console.log("RegisterView -> render");

  return (
        <main>
      <h2>Register</h2>

      <form
        onSubmit={function (event: React.FormEvent<HTMLFormElement>): void {
          event.preventDefault();

          const formData = new FormData(event.currentTarget)

          const name = formData.get("name") as string;
          const email = formData.get("email") as string;
          const username = formData.get("username") as string;
          const password = formData.get("password") as string;

          try {
            registerUser(name, email, username, password);

            props.onRegisterSuccess();
          } catch (error) {
            alert(error.message);

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