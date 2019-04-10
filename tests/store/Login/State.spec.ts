import login from '~/store/login';

describe('Login state', () => {

    test('State defaults', () => {
        expect(login.state.isLogged).toEqual(false);
        expect(login.state.loggedUser).toEqual({});
    });

});