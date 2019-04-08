import { MutationTree } from "vuex";
import { RegistrationStateInterface, RegisterUserInterface } from "~/types";

export default<MutationTree<RegistrationStateInterface>> {
    createNewAccount(state: RegistrationStateInterface, payload: RegisterUserInterface) {
        state.registraitedUsers.push(Object.assign({}, payload));
    },
    editAccount(state: RegistrationStateInterface, payload: RegisterUserInterface) {
        payload = Object.assign({}, payload);
        state.registraitedUsers.reduce((acc: RegisterUserInterface[], val: RegisterUserInterface) => {
            if (val.login === payload.login) {
                val.password = payload.password;
                val.email = payload.email;
                val.firstname = payload.firstname;
                val.lastname = payload.lastname;
                val.age = payload.age;
            }
            return acc;
        }, []);
    },
    deleteAccount(state: RegistrationStateInterface, payload: RegisterUserInterface['login']) {
        state.registraitedUsers = state.registraitedUsers.filter((user: RegisterUserInterface) => user.login !== payload);
    }
};