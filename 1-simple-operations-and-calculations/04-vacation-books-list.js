  //04. Vacation books list 
  function vacationBooksList(bookPages, pagesPerHour, days) {
    bookPages = Number(bookPages);
    pagesPerHour = Number(pagesPerHour);
    days = Number(days);
    hours = bookPages / pagesPerHour / days;
    console.log(hours);
  }
  vacationBooksList("212", "20", "2");
