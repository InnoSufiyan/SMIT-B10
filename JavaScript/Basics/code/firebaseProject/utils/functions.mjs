import { auth, createUserWithEmailAndPassword, db, doc, getDoc, setDoc, signInWithEmailAndPassword } from "./firebaseConfig.js"


// created signup function through firebase auth
const signUp = async (email, password) => {
    try {
        //signing up user and calling firebase auth registering function
        const registering = await createUserWithEmailAndPassword(auth, email, password)
        return {
            status: true,
            message: "User registered successfully",
            data: registering
        }
    } catch (error) {
        return {
            status: false,
            message: error.message,
            code: error.code
        }
    }
}

// created login function through firebase auth
const login = async (email, password) => {
    console.log("working login firebase handler", email, password)
    try {
        //logging in user and calling firebase auth login function
        const logging = await signInWithEmailAndPassword(auth, email, password)
        return {
            status: true,
            message: "User logged in successfully",
            data: logging
        }
    } catch (error) {
        return {
            status: false,
            message: error.message,
            code: error.code
        }
    }
}

// created getData function to get data from db
const getData = async (id, collectionName) => {
    try {
        //getting data from db and calling firebase db function
        const docRef = doc(db, collectionName, id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return {
                status: true,
                message: "Data found",
                data: docSnap.data()
            }
        } else {
            return {
                status: false,
                message: "No such document!",
            }
        }
    } catch (error) {
        return {
            status: false,
            message: error.message
        }
    }
}

// created addInDBById function to add data in db by our provided id
const addInDBById = async (data, id, collectionName) => {
    try {
        //adding data in db by our provided id and calling firebase db function
        const addData = await setDoc(doc(db, collectionName, id), data);
        return {
            status: true,
            message: "Data added successfully",
            data: addData
        }
    } catch (error) {
        return {
            status: false,
            message: error.message
        }
    }
}

const updateData = async (data, id, collectionName) => {
    console.log("working update data", data, id, collectionName)
    try {
        //updating data in db by our provided id and calling firebase db function
        const addData = await setDoc(doc(db, collectionName, id), data);
        return {
            status: true,
            message: "Data updated successfully",
            data: addData
        }
    } catch (error) {
        return {
            status: false,
            message: error.message
        }
    }
}

// created getLoggedInUser function to get logged in user data
const getLoggedInUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            unsubscribe()
            resolve(user)
        }, reject)
    })
}


export { signUp, login, addInDBById, getLoggedInUser, getData, updateData }