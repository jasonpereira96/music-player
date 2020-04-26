
export const FILTER = 'FILTER';
export const PLAY = 'PLAY';
export const PAUSE = 'PAUSE';
export const NEXT = 'NEXT';
export const PREV = 'PREV';

export const filter = filterString => {
    return {
        type: FILTER,
        filterString: filterString
    };
}

export const play = songId => {
    return {
        type: PLAY,
        songId: songId
    }
}

export const pause = () => {
    return {
        type: PAUSE
    }
}