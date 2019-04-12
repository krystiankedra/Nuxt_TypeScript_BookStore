import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import { ModuleTree } from 'vuex';
import { RegistrationModuleInterface } from '~/types';

export default<ModuleTree<RegistrationModuleInterface>> {
    state,
    getters,
    mutations,
    actions
};