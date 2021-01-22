import { ACTION_TYPES } from './actions';

const initialState = {
  list: [],
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.SAVE_DATA: {
      const { payload } = action;

      return {
        ...state,
        list: [...state.list, ...payload],
      };
    }

    case ACTION_TYPES.DELETE_PERSON: {
      const { payload } = action;

      return {
        ...state,
        list: state.list.filter(item => item.id !== payload),
      };
    }

    case ACTION_TYPES.CHANGE_PERSON_NAME: {
      const { payload, id } = action;

      return {
        ...state,
        list: state.list.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              name: payload,
            };
          }

          return item;
        }),
      };
    }

    case ACTION_TYPES.ADD_NEW_PERSON: {
      const { race, name } = action;
      const newPerson = {
        id: Date.now(),
        name,
        race
      }
      return {
        ...state,
        list: [...state.list, newPerson]
      };
    }

    default:
      return state;
  }
}
