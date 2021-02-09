module.exports = function toReadable (number) {
  let pointer = 0;
  let zeroNineteen = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  let dozens = [
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  let str = "";
  if(number == 0) {
    str = "zero";
    return str;
  }
  if(Math.floor(number / 100) > 0){
    pointer = Math.floor(number / 100);
    str += zeroNineteen[pointer] + " hundred ";
  }
  if(number % 100 >= 1 && number % 100 <= 19){
    pointer = number % 100;
    str += zeroNineteen[pointer];
  }
  else {
    pointer = number % 100;
    if(pointer > 0){
     str += dozens[Math.floor(pointer / 10) - 2];
      pointer = pointer % 10;
        console.log(str);
      if(pointer > 0){
        str += " " + zeroNineteen[pointer];
      }
    }
  }
  str = str.trim();
  return str;
}

