export const filterById = <T extends { id: string }>(value: T['id']) => (item: T): boolean => item.id !== value;
export const filterByValue = <T extends { title: string, description: string }>(value: string) => (item: T): boolean =>
    item.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    || item.description.toLocaleLowerCase().includes(value.toLocaleLowerCase());