import { createAction } from 'redux-actions'
import { getAllUserRepos } from '../../api'
import { parseDataToCamelCase } from '../../Parser'

const fetchUserRepositoriesRequest = createAction(
  'FETCH_USER_REPOSITORIES_REQUEST',
)
const fetchUserRepositoriesSuccess = createAction(
  'FETCH_USER_REPOSITORIES_SUCCESS',
)
const fetchUserRepositoriesFail = createAction('FETCH_USER_REPOSITORIES_FAIL')

const loadUserRepositories = username => async dispatch => {
  dispatch(fetchUserRepositoriesRequest())
  try {
    const response = await getAllUserRepos(username)
    const repositories = parseDataToCamelCase(response.data)
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
}
