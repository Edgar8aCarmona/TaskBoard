/**
 * Class with firebase authorization to log in and log out
 */
    const firebaseConfig = {
    apiKey: "AIzaSyAiKoCgJFVlPCT5tzG5X3g5kMqIJskNaz4",
    authDomain: "todo-list-progweb.firebaseapp.com",
    projectId: "todo-list-progweb",
    storageBucket: "todo-list-progweb.appspot.com",
    messagingSenderId: "520686097230",
    appId: "1:520686097230:web:83ff6e0bf2d1aa4461041f",
    measurementId: "G-3XQ2SYJXVT"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
 
    const database = firebase.database();

    function signUp()
    {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e=>alert(e.message))
    alert("Signed Up");
    }

    function signIn()
    {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e=>alert(e.message))
    var userId = auth.currentUser.uid
    alert("Signed In as "+email.value);
    window.open("board.html", "_self"); //table page
    }

    function Remove(x)
    {
    var IdButton = x; 
    var opt1 = document.getElementById(IdButton);
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('/Choice of user '+userId).set({
    Option_chosen: opt1.value});
    document.getElementById(IdButton).style.visibility = "hidden";
    alert("Sorry for the inconvenience, we will cater to your needs");
    }
  
    function signOut()
    {
    auth.signOut();
    window.open("index.html", "_self");
    alert("Succesfully Logged Out");
    }