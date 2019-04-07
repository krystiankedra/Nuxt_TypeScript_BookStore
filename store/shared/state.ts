import { SharedStateInterface } from "~/types";

export default<SharedStateInterface> {
    books: [],
    tableHeaders: [
        { name: 'ID' },
        { name: "Category" },
        { name: "Subcategory" },
        { name: "Title" },
        { name: "Description" }
    ],
    searchedValue: '',
    propertyToSort: 'id',
    isAsceding: true,
    selectedBook: {}
};