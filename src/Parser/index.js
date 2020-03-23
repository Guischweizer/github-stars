export const parseDataToCamelCase = data => {
  const regex = /(?:(?=[_\w]*([a-z]|\?)*":)(_\w))/g
  const letter = matches => matches[1].toUpperCase()
  return JSON.parse(JSON.stringify(data).replace(regex, letter))
}
