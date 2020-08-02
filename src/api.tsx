import axios from 'axios'
import configuration from './configuration'

const get = (resource: string) =>
  axios
    .get(`${configuration.apiUrl}/${resource}`)
    .then(response => response.data)

export const getAllUserRepos = (username: string) =>
  get(`users/${username}/starred`).then(response => response)

export const getRepoLanguages = (languagesUrl: string) =>
  get(languagesUrl).then(response => response.data)
