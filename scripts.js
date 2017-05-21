(function() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBCLrczRKq3OYVlkHbyvrDkUTKeznP9onI",
    authDomain: "my-project-f6815.firebaseapp.com",
    databaseURL: "https://my-project-f6815.firebaseio.com",
    projectId: "my-project-f6815",
    storageBucket: "my-project-f6815.appspot.com",
    messagingSenderId: "477427081213"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  var ref = database.ref('notes');

  var data = {
    time: "now",
    message: "whatever, blah blah blah"
  }

  var notes = document.getElementById("notes");
  var message = document.getElementById("message");
  var button = document.getElementById("submit");

  // ref.push(data);


})();
