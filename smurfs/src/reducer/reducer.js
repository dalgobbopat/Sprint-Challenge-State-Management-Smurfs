import {FETCHING_DATA, FETCHING_COMPLETE, FETCHING_FAIL} from '../components/actions/action';

const initialState = {
    smurfData: [],
    isFetching: false,
    error: ''
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_DATA:
            return {
                ...state,
                isFetching: true,
                error: ''
        }
        case FETCHING_COMPLETE:
            return {
                ...state,
                isFetching: false,
                error:'',
                smurfData: action.payload
        }
        case FETCHING_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
        }
        default:
            return state;
    }
}