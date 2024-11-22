export function setComma(value) {
  const state = value.toString();
  if (state.includes('.')) {
    return state;
  }
  if (state === '0' || state === '') {
    return '0.';
  }
  return state + '.';
}

export function setNumbers(value, input) {
  let result;
  switch (value.toString()) {
    case '0':
      result = input;
      break;
    default:
      result = value + input;
      break;
  }
  return result;
}

export function setReverse(val) {
  const value = val.toString();
  if (value === '0' || value === '0.') {
    return value;
  }
  if (value.startsWith('-')) {
    return value.slice(1);
  }
  return '-' + value;
}
