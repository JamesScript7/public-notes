'use strict';

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

  // DOM stuff
  var newNote = document.getElementById("new-note");
  var message = document.getElementById("message");
  var button = document.getElementById("submit");
  var notes = document.getElementById("notes");
  var allNotes = document.getElementById("all-notes");
  var dateFormatted;

  function time() {
    var now = new Date();
    var hours24 = now.getHours();

    var minutes = now.getMinutes();
    if (minutes < 10) {
    	minutes = "0" + minutes;
    }

    var ampmHours;
    if (hours24 == 0) {
    	ampmHours = 12; //midnight
    } else if (hours24 > 12) {
    	ampmHours = hours24 - 12;
    } else {
    	ampmHours = hours24;
    }

    var ampm;
    if (hours24 >= 12) {
    	ampm = "PM";
    } else {
    	ampm = "AM";
    }

    var dayDate = now.toString().split(" ");
    dateFormatted = `${ampmHours}:${minutes} ${ampm} on ${dayDate[1]} ${dayDate[2]}`;

  }

  function gotData(data) {
    notes.innerHTML = "";
    var noteList = data.val();
    var keys = Object.keys(noteList);

    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];
      var note = noteList[k].message;
      var time = noteList[k].time;

      var li = document.createElement('li');
      var span = document.createElement('span');
      li.setAttribute("class", "note-item");
      span.setAttribute("class", "time-item");

      span.innerHTML = time;
      li.innerHTML = note;

      notes.append(li);
      notes.append(span);
      
      notes.scrollTop = notes.scrollHeight;
    }

  }

  function errData(err) {
    console.error(err)
  }

  button.addEventListener('click', function() {
    time();

    var data = {
      'time': dateFormatted,
      'message': message.value
    };

    if (message.value !== "") {
      ref.push(data);
    } else {
      console.error("Empty note not pushed to database");
    }

    ref.limitToLast(20).on('value', gotData, errData);
    message.value = "";
    message.focus();
  });

  ref.limitToLast(20).on('value', gotData, errData);



})();
