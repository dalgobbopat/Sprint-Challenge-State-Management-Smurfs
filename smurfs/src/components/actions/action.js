import axios from 'axios';
export const FETCHING_DATA = 'FETCHING_DATA';
export const FETCHING_COMPLETE = 'FETCHING_COMPLETE';
export const FETCHING_FAIL = 'FETCHING_FAIL';

export const fetchData = () => {
    dispatch({ type: FETCHING_DATA});

    axios
    .get('http://localhost:3333/smurfs')
    .then(response => dispatch({ type: FETCHING_COMPLETE, payload: response.data}))
    .catch(err => dispatch({ FETCHING_FAIL, payload: err.response}))
};