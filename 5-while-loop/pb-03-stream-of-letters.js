//PB-03. Stream Of Letters pb-03-stream-of-letters.js
function streamOfLetters(input) {
    let index = 0;
    let letter = input[index];
    let word = '';
    let cCount = 0;
    let oCount = 0;
    let nCount = 0;
    let currentWord = '';
    while (letter !== "End") {
        if ((/[a-zA-Z]/).test(letter)) {
            let letter2 = input[index + 1];
            switch (letter) {
                case 'c': cCount += 1;
                    if (cCount > 1) {
                        currentWord += 'c';
                        ; break;
                    } else {
                        break;
                    }
                case 'o': oCount += 1;
                    if (oCount > 1) {
                        currentWord += 'o';
                        ; break;
                    } else {
                        break;
                    }
                case 'n': nCount += 1;
                    if (nCount > 1) {
                        currentWord += 'n';
                        ; break;
                    } else {
                        break;
                    }
                default: currentWord += letter; break;
            }
            if (cCount >= 1 && oCount >= 1 && nCount >= 1) {
                word += currentWord + ' ';
                cCount = 0;
                oCount = 0;
                nCount = 0;
                currentWord = '';
            }
        }
        index++;
        letter = input[index];
    }
    console.log(word.trim(word));
}

streamOfLetters(["H", "n", "e", "l", "l", "o", "o", "c", "t", "c", "h", "o", "e", "r", "e", "n", "e", "End"]);
streamOfLetters(["%", "!", "c", "^", "B", "`", "o", "%", "o", "o", "M", ")", "{", "n", "/", "A", "D", "End"]);
streamOfLetters(["o", "S", "%", "o", "l", "^", "v", "e", "c", "n", "&", "m", "e", "c", "o", "n", "End"]);
