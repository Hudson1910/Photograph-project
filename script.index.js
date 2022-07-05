const mouseWheel = document.querySelector(".box-scroll");

mouseWheel.addEventListener("wheel", function (e) {
  const race = 15; // How many pixels to scroll

  if (e.deltaY > 0)
    // Scroll right
    mouseWheel.scrollLeft += race;
  // Scroll left
  else mouseWheel.scrollLeft -= race;
  e.preventDefault();
});

var config = {
  apiKey: "AIzaSyD5bCyvYm5adElW2tllyfYH-CXnyQdUxVY",
  authDomain: "contactform-2086d.firebaseapp.com",
  databaseURL: "https://contactform-2086d.firebaseio.com",
  projectId: "contactform-2086d",
  storageBucket: "contactform-2086d.appspot.com",
  messagingSenderId: "35839015044",
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref("messages");

// Listen for form submit
document.getElementById("contactForm").addEventListener("submit", submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  //Get value
  var FirstName = getInputVal("First Name");
  var LastName = getInputVal("Last Name");
  var email = getInputVal("email");
  var phone = getInputVal("phone");
  var message = getInputVal("message");

  // Save message
  saveMessage(FirstName, LastName, email, phone, message);

  // Show alert
  document.querySelector(".alert").style.display = "block";

  // Hide alert after 3 seconds
  setTimeout(function () {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // Clear form
  document.getElementById("contactForm").reset();
}

// Function to get form value
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(FirstName, LastName, email, phone, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: FirstName,
    LastName: LastName,
    email: email,
    phone: phone,
    message: message,
  });
}
