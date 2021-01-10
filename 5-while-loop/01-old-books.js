//01. Old Books

function oldBooks(input) {
    let search = input.shift();
    let index = 0;
    let find = input[index];
    while (find !== search) {
        if (find == "No More Books") {
            console.log(`The book you search is not here!`);
            break;
        } else {
            find = search;
        }
        index++;
        find = input[index];
    }
    if (find == search) {
        console.log(`You checked ${index} books and found it.`);
    } else {
        console.log(`You checked ${index} books.`);
    }
}

oldBooks(["Troy", "Stronger", "Life Style", "Troy"]);
oldBooks(["The Spot", "Hunger Games", "Harry Potter", "Torronto", "Spotify", "No More Books"]);
oldBooks(["Bourne", "True Story", "Forever", "More Space", "The Girl", "Spaceship", "Strongest", "Profit", "Tripple", "Stella", "The Matrix", "Bourne"]);
oldBooks(["Troy", "Troy"]);
