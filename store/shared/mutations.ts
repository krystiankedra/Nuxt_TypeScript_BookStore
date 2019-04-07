import { BookInterface, SharedStateInterface, TableHeaderInterface } from '~/types/index';
import { filterById } from '~/api/filters/filters';
import { MutationTree } from 'vuex';

export default<MutationTree<SharedStateInterface>> {
    setBooks(state: SharedStateInterface, payload: BookInterface[]) {
        state.books = payload;
    },
    deleteBook(state: SharedStateInterface, payload: BookInterface["id"]) {
        state.books = state.books.filter(filterById(payload));
    },
    setSerachedValue(state: SharedStateInterface, payload: string) {
        state.searchedValue = payload;
    },
    setPropertyToSort(state: SharedStateInterface, payload: TableHeaderInterface['name']) {
        const newProperty: string = payload.toLowerCase();
        const isSortBySameProperty: boolean = state.propertyToSort === newProperty;

        isSortBySameProperty
            ? state.isAsceding = !state.isAsceding
            : state.isAsceding = true;

        state.propertyToSort = newProperty;
    },
    addBook(state: SharedStateInterface, payload: BookInterface) {
        state.books.push(Object.assign({}, payload));
    },
    updateBook(state: SharedStateInterface, payload: BookInterface) {
        state.books.reduce((acc: BookInterface[], val: BookInterface) => {
            if (payload.id === val.id) {
                val.title = payload.title;
                val.description = payload.description;
                val.category = payload.category;
                val.subcategory = payload.subcategory;
            }
            return acc;
        }, []);
    },
    setSelectedBook(state: SharedStateInterface, payload: string) {
        const selectedBook: BookInterface = state.books.find(book => book.id === payload);
        state.selectedBook = Object.assign({}, selectedBook);
    },
    setRandomBook(state: SharedStateInterface) {
        const randomBook: BookInterface = state.books[ Math.floor( Math.random() * state.books.length ) ];
        state.selectedBook = Object.assign({}, randomBook);
    }
};