import { ADD_NOTE, DELETE_NOTE, SET_FILTER_KEY } from './constants';

export const addNote = (text, color, timeStamp) => dispatch => {
    console.log(dispatch);
    dispatch({
        type: ADD_NOTE,
        payload: { text, color, timeStamp }
    });
}

export const deleteNote = (timeStamp) => dispatch =>{
    dispatch({
        type: DELETE_NOTE,
        payload: {timeStamp }
    });
}

export const setFilterKey = (key) => dispatch => {
    dispatch({
        type: SET_FILTER_KEY,
        payload: {key },
    });
}