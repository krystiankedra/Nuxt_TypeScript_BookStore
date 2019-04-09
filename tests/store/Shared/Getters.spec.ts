import shared from '~/store/shared';

describe('Shared getters', () => {
    const state = shared.state,
    payload = {
        id: '24', user: '5',
        category: '1', subcategory: '20',
        title: 'TestTitle', description: 'TestDescription',
        inserted: 'TestInserted', modified: 'TestModified'
    };

    test('getBooks', () => {
        shared.mutations.setBooks(state, []);
        shared.mutations.setSerachedValue(state, 'Title');
        shared.mutations.addBook(state, payload);
        const getBooks = shared.getters.getBooks;
        expect(getBooks.length).toBe(1);
    });

});