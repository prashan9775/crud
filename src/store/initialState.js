function setNotesInitialState(){
    let notes = JSON.parse(localStorage.getItem('notes'));
    return notes || [];
}
export default {
    notes:setNotesInitialState(),
    configuration:{
        isBeingAdded: false,
        filterKey: 'none',
    }
}