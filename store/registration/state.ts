import { RegistrationStateInterface } from "~/types";

export default<RegistrationStateInterface> {
    registraitedUsers: [
        {
            login: "admin",
            password: "admin",
            email: "admin@admin.com",
            age: 35,
            firstname: "Admin",
            lastname: "Admin",
            role: "admin",
            books: []
        },
        {
            login: "krystian",
            password: "kkedra",
            email: "krystianVuejs@test.com",
            age: 25,
            firstname: "Krystian",
            lastname: "Kędra",
            role: "admin",
            books: []
        },
        {
            login: "pkowalski",
            password: "pkowalski123",
            email: "pkowalski@test.com",
            age: 28,
            firstname: "Paweł",
            lastname: "Kowalski",
            role: "user",
            books: []
        },
        {
            login: "jnowak",
            password: "jnowak123",
            email: "jnowak@test.com",
            age: 23,
            firstname: "Jan",
            lastname: "Nowak",
            role: "user",
            books: []
        }
    ]
};