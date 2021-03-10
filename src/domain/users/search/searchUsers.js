export const searchUsers = ({ search = '', data }) => {
  return data.filter(item => {
    if (
      Object.values(item)
        .join(' ')
        .toLowerCase()
        .includes(search.toLowerCase())
    ) return item
  })
}
