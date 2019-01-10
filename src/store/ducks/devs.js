import { toast } from 'react-toastify';

/**
 * Types
 */

export const Types = {
  ADD_REQUEST: 'dev/ADD_REQUEST',
  ADD_SUCCESS: 'dev/ADD_SUCCESS',
  ADD_FAILURE: 'dev/ADD_FAILURE',
  REMOVE: 'dev/REMOVE',
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null,
};

export default function devs(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return {
        loading: true,
        data: state.data,
        error: null,
      };
    case Types.ADD_SUCCESS:
      return {
        loading: false,
        data: [...state.data, action.payload.data],
        error: null,
      };
    case Types.ADD_FAILURE:
      return {
        loading: false,
        data: state.data,
        error: action.error,
      };
    case Types.REMOVE:
      toast.success('Usuário removido com sucesso!');
      return {
        loading: false,
        data: state.data.filter(dev => (dev.id !== action.payload.id ? dev : null)),
        error: null,
      };
    default:
      return state;
  }
}

/**
 * Actions
 */
export const Creators = {
  addDevRequest: (user, cordinates) => ({
    type: Types.ADD_REQUEST,
    payload: { user, cordinates },
  }),

  addDevSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),

  addDevFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),

  removeDev: id => ({
    type: Types.REMOVE,
    payload: { id },
  }),
};
