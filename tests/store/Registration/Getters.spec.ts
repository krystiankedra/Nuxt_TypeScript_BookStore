import registration from '~/store/registration';

describe('Registration getter', () => {

    const { state } = registration,
        registerUsers = state.registraitedUsers;

    test('getRegistraitedUsers', () => {
        expect(registration.getters.getRegistraitedUsers(state, 'getRegistraitedUsers', null, null)).toEqual(registerUsers);
        expect(registration.getters.getRegistraitedUsers).toBeDefined();
    });

});