import { typeOf } from './typeOf'

export const getFlattenObjectDeep = ({ item, parentKey = '' }) => Object.keys(item).reduce((accum, key) => {
  if(typeof item[key] === 'object') {
    return accum = {...accum, ...getFlattenObjectDeep({ item: item[key], parentKey: key })}
  } else {
    const newKey = parentKey ? `${parentKey}_${key}` : key
    accum[newKey] = item[key]

  }
  return accum
}, {})
