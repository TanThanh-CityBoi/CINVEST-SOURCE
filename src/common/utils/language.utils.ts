export function removeVietnameseAccents(str) {
  // First, normalize the string to Unicode NFC (Normalization Form Canonical Composition)
  str = str.normalize('NFC');

  // Define a map of Vietnamese characters with accents and their corresponding accents
  const accentsMap = {
    'à|á|ả|ã|ạ': 'a',
    'ằ|ắ|ẳ|ẵ|ặ': 'a',
    'ầ|ấ|ẩ|ẫ|ậ': 'a',
    'è|é|ẻ|ẽ|ẹ': 'e',
    'ề|ế|ể|ễ|ệ': 'e',
    'ì|í|ỉ|ĩ|ị': 'i',
    'ò|ó|ỏ|õ|ọ': 'o',
    'ồ|ố|ổ|ỗ|ộ': 'o',
    'ờ|ớ|ở|ỡ|ợ': 'o',
    'ù|ú|ủ|ũ|ụ': 'u',
    'ừ|ứ|ử|ữ|ự': 'u',
    'ỳ|ý|ỷ|ỹ|ỵ': 'y',
    đ: 'd',
  };

  // Use a regular expression to replace accented characters with their non-accented counterparts
  for (const key in accentsMap) {
    const regex = new RegExp(`[${key}]`, 'g');
    str = str.replace(regex, accentsMap[key]);
  }

  return str;
}

export function removeSpecialCharacters(inputString: string) {
  let cleanedString: string = '';

  // Iterate through each character in the input string
  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];

    // Check if the character is alphanumeric or a space
    if (/[a-zA-Z0-9\s]/.test(char)) {
      // If it is, add it to the cleaned string
      cleanedString += char;
    }
  }

  return cleanedString;
}
