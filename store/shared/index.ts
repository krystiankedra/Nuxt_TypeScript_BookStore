import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import { ModuleTree } from 'vuex';
import { SharedModuleInterface } from '~/types';

export default<ModuleTree<SharedModuleInterface>> {
    state,
    getters,
    mutations,
    actions
};