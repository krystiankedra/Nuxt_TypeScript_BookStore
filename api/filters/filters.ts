import { BookInterface } from "~/types";

export const filterById = <T extends { id: string }>(value: BookInterface['id']) => (item: T) => item.id !== value;
export const filterByValue = <T extends { title: string, description: string }>(value: string) => (item: T) =>
    item.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    || item.description.toLocaleLowerCase().includes(value.toLocaleLowerCase());