import { GetterTree } from "vuex";
import {  SharedStateInterface } from "~/types";
import { filterByValue } from "~/api/filters/filters";
import { sortByProperty } from "~/api/sort/sort";

export default<GetterTree<SharedStateInterface, SharedStateInterface>> {
    getBooks: (state: SharedStateInterface) => state.books
        .filter(filterByValue(state.searchedValue))
        .sort(sortByProperty(state.propertyToSort, state.isAsceding)),
    getTableHeaders: (state: SharedStateInterface) => state.tableHeaders,
    getSelectedBook: (state: SharedStateInterface) => state.selectedBook
};