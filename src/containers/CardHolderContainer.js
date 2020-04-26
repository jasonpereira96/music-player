import CardHolder from './../components/CardHolder'
import {connect} from 'react-redux'

const mapStateToProps = state => {
    return {
        songs: state.songs
    }
}

export default  connect(mapStateToProps)(CardHolder);