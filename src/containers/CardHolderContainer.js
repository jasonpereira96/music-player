import CardHolder from './../components/CardHolder'
import { connect } from 'react-redux'
import {songsFetched} from './../actions/actions'

const mapStateToProps = state => {
    return {
        songs: state.songs
    }
}
const mapDispatchToProps = dispatch => {
    return {
        songsFetched: (songs) => dispatch(songsFetched(songs))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardHolder);