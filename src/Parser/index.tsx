export const parseDataToCamelCase = (data: any) => {
  const regex = /(?:(?=[_\w]*([a-z]|\?)*":)(_\w))/g
  const letter = (matches: any) => matches[1].toUpperCase()
  return JSON.parse(JSON.stringify(data).replace(regex, letter))
}
