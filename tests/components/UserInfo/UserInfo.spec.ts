import Registration from '~/components/Registration/Registration.vue';

describe('UserInfo', () => {

    test('accountRole method', () => {
        expect(Registration.options.methods.accountRole('Give Me Admin')).toBe('admin');
        expect(Registration.options.methods.accountRole('I wont Admin')).toBe('user');
    });

});