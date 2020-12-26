// С помощью цикла while вывести все простые числа в промежутке от 0 до 100
'use strict';

let n = 100;
let SDigit = 0;


while (SDigit <= n) {
  let isSimple = true;
  if (SDigit > 2 && SDigit % 2 != 0) {
      for (let j = 3; j * j <= SDigit ; j++)
      {
        if (SDigit % j == 0)
        {
          isSimple = false;
            break;
        }
      }
    }
    else if (SDigit != 2) isSimple = false;
    if (isSimple == true) console.log(SDigit);
    SDigit++;
}