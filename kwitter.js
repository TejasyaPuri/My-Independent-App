function adduser()
{
    username=document.getElementById("user_name").value;
    localStorage.setItem("User name", username);
    window.location="kwitter_room.html";
    
}