import sha512 from 'js-sha512';
import tools from './tools';

// Core
const fill = str => {
  const len = str.length;
  return str + '0'.repeat([0, 2, 1][len % 3]);
};
const separate = str => {
  const count = str.length / 3;
  const rgxp = new RegExp(`.{${count}}`, 'g');
  return str.match(rgxp);
};
const cut = arr => {
  return arr.map(str => str.substr(0, 2));
};
const toHex = arr => {
  return `#${arr.join('')}`;
};
const toRgb = arr => {
  return arr.map(c => parseInt(c, 16));
};
const toRgba = (arr, val) => {
  const normal = val < 0 ? 0 : val > 255 ? 255 : val;
  return arr.concat(normal);
};
const wordToPixel = (word, hex = false) => {
  const lower = word.toLowerCase();
  const rgxp = /[^0-9abcdef]/g;
  const esc = lower.replace(rgxp, '0');
  const filled = fill(esc);
  const separated = separate(filled);
  const cutted = cut(separated);
  return hex ? toHex(cutted) : toRgba(toRgb(cutted), 255);
};
// To use
const byWord = (str, flat = true, hex = false) => {
  const formatted = tools.oneSpace(str).trim();
  const colors = formatted.split(' ')
      .map(word => wordToPixel(word, hex));
  return flat ? colors.flat() : colors;
};
const byHash = str => {
  return byWord(sha512(str).match(/.{1,4}/g).join(' '));
};
const byChar = str => {
  const hexes = str.split('').map(c => {
    const code = tools.fixedCharCodeAt(c);
    return isNaN(code) ? '3f' : code.toString(16);
  });
  const by2 = hexes.map(h => h.match(/.{1,2}/g));
  const by2Octal = by2.map(a => a.map(h => parseInt(h, 16)));
  const padded = by2Octal.map(a => tools.arrayPadEnd(a, 4, 0));
  const reversed = padded.map(a => a.reverse());
  return reversed.flat();
};

const encode = {
  byWord,
  byHash,
  byChar,
};
export default encode;
