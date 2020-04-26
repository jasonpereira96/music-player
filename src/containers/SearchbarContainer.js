import Seachbar from './../components/Searchbar'
import { connect } from 'react-redux';
import { filter } from './../actions/actions';

const mapDispatchToProps = dispatch => {
    return {
        onChange: function (event) {
            return dispatch(filter(event.target.value));
        }
    }
}


export default connect(null, mapDispatchToProps)(Seachbar);