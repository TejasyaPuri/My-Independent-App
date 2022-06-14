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
document.getElementById("user").innerHTML="Welcome "+user_name+" !";


function addroom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("roomname-"+Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectoroomname(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectoroomname(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("User name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}