import { GetterTree } from "vuex";
import { RegistrationStateInterface, SharedStateInterface } from "~/types";

export default<GetterTree<RegistrationStateInterface, SharedStateInterface>> {
    getRegistraitedUsers: (state: RegistrationStateInterface) => state.registraitedUsers
};