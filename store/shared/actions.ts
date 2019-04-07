import { ActionTree } from 'vuex';
import axios from 'axios';
import Vue from 'vue';
import { BookInterface, SharedStateInterface } from '~/types';
import * as MUTATIONS from '~/store/mutationTypes';

export default<ActionTree<SharedStateInterface, SharedStateInterface>> {
    async setBooks({ commit }) {
        try {
            const response = await axios.get('http://bootcamp.opole.pl/books/my-books/87f4');
            if (response.data.status !== 'err') {
                const books: BookInterface[] = response.data.books;
                commit(MUTATIONS.SET_BOOKS, books)
            } else {
                console.log(response.data.msg);
            }
        } catch (error) {
            console.log(error);
        }
    },
    async deleteBook({ commit }, payload: BookInterface['id']) {
        const response = await axios.delete(`http://bootcamp.opole.pl/books/delete-book/${payload}/87f4`);
        response.data.status !== 'err'
            ? commit(MUTATIONS.DELETE_BOOK, payload)
            : console.log(response.data.msg);
    },
    async addBook({ commit }, payload: BookInterface) {
        try {
            const response = await Vue.http.post('http://bootcamp.opole.pl/books/add-book/87f4', payload, { emulateJSON: true });
            response.data.status !== 'err'
                ? commit(MUTATIONS.ADD_BOOK, payload)
                : console.log(response.data.msg);
        } catch (error) {
            console.log(error);
        }
    },
    async updateBook({ commit }, payload: BookInterface) {
        try {
            const response = await Vue.http.post(
                `http://bootcamp.opole.pl/books/edit-book/${payload.id}/87f4`,
                { title: payload.title, description: payload.description, category: payload.category, subcategory: payload.subcategory},
                { emulateJSON: true }
            );
            response.data.status !== 'err'
                ? commit(MUTATIONS.UPDATE_BOOK, payload)
                : console.log(response.data.msg)
        } catch (error) {
            console.log(error);
        }
    }
};