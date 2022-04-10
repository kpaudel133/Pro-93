const firebaseConfig = {
    apiKey: "AIzaSyAhQCYxsjW_eewQKqy9SaQhOklwadv3lEM",
    authDomain: "kwitter-project-a8d12.firebaseapp.com",
    databaseURL: "https://kwitter-project-a8d12-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-a8d12",
    storageBucket: "kwitter-project-a8d12.appspot.com",
    messagingSenderId: "527160163493",
    appId: "1:527160163493:web:ef2e5e5564f5758c3de14c",
    measurementId: "G-3GGEKKH2RX"
  };
  

function addRoom(){
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key; 
        Room_names = childKey;
//Start code
console.log(Room_names);
row ="<div class='room_name' id='"+ Room_names +"' onclick='redirect(this.id)' >#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();
}