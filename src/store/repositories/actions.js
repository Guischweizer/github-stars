import { createAction } from 'redux-actions'
import { getAllUserRepos } from '../../api'

const fetchUserRepositoriesRequest = createAction(
  'FETCH_USER_REPOSITORIES_REQUEST',
)
const fetchUserRepositoriesSuccess = createAction(
  'FETCH_USER_REPOSITORIES_SUCCESS',
)
const fetchUserRepositoriesFail = createAction('FETCH_USER_REPOSITORIES_FAIL')

const cleanStorage = createAction('CLEAN_STORAGE')

const loadUserRepositories = username => async dispatch => {
  dispatch(fetchUserRepositoriesRequest())
  try {
    const repositories = await getAllUserRepos(username)
    return dispatch(fetchUserRepositoriesSuccess({ repositories }))
  } catch (exception) {
    dispatch(fetchUserRepositoriesFail())
  }
}

export {
  fetchUserRepositoriesSuccess,
  fetchUserRepositoriesFail,
  fetchUserRepositoriesRequest,
  loadUserRepositories,
  cleanStorage,
}
