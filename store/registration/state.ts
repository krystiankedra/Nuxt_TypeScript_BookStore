import { RegistrationStateInterface } from "~/types";

export default<RegistrationStateInterface> {
    registraitedUsers: [
        {
            login: 'admin',
            password: 'admin',
            email: 'admin@admin.com',
            age: 25,
            firstname: 'Admin',
            lastname: 'Admin',
            role: 'admin'
        },
        {
            login: 'krystian',
            password: 'test123',
            email: 'krystianVuejs@test.com',
            age: 25,
            firstname: 'Krystian',
            lastname: 'Kędra',
            role: 'user'
        }
    ]
}