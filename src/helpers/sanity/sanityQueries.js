export const userQuery = (username, password) => {
  const query = `*[_type == 'user' && username == '${username}' && password == '${password}']`;
  return query;
};

export const groupQuery = (groupType, userId) => {
  const query = `*[_type == '${groupType}' && creator._ref == '${userId}']`;
  return query;
};

export const singleItemQuery = (groupType, itemId, userId) => {
  const query = `*[_type == '${groupType}' && _id == '${itemId} && creator._ref == '${userId}']`;
  return query;
};

// TODO: add userid when writing query
// export const searchQuery = (searchTerm) => {
//   const query = `*[_type == 'contact' && firstName match '${searchTerm}*' || lastName match '${searchTerm}*' || countryCode match '${searchTerm}*' || phoneNumber match '${searchTerm}*' ]`;
//   return query;
// };
