import {
  addDoc,
  auth,
  collection,
  createUserWithEmailAndPassword,
  db,
  doc,
  getDoc,
  onAuthStateChanged,
  setDoc,
} from "../utils/firebaseConfig.js";

const userName = document.getElementById("userName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cPassword = document.getElementById("cPassword");
const signupSubmitBtn = document.getElementById("signupSubmitBtn");

onAuthStateChanged(auth, async (user) => {
  //login
  if (user) {
    const uid = user.uid; //uid
    console.log(uid, "==>> uid");

    alert("user is logged in");

    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());

      alert("user data is available");
      // window.location.href = "../home/index.html";
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }

    // ...
  } else {
    alert("user signout hai")
    // User is signed out
    // ...
    // window.location.href = "../login/index.html";
  }
});

const signupHandler = () => {

  //checking fields
  if (!userName.value || !email.value || !password.value || !cPassword.value)
    return alert("Saari fields likh bhai");
  //checking length

  if (password.value.length < 8)
    return alert("password length should be atleast 8 characters");
  //checking password and cPassword
  if (password.value != cPassword.value)
    return alert("same password confirm password likh bhai");

  //firebase signup function

  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(async (userCredential) => {
      console.log("user register hogaya aur sath main login bhi hogaya")
      // Signed up
      const user = userCredential.user;
      console.log(user, "====>>> user");

      //Now will save my data in database
      alert("main user save karwaney ki koshish karunga")
      try {
        const docRef = await setDoc(doc(db, "users", user.uid), {
          userName: userName.value,
          email: email.value,
          uid: user.uid,
        });
        alert("user save hogaya")
        alert(
          "User have registered Successfully, now you are re-directing to login page"
        );
        setTimeout(() => {
          window.location.href = "../login/index.html";
        }, 2000);
      } catch (e) {
        alert("error aagaya")
        console.error("Error adding document: ", e);
      }

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, "===>>>> errorCode");
      console.log(errorMessage, "===>>>> errorMessage");
      alert(errorCode);
      // ..
    });
};

signupSubmitBtn.addEventListener("click", signupHandler);
