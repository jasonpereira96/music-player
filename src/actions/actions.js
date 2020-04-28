
export const FILTER = 'FILTER';
export const PLAY = 'PLAY';
export const PAUSE = 'PAUSE';
export const NEXT = 'NEXT';
export const PREV = 'PREV';
export const TIMEUPDATE = 'TIMEUPDATE';
export const VOLUMECHANGE = 'VOLUMECHANGE';

export const filter = filterString => {
    return {
        type: FILTER,
        filterString: filterString
    };
}

export const play = songId => {
    return {
        type: PLAY,
        songId: songId //will be undefined in case of the same song -> Play/Pause
    };
}

export const pause = () => {
    return {
        type: PAUSE
    };
}
export const next = () => {
    return {
        type: NEXT
    };
}
export const prev = () => {
    return {
        type: PREV
    };
}
export const timeUpdate = (currentTime, duration) => {
    return {
        type: TIMEUPDATE,
        currentTime,
        duration
    };
}
export const volumeChange = value => {
    return {
        type: VOLUMECHANGE,
        volume: value
    };
}