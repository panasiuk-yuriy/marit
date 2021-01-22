export const ACTION_TYPES = {
  SAVE_DATA: 'SAVE_DATA',
  DELETE_PERSON: 'DELETE_PERSON',
  CHANGE_PERSON_NAME: 'CHANGE_PERSON_NAME',
  ADD_NEW_PERSON: 'ADD_NEW_PERSON',
};

const saveData = data => ({
  type: ACTION_TYPES.SAVE_DATA, payload: data,
});

export const deletePerson = id => ({
  type: ACTION_TYPES.DELETE_PERSON, payload: id,
});

export const changePersonName = (id, newName) => ({
  type: ACTION_TYPES.CHANGE_PERSON_NAME, id, payload: newName,
});

export const addNewPerson = (race, newName) => ({
  type: ACTION_TYPES.ADD_NEW_PERSON, race, name: newName,
});

export const loadData = () => (dispatch) => {
  const ws = new WebSocket('wss://testapi.marit.expert:3004');

  ws.onopen = () => {
    ws.send({ cmd: 'get_list' });
  };

  ws.onmessage = (message) => {
    const data = JSON.parse(message.data);

    dispatch(saveData(data));
  };
};
