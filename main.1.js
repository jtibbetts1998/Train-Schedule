// 1. Initialize Firebase
var config = {
    apiKey: "AIzaSyBUQBu2ITxpSlKxm5HigDIh_osejd1BroQ",
    authDomain: "train-scheduler-27a39.firebaseapp.com",
    databaseURL: "https://train-scheduler-27a39.firebaseio.com",
    projectId: "train-scheduler-27a39",
    storageBucket: "",
    messagingSenderId: "716272877075"
  };

  firebase.initializeApp(config);
  
  var database = firebase.database();
  
// 2. Button for adding trains
  $("#add-train-btn").on("click", function(event) {
    event.preventDefault();
  
// Grabs user input
    var TrName = $("#train-name-input").val().trim();
    var TrPlace = $("#place-input").val().trim();
    var TrTime = moment($("#time-input").val().trim(), "hh:mm").format("X");
    var TrFreq = $("#freq-input").val().trim();
  
// Creates local "temporary" object for holding train data
    var newTrain = {
      name: TrName,
      place: TrPlace,
      time: TrTime,
      freq: TrFreq
    };
  
// Uploads train data to the database
    database.ref().push(newTrain);
  
// Logs everything to console
    console.log(newTrain.name);
    console.log(newTrain.place);
    console.log(newTrain.time);
    console.log(newTrain.freq);
  
    alert("Train successfully added");
  
// Clears all of the text-boxes
    $("#train-name-input").val("");
    $("#place-input").val("");
    $("#time-input").val("");
    $("#freq-input").val("");
  });
  
// 3. Create Firebase event for adding trains to the database and a row in the html when a user adds an entry
  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
  
// Store everything into a variable.
    var TrName = childSnapshot.val().name;
    var TrPlace = childSnapshot.val().place;
    var TrTime = childSnapshot.val().time;
    var TrFreq = childSnapshot.val().freq;
  
// Train Info
    console.log(TrName);
    console.log(TrPlace);
    console.log(TrTime);
    console.log(TrFreq);
  
// Prettify the train start
    var TrStartPretty = moment.unix(TrStart).format("MM/DD/YYYY");
  
// Calculate the months worked using hardcore math
// To calculate the months worked
    var TrMins = moment().diff(moment(TrStart, "X"), "minutes");
    console.log(TrMins);
  
    // Calculate the total billed rate
    var TrArrival = TrMins * TrRate;
    console.log(TrArrival);
  
    // Create the new row
    var newRow = $("<tr>").append(
      $("<td>").text(TrName),
      $("<td>").text(TrPlace),
      $("<td>").text(TrStartPretty),
      $("<td>").text(TrMins),
      $("<td>").text(TrRate),
      $("<td>").text(TrArrival)
    );
  
    // Append the new row to the table
    $("#employee-table > tbody").append(newRow);
  });
  