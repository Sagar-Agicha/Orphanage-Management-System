const firebaseConfig = {
  //add ur api details.
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const db = firebase.firestore();

function check(){
  const phone = document.getElementById('phone_no').value;
  var docRef = db.collection("7977587238").doc("lat");
  const lat = db.collection("7977587238").doc("lat");
  docRef.get().then((doc) => {
    
    if (doc.exists) {
      alert("User Found");
      console.log("Document data:", doc.data());;
      track2();
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        alert("No User Found!")
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
}

function track2(){
  const longitude = 72.8356587
  const latitude = 19.063938999999998
  
    // Show a map centered at latitude / longitude.
    map.innerHTML = '<iframe width="700" height="300" src="https://maps.google.com/maps?q='+latitude+','+longitude+'&amp;z=15&amp;output=embed"></iframe>';
}
