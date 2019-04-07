import { GetterTree } from "vuex";
import { LoginStateInterface } from "~/types";

export default<GetterTree<LoginStateInterface, LoginStateInterface>> {
    getIsLogged: (state: LoginStateInterface) => state.isLogged,
    getLoggedUser: (state: LoginStateInterface) => state.loggedUser
};