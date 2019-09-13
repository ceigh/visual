const oneSpace = str => {
  return str.replace(/\s{2,}/g, ' ');
};
const fixedCharCodeAt = (str, idx) => {
  idx = idx || 0;
  const code = str.charCodeAt(idx);
  let hi, low;

  if (0xD800 <= code && code <= 0xDBFF) {
    hi = code;
    low = str.charCodeAt(idx + 1);
    if (isNaN(low)) return NaN;
    return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
  }
  if (0xDC00 <= code && code <= 0xDFFF) return false;
  return code;
};
const arrayPadEnd = (arr, len, val) => {
  return [...arr, ...Array(len - arr.length).fill(val)]
};

const tools = {
  oneSpace,
  fixedCharCodeAt,
  arrayPadEnd,
};
export default tools
