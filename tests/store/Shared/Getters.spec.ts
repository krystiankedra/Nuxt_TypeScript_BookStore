import shared from '~/store/shared';

describe('Shared getters', () => {

    const payloadArray = [
        {
            id: '24', user: '5',
            category: '1', subcategory: '20',
            title: 'TestTitle', description: 'TestDescription',
            inserted: 'TestInserted', modified: 'TestModified'
        }
    ],
    state = shared.state;

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

    test('getBooks', () => {
        const getBooks = shared.getters.getBooks;
        expect(getBooks.length).toBe(1);
    });

});