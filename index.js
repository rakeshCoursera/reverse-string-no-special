const isSpecialCharacter = (char) => {
  const charCode = char.charCodeAt();
  if (charCode < 48) {
    return true;
  } else if (charCode > 57 && charCode < 65) {
    return true;
  } else if (charCode > 90 && charCode < 97) {
    return true;
  } else if (charCode > 122) {
    return true;
  }
  return false;
};

const reverseStringNoSpecial = (str) => {
  const strList = str.split('');
  let i = 0;
  let j = strList.length - 1;
  while (i < j) {
    if (isSpecialCharacter(strList[i])) {
      i += 1;
    } else if (isSpecialCharacter(strList[j])) {
      j -= 1;
    } else {
      const temp = strList[i]
      strList[i] = strList[j];
      strList[j] = temp;
      i += 1;
      j -= 1;
    }
  }
  return strList.join('');
};

module.exports = reverseStringNoSpecial;
