import shared from '~/store/shared';
import { BookInterface } from '~/types';

describe('Shared mutations', () => {

    const state = shared.state,
    payload: BookInterface = {
        id: '29', user: '5',
        category: '1', subcategory: '20',
        title: 'TestTitle', description: 'TestDescription',
        inserted: 'TestInserted', modified: 'TestModified'
    },
    payloadToUpdate: BookInterface = {
        id: '24', user: '5',
        category: '1', subcategory: '20',
        title: 'TestTitleUpdate', description: 'TestDescriptionUpdate',
        inserted: 'TestInsertedUpdate', modified: 'TestModifiedUpdate'
    },
    payloadArray = [
        {
            id: '24', user: '5',
            category: '1', subcategory: '20',
            title: 'TestTitle', description: 'TestDescription',
            inserted: 'TestInserted', modified: 'TestModified'
        },
        {
            id: '23', user: '5',
            category: '1', subcategory: '20',
            title: 'TestTitleUpdate', description: 'TestDescriptionUpdate',
            inserted: 'TestInsertedUpdate', modified: 'TestModifiedUpdate'
        }
    ];

    beforeEach(() => {
        shared.mutations.setBooks(state, payloadArray);
        shared.mutations.setPropertyToSort(state, '');
        shared.mutations.setSerachedValue(state, '');
    });

    afterEach(() => {
        shared.mutations.setBooks(state, payloadArray);
        shared.mutations.setPropertyToSort(state, '');
        shared.mutations.setSerachedValue(state, '');
    });

    test('setBook', () => {
        shared.mutations.setBooks(state, payloadArray.map(item => ({ ...item })));
        expect(state.books.length).toBeGreaterThanOrEqual(2);
    });

    test('deleteBook', () => {
        shared.mutations.deleteBook(state, '24');
        expect(state.books.length).toBe(1);
    });

    test('addBook', () => {
        shared.mutations.addBook(state, payload);
        expect(state.books.length).toBe(3);
    });

    test('updateBook', () => {
        shared.mutations.updateBook(state, Object.assign({} ,payloadToUpdate));
        const updatedDescription = state.books.find((book: BookInterface) => book.id === payloadToUpdate.id);
        expect(updatedDescription.description).toBe('TestDescriptionUpdate');
        expect(updatedDescription.title).toBe('TestTitleUpdate');
    });

    test('setSerachedValue', () => {
        shared.mutations.setSerachedValue(state, 'Update');
        expect(shared.state.searchedValue).toBe('Update');
    });

    test('setPropertyToSort', () => {
        shared.mutations.setPropertyToSort(state, 'name');
        expect(shared.state.propertyToSort).toBe('name');
    });

    test('setSelectedBook', () => {
        shared.mutations.setSelectedBook(state, '29');
        expect(shared.state.selectedBook).toEqual(payload);
    });
});