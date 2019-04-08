import { BookInterface } from "~/types";

export const filterById = (value: BookInterface['id']) => (item: BookInterface) => item.id !== value;
export const filterByValue = (value: string) => (item: BookInterface) =>
    item.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    || item.description.toLocaleLowerCase().includes(value.toLocaleLowerCase());