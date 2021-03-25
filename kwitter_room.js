
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDr7JP1AMTp8mQRiHSlBOVyZTSDR7xWOP4",
      authDomain: "kwitter-43e55.firebaseapp.com",
      databaseURL: "https://kwitter-43e55-default-rtdb.firebaseio.com",
      projectId: "kwitter-43e55",
      storageBucket: "kwitter-43e55.appspot.com",
      messagingSenderId: "585287735876",
      appId: "1:585287735876:web:df1adad71cc2098c227a11"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome" + user_name + "!";


function addRoom()
{
  room_name = document.getElementById("room_name").value;
   
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"    
  });

   localStorage.setItem("room_name", room_name);

   window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
         window.location = "kwitter_page.html";
}
 
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
         window.location = "kwitter.html";
}