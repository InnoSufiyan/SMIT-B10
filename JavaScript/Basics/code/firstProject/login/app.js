import { auth, db, doc, getDoc, onAuthStateChanged, signInWithEmailAndPassword } from "../utils/firebaseConfig.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const loginSubmitBtn = document.getElementById("loginSubmitBtn");



onAuthStateChanged(auth, async(user) => {  //login
  if (user) {  //login
    const uid = user.uid;
    console.log(uid, "==>> uid");
    alert("user log in huwa hai")
    const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        alert("is user ka data mojood hai")
        window.location.href = "../home/index.html";
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    // ...
  } else {
    alert("signout huwa hai")
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
    .then((userCredential) => { //login
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
