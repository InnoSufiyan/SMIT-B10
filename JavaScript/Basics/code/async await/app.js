// const getJSON = async (c1) => {
//   const res = await fetch(`https://restcountries.com/v3.1/name/${c1}`)
//     .then((res) => res.json())
//     .then((res) => res)
//     .catch((err) => console.log(err));

//   console.log(res, "===>>> res");
//   return res;
// };

// const getCountries = async (c1, c2, c3) => {
//   console.log(c1, "==>>c1");
//   const [data] = await getJSON(c1)
//   const [data1] = await getJSON(c2)
//   const [data2] = await getJSON(c3)
//   console.log(data, data1, data2);
//   const dataAll = await Promise.all([
//     getJSON(c1),
//     getJSON(c2),
//     getJSON(c3)
//   ])
//   console.log(dataAll)
// };

// getCountries("pakistan", "india", "afghanistan");

import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "./config.js";

window.signupHandler = () => {
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  console.log(email, password);

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      // ...
      console.log(user, "===>> user");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      alert(errorMessage);
      // ..
    });
};

window.loginHandler = () => {
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};
