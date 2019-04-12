import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import { ModuleTree } from 'vuex';
import { LoginModuleInterface } from '~/types';

export default<ModuleTree<LoginModuleInterface>> {
    state,
    getters,
    mutations,
    actions
};