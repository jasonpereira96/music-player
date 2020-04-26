
export const FILTER = 'FILTER';

export const filter = filterString => {
    return {
        type: FILTER,
        filterString: filterString
    };
}