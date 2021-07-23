/**
 * give a new id
 * @param {array} items - the state
 * @return {number} the new id
 */
export function generateId(items) {
  const ids = items.map((item) => item.id);
  // find the biggest number of the array
  const max = Math.max(...ids);
  
  const newId = max + 1;
  return newId;
}

export function generateMessageId(state) {
  return generateId(state.messages);
}

export function isMine(writerId, currentUserId) {
  return writerId === currentUserId;
}
