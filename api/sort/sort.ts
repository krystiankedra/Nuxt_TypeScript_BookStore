export const sortByProperty =
    <T>(value: string, isAsceding: boolean) =>
        (item: T, nextItem: T) =>
            isAsceding
                ? item[value].toLowerCase() < nextItem[value].toLowerCase() ? -1 : 1
                : item[value].toLowerCase() < nextItem[value].toLowerCase() ? 1 : -1;