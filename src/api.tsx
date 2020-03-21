import axios from 'axios'
import configuration from './configuration'
import { parseDataToCamelCase } from './Parser'
import { Repositories } from './models/Repositories'

const get = (resource: string) =>
  axios
    .get(`${configuration.apiUrl}/${resource}`)
    .then(response => response.data)
    .then(response => parseDataToCamelCase(response))

export const getAllUserRepos = (username: string): Promise<Repositories> =>
  get(`users/${username}/repos`).then(response => response.data)

export const getRepoLanguages = (languagesUrl: string) =>
  get(languagesUrl).then(response => response.data)
