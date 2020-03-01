import { createStore, compose ,applyMiddleware} from "redux";
import reducer from "./reducer";
import thunk from 'redux-thunk';

export const configureStore = (initialState) => {
    const store = createStore(
        reducer,
        initialState,
        applyMiddleware(thunk)
    );
    store.dispatch({type:'action'})
    return store;
}

export default configureStore;