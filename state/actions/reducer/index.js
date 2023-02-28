const { combineReducers } = require('redux');
const { default: userReducer } = require('./userReducer');

const reducer = combineReducers({
  users: userReducer,
});

export default reducer;
