import {PLAY, PAUSE} from './../actions/actions'


const player = (player = {}, action) => {
    if (action.type === PLAY) {
        return {
            ...player,
            playing: true
        }
    } else if (action.type === PAUSE) {
        return {
            ...player,
            playing: false
        }
    }
    return player
}
export default player;