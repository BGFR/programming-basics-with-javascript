//07. Hotel Room

function hotelRoom(month, nights) {
    nights = Number(nights);
    let studio = 0;
    let apartment = 0;

    if (month === "May" || month === "October") {
        studio += 50;
        if (nights > 7 && nights <= 14) {
            studio = studio * 0.95;
        } else if (nights > 14) {
            studio = studio * 0.7;
        }
        apartment += 65;
    } else if (month === "June" || month === "September") {
        studio += 75.2;
        if (nights > 14) {
            studio = studio * 0.8;
        }
        apartment += 68.7;
    } else {
        studio += 76;
        apartment += 77;
    }

    if (nights > 14) {
        apartment = apartment * 0.9;
    }

    console.log(`Apartment: ${(nights * apartment).toFixed(2)} lv.`);
    console.log(`Studio: ${(nights * studio).toFixed(2)} lv.`);
}

hotelRoom("May", "15");
hotelRoom("June", "14");
hotelRoom("August", "20");
