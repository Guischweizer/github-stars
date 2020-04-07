import { handleActions } from 'redux-actions'
import {
  fetchUserRepositoriesSuccess,
  fetchUserRepositoriesRequest,
  fetchUserRepositoriesFail,
  cleanStorage,
} from './actions'

const initialState = {
  repositories: [],
  isFetching: false,
}
const reducer = handleActions(
  {
    [fetchUserRepositoriesRequest]: state => ({
      ...state,
      isFetching: true,
    }),
    [fetchUserRepositoriesSuccess]: (state, action) => ({
      repositories: state,
      ...action.payload,
      isFetching: false,
    }),
    [fetchUserRepositoriesFail]: (state, action) => ({
      ...state,
      ...action.payload,
      isFetching: false,
    }),
    [cleanStorage]: () => ({
      repositories: [],
      isFetching: false,
    }),
  },
  initialState,
)

export default reducer
