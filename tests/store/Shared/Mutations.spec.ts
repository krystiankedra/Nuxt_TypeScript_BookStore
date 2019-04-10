import shared from '~/store/shared';
import { BookInterface } from '~/types';

describe('Shared mutations', () => {

    const state = shared.state,
    payload: BookInterface = {
        id: '24', user: '5',
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
    payloadArray = [payload];

    test('setBook', () => {
        shared.mutations.setBooks(state, payloadArray);
        expect(state.books.length).toBeGreaterThanOrEqual(1);
    });

    test('addBook', () => {
        shared.mutations.addBook(state, payload);
        expect(state.books.length).toBe(2);
    });

    test('updateBook', () => {
        shared.mutations.updateBook(state, payloadToUpdate);
        const updatedDescription = state.books.find((book: BookInterface) => book.id === payloadToUpdate.id).description;
        expect(updatedDescription).toBe('TestDescriptionUpdate');
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
        shared.mutations.setSelectedBook(state, '24');
        expect(shared.state.selectedBook).toEqual(payload);
    });

    test('deleteBook', () => {
        shared.mutations.deleteBook(state, '24');
        expect(state.books.length).toBe(0);
    });

});