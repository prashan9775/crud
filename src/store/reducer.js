import initialState from '../store/initialState';
import {ADD_NOTE,DELETE_NOTE,SET_FILTER_KEY} from '../Components/constants';

function updateLocalStorage(notes){
    localStorage.setItem('notes', JSON.stringify(notes));
}

export default (state=initialState,{type, payload}) => {
    const configuration = state.configuration;
    let currNotes = [];
    switch(type) {
        case ADD_NOTE:
            currNotes = [...(state.notes),payload];
            updateLocalStorage(currNotes);
            return {
                ...state,
                notes:currNotes,
                configuration: {
                    ...configuration,
                    isBeingAdded:false
                }
            }
        case DELETE_NOTE: 
            currNotes = state.notes.filter(v => v.timeStamp !== payload.timeStamp);
            updateLocalStorage(currNotes);
            return {
                ...state,
                notes: state.notes.filter(v => v.timeStamp !== payload.timeStamp)
            }
        case SET_FILTER_KEY:
            return {
                ...state,
                configuration: {
                    ...configuration,
                    filterKey: payload.key
                }
            }
        default:
            return state;
    }
}