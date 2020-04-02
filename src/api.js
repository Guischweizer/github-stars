import axios from 'axios'
import configuration from './configuration'

const get = resource =>
  axios
    .get(`${configuration.apiUrl}/${resource}`)
    .then(response => response.data)

export const getAllUserRepos = username =>
  get(`users/${username}/starred`).then(response => response)

export const getRepoLanguages = languagesUrl =>
  get(languagesUrl).then(response => response.data)
