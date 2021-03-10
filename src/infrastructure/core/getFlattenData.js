export const getFlattenData = ({ data, getFlattenObjectDeep }) => data.map((item) => {
  return getFlattenObjectDeep({item})
})
