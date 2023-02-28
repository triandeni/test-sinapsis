import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './actions/reducer';

export const store = createStore(reducer, {}, applyMiddleware(thunk));
