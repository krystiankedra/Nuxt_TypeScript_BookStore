import { MutationTree } from "vuex";
import { RegistrationStateInterface, RegistrationInterface } from "~/types";

export default<MutationTree<RegistrationStateInterface>> {
    createNewAccount(state: RegistrationStateInterface, payload: RegistrationInterface) {
        state.registraitedUsers.push(Object.assign({}, payload));
    },
    editAccount(state: RegistrationStateInterface, payload: RegistrationInterface) {
        payload = Object.assign({}, payload);
        state.registraitedUsers.reduce((acc: RegistrationInterface[], val: RegistrationInterface) => {
            if (val.login === payload.login) {
                val.password = payload.password;
                val.email = payload.email;
                val.firstname = payload.firstname;
                val.lastname = payload.lastname;
                val.age = payload.age;
            }
            return acc;
        }, []);
    }
};