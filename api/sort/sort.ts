import { BookInterface } from "~/types";

export const sortByProperty =
    (value: string, isAsceding: boolean) =>
        (item: BookInterface, nextItem: BookInterface) =>
            isAsceding
                ? item[value].toLowerCase() < nextItem[value].toLowerCase() ? -1 : 1
                : item[value].toLowerCase() < nextItem[value].toLowerCase() ? 1 : -1;