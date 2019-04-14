import { GetterTree } from "vuex";
import { LoginStateInterface, SharedStateInterface } from "~/types";

export default<GetterTree<LoginStateInterface, SharedStateInterface>> {
    getIsLogged: (state: LoginStateInterface) => state.isLogged,
    getLoggedUser: (state: LoginStateInterface) => state.loggedUser
};