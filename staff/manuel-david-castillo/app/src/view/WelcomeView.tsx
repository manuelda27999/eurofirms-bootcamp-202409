import React from "react"

interface WelcomeViewProps  {
  onRegisterClick: () => void,
  onLoginClick: () => void
}

const WelcomeView = (props: WelcomeViewProps): JSX.Element => {
  console.log("Welcomeview -> render");

  return (
    <main>
      <h2>Welcome!</h2>
      <p>
        Please,{" "}
        <a
          href=""
          onClick={function (event: React.MouseEvent<HTMLAnchorElement>) : void {
            event.preventDefault();

            props.onRegisterClick();
          }}
        >
          Register
        </a>{" "}
        or{" "}
        <a
          href=""
          onClick={function (event: React.MouseEvent<HTMLAnchorElement>) : void {
            event.preventDefault();

            props.onLoginClick();
          }}
        >Login</a>
      </p>
    </main>
  );
}

export default WelcomeView