// Types
export const Types = {
  ADD_REQUEST: 'favorites/ADD_REQUEST',
  ADD_SUCCESS: 'favorites/ADD_SUCCESS',
  ADD_FAILURE: 'favorites/ADD_FAILURE',
};

// reducers
const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null,
};
export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: [...state.data, action.payload.data],
      };
    case Types.ADD_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

// actions

export const Creators = {
  addFavoritesRequest: repository => ({
    type: Types.ADD_REQUEST,
    payload: { repository },
  }),

  addFavoritesSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),

  addFavoritesFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),
};
