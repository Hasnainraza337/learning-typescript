// Enums in

// Enums in typescript are commonly used you want to represent a set of related values and choose one value from multiple options.Enums provide a convenient way to define a set of named values and associate them with specific meanings.

// In Typescript, when enum constants are not explicity assigned numeric values,they are automaticaly assigned incremental numeric values starting from 0. The default numeric value for the first enum constant is 0,and subsequents recieve values incremented by 1.


enum Roles {
    user = "user",
    admin = "admin"
}

type LoginUser = {
    name?: string;
    email: string;
    password: string;
    role: Roles

}


const user1: LoginUser = {
    email: "hasnain@gmail.com",
    password: "123456",
    role: Roles.admin
}

const user2: LoginUser = {
    email: "raza@gmail.com",
    password: "1234",
    role: Roles.user
}

const isAdmin = (user: LoginUser) => {
    const { email, role } = user
    return role === "admin" ? `${email} is allow to edit the website` : `${email} is not allow to edit website`
}



console.log(isAdmin(user1))
console.log(isAdmin(user2))