export type User = {
    id: string,
    name: string,
    email: string, 
    username: string,
    passwowrd: string
}

export function getUserName() {
    const users: User[] = JSON.parse(localStorage.users)

    const user: User = users.find(function (user: User) {
        return user.id === sessionStorage.userId
    })

    if (user === undefined) throw new Error("user not found")

    return user.name
}