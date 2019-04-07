import { GetterTree } from "vuex";
import { RegistrationStateInterface } from "~/types";

export default<GetterTree<RegistrationStateInterface, RegistrationStateInterface>> {
    getRegistraitedUsers: (state: RegistrationStateInterface) => state.registraitedUsers
};