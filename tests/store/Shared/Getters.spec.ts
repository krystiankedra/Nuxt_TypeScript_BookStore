import shared from '~/store/shared';
import { BookInterface } from '~/types';

describe('Shared getters', () => {

    const payloadArray: BookInterface[] = [
        {
            id: '24', user: '5',
            category: '1', subcategory: '20',
            title: 'TestTitle', description: 'TestDescription',
            inserted: 'TestInserted', modified: 'TestModified'
        },
        {
            id: '15', user: '5',
            category: '1', subcategory: '20',
            title: 'HarryPotter', description: 'Harry',
            inserted: 'HarryInserted', modified: 'HarryModified'
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
        shared.mutations.setBooks(state, payloadArray);
        shared.mutations.setSerachedValue(state, 'update');
        expect(shared.getters.getBooks(state, 'getBooks', null, null)).toEqual([]);
        expect(shared.getters.getBooks(state, 'getBooks', null, null).length).toBe(0);
    });

});