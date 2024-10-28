function authenticateUser(username, password) {
    if (typeof username !== "string")
        throw new Error("Invalid username");
    if (username.length < 4)
        throw new Error("Invalid username length");
    if (typeof password !== "string")
        throw new Error("Invalid password");
    if (password.length < 8)
        throw new Error("Invalid password length");
    var user = users.find(function (user) {
        return user.name === username && user.password === password;
    });
    return user;
}
function registerUser(name, email, username, password) {
    if (typeof name !== "string")
        throw new Error("Invalid name");
    if (name.length < 1)
        throw new Error("Invalid name length");
    if (typeof email !== "string")
        throw new Error("Invalid email");
    if (email.length < 6)
        throw new Error("Invalid email length");
    if (!email.includes("@"))
        throw new Error("Invalid email format");
    if (!email.includes("."))
        throw new Error("Invalid email format");
    var indexOfAt = email.indexOf('@');
    var indexOfDot = email.indexOf('.');
    if (indexOfDot < indexOfAt)
        throw new Error('invalid email format');
    // TODO add more rules for email validation (position of @ and .)
    if (typeof username !== 'string')
        throw new Error('invalid username');
    if (username.length < 4)
        throw new Error('invalid username length');
    if (typeof password !== 'string')
        throw new Error('invalid password');
    if (password.length < 8)
        throw new Error('invalid password length');
    var user = users.find(function (user) {
        return user.email === email || user.username === username;
    });
    if (user !== undefined)
        throw new Error('user already exists');
    user = {
        name: name,
        email: email,
        username: username,
        password: password
    };
    users.push(user);
}
