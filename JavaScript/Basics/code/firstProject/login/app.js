import { auth, onAuthStateChanged, signInWithEmailAndPassword } from "../utils/firebaseConfig.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const loginSubmitBtn = document.getElementById("loginSubmitBtn");

// const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

// if (loggedInUser) window.location.href = "../home/index.html";

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log(uid, "==>> uid");
    window.location.href = "../home/index.html";
    // ...
  } else {
    // User is signed out
    // ...
    // window.location.href = "../login/index.html";
  }
});

const loginHandler = () => {
  //   const users = JSON.parse(localStorage.getItem("users"));

  //checking fields
  if (!email.value || !password.value) return alert("Saari fields likh bhai");
  //checking length

  if (password.value.length < 8)
    return alert("password length should be atleast 8 characters");

  //   if (!users) return alert("Sorry no user found");

  //   const foundUser = users.find((user) => {
  //     if (user.email === email.value) return user;
  //   });

  //   if (!foundUser) return alert("No user found");

  //   if (foundUser.password !== password.value)
  //     return alert("Invalid Credentials");

  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user, "===>> user");

      alert("Login Successfully, diverting you to the home page");

      //   localStorage.setItem("loggedInUser", JSON.stringify(foundUser));

      setTimeout(() => {
        window.location.href = "../home/index.html";
      }, 2000);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode);
    });
};

loginSubmitBtn.addEventListener("click", loginHandler);
