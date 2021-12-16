
const firebaseConfig = {
    apiKey: "AIzaSyDDF_IV8sjWcvvQEGQnJebYbHKArApUda0",
    authDomain: "practice-activity-86627.firebaseapp.com",
    databaseURL: "https://practice-activity-86627-default-rtdb.firebaseio.com",
    projectId: "practice-activity-86627",
    storageBucket: "practice-activity-86627.appspot.com",
    messagingSenderId: "865690561978",
    appId: "1:865690561978:web:cc6861a54f25dd93a10183"
  };
function addUser()
{
    user_name=document.getElementById("user_name").value;
    firebase.datebase().ref("/").child(user_name).update({
        purpose : "adding user"
        });
        }