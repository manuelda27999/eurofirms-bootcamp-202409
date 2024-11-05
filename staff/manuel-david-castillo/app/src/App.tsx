import { useState } from "react";
import isUserLoggedIn from "./logic/isUserLoggedIn";
import WelcomeView from "./view/WelcomeView";
import RegisterView from "./view/RegisterView";
import LoginView from "./view/LoginView";
import HomeView from "./view/HomeView";

const App = (): JSX.Element => {
  console.log("App -> render");

  const viewState = useState<"welcome" | "register" | "login" | "home">(
    isUserLoggedIn() ? "home" : "welcome"
  );
  const view = viewState[0];
  const setView = viewState[1];

  return (
    <>
      <h1>App</h1>

      {view === "welcome" && (
        <WelcomeView
          onRegisterClick={function () {
            setView("register");
          }}
          onLoginClick={function () {
            setView("login");
          }}
        />
      )}

      {view === "register" && (
        <RegisterView
          onRegisterSuccess={function () {
            setView("login");
          }}
          onLoginClick={function () {
            setView("login");
          }}
        />
      )}

      {view === "login" && (
        <LoginView
          onRegisterClick={function () {
            setView("register");
          }}
          onLoginSuccess={function () {
            setView("home");
          }}
        />
      )}

      {view === "home" && (
        <HomeView
          onLogout={function () {
            setView("login");
          }}
        />
      )}
    </>
  );
};

export default App;
