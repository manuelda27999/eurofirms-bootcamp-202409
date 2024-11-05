import { User } from "./getUserName";

export default function loginUser(username: string, passwowrd: string) {
  if (typeof username !== "string") throw new Error("invalid usernmae");
  if (username.length < 4) throw new Error("invalid username length");

  if (typeof passwowrd !== "string") throw new Error("invalid password");
  if (passwowrd.length < 8) throw new Error("invalid password length");

  const users: User[] = JSON.parse(localStorage.users);

  const user: User | undefined = users.find(function (user) {
    return user.username === username && user.passwowrd === passwowrd;
  });

  if (user === undefined) throw new Error("wrong credentials");

  sessionStorage.userId = user.id;
}
