import registration from '~/store/registration';
import { RegisterUserInterface, BookInterface } from '~/types';

describe('Registration mutations', () => {
    const state = registration.state,
    payload: RegisterUserInterface[] = [
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
    ],
    exampleBook: BookInterface = {
        id: '101', user: '5',
        category: '1', subcategory: '20',
        title: 'exampleBookTitle', description: 'exampleBookDescription',
        inserted: 'exampleBookInserted', modified: 'exampleBookModified'
    };

    beforeEach(() => {
        state.registraitedUsers = payload.map(item => ({...item}));
    });

    afterEach(() => {
        state.registraitedUsers = payload.map(item => ({...item}));
    });

    test('Check if can set array to registratedUsers', () => {
        expect(state.registraitedUsers).toEqual(payload);
        expect(state.registraitedUsers.length).toBe(4);
    });

    test('createNewAccount', () => {
        const newAccount: RegisterUserInterface = {
            login: "MichalJ",
            password: "MichalJ123",
            email: "MichalJ@test.com",
            age: 29,
            firstname: "Michal",
            lastname: "Jab",
            role: "admin",
            books: []
        }
        expect(state.registraitedUsers.length).toBe(4);
        registration.mutations.createNewAccount(state, newAccount);
        expect(state.registraitedUsers.length).toBe(5);
    });

    test('editAccount', () => {
        const exampleAccountToAdd: RegisterUserInterface = {
            login: "MichalJ",
            password: "MichalJ123",
            email: "MichalJ@test.com",
            age: 29,
            firstname: "Michal",
            lastname: "Jab",
            role: "admin",
            books: []
        },
        exampleAccountToEdit = {
            login: "MichalJ",
            password: "Kamil123",
            email: "Kamil@test.com",
            age: 25,
            firstname: "Kamil",
            lastname: "KamilLastName",
            role: "admin",
        };

        expect(state.registraitedUsers.length).toBe(4);
        registration.mutations.createNewAccount(state, exampleAccountToAdd);
        expect(state.registraitedUsers.length).toBe(5);
        registration.mutations.editAccount(state, exampleAccountToEdit);
        const found = state.registraitedUsers.find(user => user.login === exampleAccountToAdd.login);
        expect(found.password).toEqual(exampleAccountToEdit.password);
    });

    test('deleteAccount', () => {
        const exampleAccountToAdd: RegisterUserInterface = {
            login: "MichalJ",
            password: "MichalJ123",
            email: "MichalJ@test.com",
            age: 29,
            firstname: "Michal",
            lastname: "Jab",
            role: "admin",
            books: []
        };
        expect(state.registraitedUsers.length).toBe(4);
        registration.mutations.createNewAccount(state, exampleAccountToAdd);
        expect(state.registraitedUsers.length).toBe(5);
        registration.mutations.deleteAccount(state, 'jnowak');
        expect(state.registraitedUsers.length).toBe(4);
        const found = state.registraitedUsers.find(user => user.login === 'jnowak');
        expect(!found).toBeTruthy();
    });

    test('addBookToAccount', () => {
        const activeUser: RegisterUserInterface = {
            login: "krystian",
            password: "kkedra",
            email: "krystianVuejs@test.com",
            age: 25,
            firstname: "Krystian",
            lastname: "Kędra",
            role: "admin",
            books: []
        };
        expect(state.registraitedUsers.length).toBe(4);
        registration.mutations.addBookToAccount(state, {
            loggedUser: activeUser,
            book: exampleBook
        });
        const foundUserWithBook = state.registraitedUsers
            .find(user => user.login === activeUser.login)
                .books.find(book => book === exampleBook);

        expect(foundUserWithBook).toEqual(exampleBook);
    });

    test('removeBookFromAccount', () => {
        const activeUser: RegisterUserInterface = {
            login: "pkowalski",
            password: "pkowalski123",
            email: "pkowalski@test.com",
            age: 28,
            firstname: "Paweł",
            lastname: "Kowalski",
            role: "user",
            books: []
        },
        index: number = 0;

        expect(state.registraitedUsers.length).toBe(4);

        registration.mutations.addBookToAccount(state, {
            loggedUser: activeUser,
            book: exampleBook
        });

        registration.mutations.removeBookFromAccount(state, {
            loggedUser: activeUser,
            book: exampleBook,
            data: {
                index
            }
        });

        const checkIfExist = state.registraitedUsers
            .find(user => user.login === activeUser.login)
                .books.filter(book => book === exampleBook);

        expect(checkIfExist.length === 0).toEqual(true);
    });

});