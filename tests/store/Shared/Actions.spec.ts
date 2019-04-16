import { createLocalVue } from '@vue/test-utils';
import shared from '~/store/shared';
import Vuex from 'vuex';
import * as ACTIONS from '~/store/actionTypes';

describe('Shared Actions', () => {

    test('setBooks', async () => {
        const localVue = createLocalVue();
        localVue.use(Vuex);
        const store = new Vuex.Store(shared);
        await store.dispatch(ACTIONS.SET_BOOKS);
        expect(store.state.books.length).toBeGreaterThan(0);
        const currentState = store.state.books;
        // await store.dispatch(ACTIONS.DELETE_BOOK, '37101');
        // const updatedState = store.state.books;
        // expect(currentState.length).toBeGreaterThan(updatedState.length);
    });

});