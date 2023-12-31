import {
  auth,
  db,
  doc,
  getDoc,
  onAuthStateChanged,
  setDoc,
  signOut,
} from "../utils/firebaseConfig.js";

const userNameHtml = document.querySelector("#userName");
const descHtml = document.querySelector("#desc");
const emailHtml = document.querySelector("#email");
const pNumberHtml = document.querySelector("#pNumber");
const hobbiesHtml = document.querySelector("#hobbies");
const profilePictureHtml = document.querySelector("#profilePicture");
const logoutBtn = document.querySelector("#logoutBtn");
const updateBtn = document.querySelector("#updateBtn");

//edit modal

const userNameInput = document.querySelector("#userNameInput");
const emailInput = document.querySelector("#emailInput");
const phoneNumberInput = document.querySelector("#phoneNumberInput");
const hobbiesInput = document.querySelector("#hobbiesInput");
const imageInput = document.querySelector("#imageInput");
const descriptionInput = document.querySelector("#descriptionInput");

console.log(logoutBtn, "===>>>logoutBtn");

let uid;

onAuthStateChanged(auth, async (user) => {
  if (user) {
    uid = user.uid;
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
      profilePictureHtml.src = profileUrl
        ? profileUrl
        : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png";

      userNameInput.value = userName ? userName : "";
      emailInput.value = email ? email : "";
      phoneNumberInput.value = pNumber ? pNumber : "";
      hobbiesInput.value = hobbies ? hobbies : "";
      imageInput.value = profileUrl ? profileUrl : "";
      descriptionInput.value = desc ? desc : "";
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

const updateProfileHandler = async () => {
  const userObj = {
    userName: userNameInput.value,
    email: emailInput.value,
    pNumber: phoneNumberInput.value,
    hobbies: hobbiesInput.value.split(","),
    profileUrl: imageInput.value,
    desc: descriptionInput.value,
    uid: uid,
  };

  console.log(userObj, "=====>>userObj");

  alert("user ko update karwaney jaa raha hun");

  await setDoc(doc(db, "users", uid), userObj);

  alert("update karwa liya");
};
updateBtn.addEventListener("click", updateProfileHandler);

const logoutHandler = () => {
  console.log("tu chala ya nahin");

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
