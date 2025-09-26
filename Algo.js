function rot13(str) {
  const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const lower_case = "abcdefghijklmnopqrstuvwxyz".split("");

  let result = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (upper_case.includes(char)) {
      let index = upper_case.indexOf(char);
      // Rotate the index by 13 positions.
      // If index is from 0 to 12  then add 13. If index is from 13 to 25, subtract 13
      let rotated_Index = index < 13 ? index + 13 : index - 13;
      result += upper_case[rotated_Index];
    }
    // Check if the character is a lowercase letter
    else if (lower_case.includes(char)) {
      let index = lower_case.indexOf(char);

      // Rotate the index by 13 positions.
      let rotated_Index = index < 13 ? index + 13 : index - 13;
      result += lower_case[rotated_Index];
    }

    // If it's not a letter, append it as it it
    else {
      result += char;
    }
  }

  return result;
}