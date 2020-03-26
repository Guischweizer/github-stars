import axios from 'axios'
import configuration from './configuration'
import { parseDataToCamelCase } from './Parser'

const get = resource =>
  axios
    .get(`${configuration.apiUrl}/${resource}`)
    .then(response => response.data)
    .then(response => parseDataToCamelCase(response))

export const getAllUserRepos = username =>
  get(`users/${username}/repos`).then(response => response)

export const getRepoLanguages = languagesUrl =>
  get(languagesUrl).then(response => response.data)
