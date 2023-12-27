// const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))

import {
  auth,
  db,
  doc,
  getDoc,
  onAuthStateChanged,
  signOut,
} from "../utils/firebaseConfig.js";

// if (!loggedInUser) window.location.href = '../login/index.html'

const userNameHtml = document.querySelector("#userName");
const descHtml = document.querySelector("#desc");
const emailHtml = document.querySelector("#email");
const pNumberHtml = document.querySelector("#pNumber");
const hobbiesHtml = document.querySelector("#hobbies");
const profilePictureHtml = document.querySelector("#profilePicture2");
const logoutBtn = document.querySelector("#logoutBtn");

console.log(logoutBtn, "===>>>logoutBtn");

onAuthStateChanged(auth, async (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log(uid, "==>> uid");
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());

      const { userName, email, desc, pNumber, hobbies, profileUrl, id } =
        docSnap.data();

      userNameHtml.innerHTML = `${userName.slice(0, 1).toUpperCase()}${userName
        .slice(1)
        .toLowerCase()}`;

      descHtml.innerHTML = desc ? desc : "No Description Updated";
      emailHtml.innerHTML = email ? email : "No Email Updated";
      pNumberHtml.innerHTML = pNumber ? pNumber : "No Phone Number Updated";
      hobbiesHtml.innerHTML = hobbies ? hobbies : "No hobbies Updated";
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
    // ...
  } else {
    // User is signed out
    // ...
    window.location.href = "../login/index.html";
  }
});

// const { userName, email, desc, pNumber, hobbies, profileUrl, id } =
//   loggedInUser;

const userNameInput = document.querySelector("#userNameInput");
const emailInput = document.querySelector("#emailInput");
const phoneNumberInput = document.querySelector("#phoneNumberInput");
const hobbiesInput = document.querySelector("#hobbiesInput");
const imageInput = document.querySelector("#imageInput");
const descriptionInput = document.querySelector("#descriptionInput");

// if (profileUrl) {
//   profilePictureHtml.src = profileUrl;
// }

// userNameInput.value = userName ? userName : "";
// emailInput.value = email ? email : "";
// phoneNumberInput.value = pNumber ? pNumber : "";
// hobbiesInput.value = hobbies ? hobbies : "";
// imageInput.value = profileUrl ? profileUrl : "";
// descriptionInput.value = desc ? desc : "";

const updateProfileHandler = () => {
  const userObj = {
    userName: userNameInput.value,
    email: emailInput.value,
    pNumber: phoneNumberInput.value,
    hobbies: hobbiesInput.value.split(","),
    profileUrl: imageInput.value,
    desc: descriptionInput.value,
  };

  console.log(userObj, "=====>>> userObj");

  const users = JSON.parse(localStorage.getItem("users"));

  let myUser = users.find((user) => {
    return user.id === id;
  });

  (myUser.userName = userNameInput.value),
    (myUser.email = emailInput.value),
    (myUser.pNumber = phoneNumberInput.value),
    (myUser.hobbies = hobbiesInput.value.split(",")),
    (myUser.profileUrl = imageInput.value),
    (myUser.desc = descriptionInput.value);

  console.log(users, "===>>> users");

  console.log(myUser, "-===>> myUser");

  localStorage.setItem("loggedInUser", JSON.stringify(userObj));
  localStorage.setItem("users", JSON.stringify(users));
};

const logoutHandler = () => {
  console.log("tu chala ya nahin");
  //   localStorage.removeItem("loggedInUser");

  //   window.location.href = "../login/index.html";

  signOut(auth)
    .then(() => {
      // Sign-out successful.
      window.location.href = "../login/index.html";
    })
    .catch((error) => {
      // An error happened.
      console.log(error, "===>> error");
    });
};
logoutBtn.addEventListener("click", logoutHandler);
