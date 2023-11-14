export const getInitials = (name) => {
  const arr = name.split(" ")
  return `${arr[0][0]}${arr[1][0]}`
}