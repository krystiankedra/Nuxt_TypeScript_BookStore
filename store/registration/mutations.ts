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
    },
    addBookToAccount(state: RegistrationStateInterface, payload) {
        state.registraitedUsers.reduce((users: RegisterUserInterface[], user: RegisterUserInterface) => {
            if (user.login === payload.loggedUser.login) {
                user.books.push(payload.book);
            }
            return users;
        }, []);
    },
    removeBookFromAccount(state: RegistrationStateInterface, payload) {
        state.registraitedUsers.reduce((users: RegisterUserInterface[], user: RegisterUserInterface) => {
            if (user.login === payload.loggedUser.login) {
                user.books.splice(payload.data.index, 1);
            }
            return users;
        }, []);
    }
};