import shared from '~/store/shared';

describe('Shared state', () => {
    test('State defaults', () => {
        expect(shared.state.books).toEqual([]);
        expect(shared.state.searchedValue).toEqual('');
        expect(shared.state.propertyToSort).toEqual('id');
        expect(shared.state.isAsceding).toEqual(true);
        expect(shared.state.selectedBook).toEqual({});
        expect(shared.state.tableHeaders).toEqual([
            { name: 'ID' },
            { name: "Category" },
            { name: "Subcategory" },
            { name: "Title" },
            { name: "Description" }
        ]);
        expect(shared.state).toBeDefined();
    });
});