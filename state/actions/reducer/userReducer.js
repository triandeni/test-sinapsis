const initialState = {
  users: [],
  loading: true,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'getUser':
      return {
        ...state,
        userData: action.payload,
        loading: false,
      };

    case 'createUser':
      return {
        ...state,
        createUser: action.payload,
        loading: false,
      };

    case 'updateUser':
      return {
        ...state,
        updateUser: action.payload,
        loading: false,
      };
    case 'deleteUser':
      return {
        ...state,
        deleteUser: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default userReducer;
