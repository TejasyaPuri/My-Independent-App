var firebaseConfig = {
      apiKey: "AIzaSyAw9s4gseIcPXUqPlH0_shT9j9Pvw3w6K4",
      authDomain: "kwitter-4d13e.firebaseapp.com",
      databaseURL: "https://kwitter-4d13e-default-rtdb.firebaseio.com",
      projectId: "kwitter-4d13e",
      storageBucket: "kwitter-4d13e.appspot.com",
      messagingSenderId: "699836874128",
      appId: "1:699836874128:web:cbd9662b298701f04fc715"
    };

firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("User name");
room_name=localStorage.getItem("room_name");

function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];

name_tag = "<h4>"+ name + "<img class='user_tick' src='tick.png'> </h4>";
message_tag = "<h4 class='message_h4'>"+ message + "</h4>";
like_button ="<button class='btn btn-danger' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>"; 
span_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
document.getElementById("output").innerHTML += name_tag + message_tag + like_button + span_tag;
//End code
      } });  }); }
getData();

function updateLike(message_id)
{
      console.log("Clicked On Like Button-"+message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      update_likes = Number(likes)+ 1;
      console.log(update_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like:update_likes
      });
}

function logout()
{
      localStorage.removeItem("User name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

