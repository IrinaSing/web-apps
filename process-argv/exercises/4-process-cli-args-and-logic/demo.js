'use strict';
const generateList = (a = [], b = !1) => {
    if (!Array.isArray(a)) throw new TypeError('arrOfStrings is not an array');
    if (a.some((a) => 'string' != typeof a))
      throw new TypeError('arrOfStrings is not an array of strings');
    if ('boolean' != typeof b)
      throw new TypeError('numberedList is not boolean');
    const c = [];
    let d = 0;
    for (const e of a) {
      const a = b ? `${++d}.` : '-';
      c.push(`${a} ${e}`);
    }
    const e = c.join('\n');
    return e;
  },
  numberedFlag = '--numbered',
  userInputs = process.argv.slice(2),
  numbered = userInputs.includes(numberedFlag),
  cleanedUserInputs = userInputs.filter((a) => a !== numberedFlag),
  list = generateList(cleanedUserInputs, numbered);
console.log(list);
