export default function (state, action) {
  if (state === undefined) {
    return "";
  }
  if (action.type === 'SET_CITY') {
    return action.payload;
  } else {
    return state;
  }
}
