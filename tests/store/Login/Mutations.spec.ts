import login from '~/store/login';
import { RegisterUserInterface } from '~/types';

describe('Login mutations', () => {

    const state = login.state,
    payload: RegisterUserInterface = {
        login: 'Krystian',
        password: 'KrystianTest123',
        email: 'krystian@test.com',
        age: 25,
        firstname: 'Krystian',
        lastname: 'kedra',
        role: 'admin',
        books: [
            {
                id: '55', user: '5',
                category: '1', subcategory: '20',
                title: 'ExampleBookTitle', description: 'ExampleBookDescription',
                inserted: 'ExampleBookInserted', modified: 'ExampleBookModified'
            }
        ]
    };

    beforeEach(() => {
        login.mutations.setLoggedUser(state, {});
        login.state.isLogged = false;
    });

    afterEach(() => {
        login.mutations.setLoggedUser(state, {});
        login.state.isLogged = false;
    });

    test('setLoggedUser', () => {
        login.mutations.setLoggedUser(state, payload);
        expect(state.isLogged).toBe(true);
        expect(state.loggedUser.login).toBe(payload.login);
        expect(state.loggedUser.password).toBe(payload.password);
        expect(state.loggedUser.email).toBe(payload.email);
        expect(state.loggedUser.age).toBe(payload.age);
        expect(state.loggedUser.firstname).toBe(payload.firstname);
        expect(state.loggedUser.lastname).toBe(payload.lastname);
        expect(state.loggedUser.role).toBe(payload.role);
        const found = state.loggedUser.books.find(book => book.id === '55');
        expect(found).toBeTruthy();
        expect(found.description).toBe('ExampleBookDescription');
        expect(state.loggedUser.books.length).toBe(1);
    });

    test('setLogoutUser', () => {
        login.mutations.setLoggedUser(state, payload);
        login.mutations.setLogoutUser(state, null);
        expect(state.isLogged).toBe(false);
    });

});