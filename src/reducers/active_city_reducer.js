export default function (state, action) {
  if (state === undefined) {
    return [];
  }
  if (action.type === 'CITY_SELECTED') {
    return action.payload;
  } else {
    return state;
  }
}
