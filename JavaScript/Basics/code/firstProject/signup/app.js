import {
  addDoc,
  auth,
  collection,
  createUserWithEmailAndPassword,
  db,
  doc,
  onAuthStateChanged,
  setDoc,
} from "../utils/firebaseConfig.js";

const userName = document.getElementById("userName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cPassword = document.getElementById("cPassword");
const signupSubmitBtn = document.getElementById("signupSubmitBtn");

// const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

// if (loggedInUser) window.location.href = "../home/index.html";

window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      console.log(uid, "==>> uid");
      // window.location.href = "../home/index.html";
      // ...
    } else {
      // User is signed out
      // ...
      // window.location.href = "../login/index.html";
    }
  });
});


const signupHandler = () => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  console.log(users, "-====>>> users");

  //checking fields
  if (!userName.value || !email.value || !password.value || !cPassword.value)
    return alert("Saari fields likh bhai");
  //checking length

  if (password.value.length < 8)
    return alert("password length should be atleast 8 characters");
  //checking password and cPassword
  if (password.value != cPassword.value)
    return alert("same password confirm password likh bhai");

  //userName checking

  // const userNameFound = users.find((user)=> {
  //     if(user.userName === userName.value) return user
  // })

  //   if (userNameFound) return alert("UserName already taken");

  //local storage k time per yeh sab kuch zaroori tha

  //   const userEmailFound = users.find((user) => {
  //     if (user.email === email.value) return user;
  //   });

  //   if (userEmailFound) return alert("UserEmail already exist");

  //firebase signup function

  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(async (userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log(user, "====>>> user");

      //Now will save my data in database
      try {
        // const docRef = await addDoc(collection(db, "resturant"), {
        //   userName: userName.value,
        //   email: email.value,
        // });
        const docRef = await setDoc(doc(db, "users", user.uid), {
          userName: userName.value,
          email: email.value,
          uid: user.uid,
        });
        // console.log("Document written with ID: ", docRef.id);

        alert(
          "User have registered Successfully, now you are re-directing to login page"
        );
        setTimeout(() => {
          window.location.href = "../login/index.html";
        }, 2000);
      } catch (e) {
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

  //   const user = {
  //     id: Date.now(),
  //     userName: userName.value,
  //     email: email.value,
  //     password: password.value,
  //     cPassword: cPassword.value,
  //   };

  //   users.push(user);

  //   localStorage.setItem("users", JSON.stringify(users));

  //   alert(
  //     "Signup Successfully, now you can login, diverting you to the login page"
  //   );
  //   setTimeout(() => {
  //     window.location.href = "../login/index.html";
  //   }, 2000);
};

signupSubmitBtn.addEventListener("click", signupHandler);
