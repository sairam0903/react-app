import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { IBasicState, basicReducer } from '../reducers/basicReducer';

// Create an interface for the application state
export interface IAppState {
    basicState: IBasicState
}

// Create the root reducer
const rootReducer = combineReducers<IAppState>({
    basicState: basicReducer
});

// Create a configure store function of type `IAppState`
export default function configureStore(): Store<IAppState, any> {
    const store = createStore(
        rootReducer,
        {},
        composeWithDevTools(
            applyMiddleware(thunk)
        )
    );
    return store;
}
