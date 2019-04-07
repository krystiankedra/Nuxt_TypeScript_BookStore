import { MutationTree } from "vuex";
import { LoginStateInterface } from "~/types";

export default<MutationTree<LoginStateInterface>> {
    setLoggedUser(state: LoginStateInterface, payload) {
        state.loggedUser = Object.assign({}, payload);
        state.isLogged = !state.isLogged;
    },
    setLogoutUser(state: LoginStateInterface) {
        state.isLogged = !state.isLogged;
    }
};