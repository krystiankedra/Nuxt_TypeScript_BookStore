import login from '~/store/login';
import { RegisterUserInterface } from '~/types';

describe('Login getters', () => {

    beforeEach(() => {
        login.mutations.setLoggedUser(state, {});
        login.state.isLogged = false;
    });

    afterEach(() => {
        login.mutations.setLoggedUser(state, {});
        login.state.isLogged = false;
    });

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

    test('getLoggedUser', () => {
        login.mutations.setLoggedUser(state, payload);
        expect(login.getters.getLoggedUser(state, 'getLoggedUser', null, null)).toEqual(payload);
    });

});