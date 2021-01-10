//05. Count the Words
function countWords(input) {
    let count = 1;
    for (let i = 0; i <= input.length; i++) {
        if (input.charCodeAt(i) === 32) {
            count++;
        }
    }
    if (count > 10) {
        console.log(`The message is too long to be send! Has ${count} words.`);
    } else {
        console.log(`The message was send successfully!`);
    }
}
countWords("This message has exactly eleven words. One more as it's allowed!");
countWords("This message has ten words and you can send it!");
