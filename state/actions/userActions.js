export const getUser = (userData) => {
  return {
    type: 'getUser',
    payload: userData,
  };
};

export const createUser = (data) => {
  return {
    type: 'createUser',
    payload: data,
  };
};

export const updateUser = (updateData) => {
  return {
    type: 'updateUser',
    payload: updateData,
  };
};

export const deleteUser = (deleteData) => {
  return {
    type: 'deleteUser',
    payload: deleteData,
  };
};
