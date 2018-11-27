console.log(moment().format("DD/MM/YY hh:mm A"));

var randomDate = "02/23/1999";
    var convertDate = moment(randomDate, "MM-DD-YYYY");
    

    // Using scripts from moment.js write code below to complete each of the following.
    // Console.log to confirm the code changes we made worked.

    // 1 ...to convert the randomDate into three other date formats
    console.log(moment(randomDate, "MM-DD-YYYY").format("dddd, MMMM Do YYYY,"));
    // 2 ...to determine the time in years, months, days between today and the randomDate
    console.log(convertDate.toNow());
    console.log(convertDate.diff(moment(),"years"));
    console.log();
    // 3 ...to determine the number of days between the randomDate and 02/14/2001
    var newDate = moment("02/14/2001", "MM-DD-YYYY");
    console.log(convertDate.diff(newDate, "days"));
    // 4 ...to convert the randomDate to unix time (be sure to look up what unix time even is!!!)
    console.log(convertDate.format("x"));
    // 5 ...to determine what day of the week and what week of the year this randomDate falls on.
    console.log(convertDate.format("DDD"));
    console.log(convertDate.format('dddd'));
    // If you finish early...
    // Start creating HTML inputs and then redisplay the dates using moment.js elsewhere on the page.