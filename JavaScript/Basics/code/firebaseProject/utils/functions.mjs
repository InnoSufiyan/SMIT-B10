import { auth, createUserWithEmailAndPassword, db, doc, getDoc, setDoc, signInWithEmailAndPassword, ref, storage, getDownloadURL, uploadBytes, signOut, getDocs, query, collection, serverTimestamp, addDoc, orderBy } from "./firebaseConfig.js"


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

// created logout function through firebase auth
const logout = async () => {
    try {
        //logging out user and calling firebase auth logout function
        const loggingOut = await signOut(auth)
        return {
            status: true,
            message: "User logged out successfully",
            data: loggingOut
        }
    } catch (error) {
        return {
            status: false,
            message: error.message
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

// created getDataOrderedByTimestamp function to get data from db ordered by timestamp
const getAllDataOrderedByTimestamp = async (collectionName) => {
    try {
        // Creating a query to order the data by timestamp
        const q = query(collection(db, collectionName), orderBy('timestamp'));

        // Getting data from db ordered by timestamp
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            const data = querySnapshot.docs.map(doc => doc.data());
            return {
                status: true,
                message: "Data found",
                data: data
            };
        } else {
            return {
                status: false,
                message: "No documents found!",
            };
        }
    } catch (error) {
        return {
            status: false,
            message: error.message
        };
    }
};

const addInDB = async (data, collectionName) => {
    try {
        // Add a timestamp to the data
        const dataWithTimestamp = {
            ...data,
            timestamp: serverTimestamp()
        };
        //adding data in db and calling firebase db function
        const addData = await addDoc(collection(db, collectionName), dataWithTimestamp);
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

// created addInDBById function to add data in db by our provided id
const addInDBById = async (data, id, collectionName) => {
    try {
        // Add a timestamp to the data
        const dataWithTimestamp = {
            ...data,
            timestamp: serverTimestamp()
        };
        //adding data in db by our provided id and calling firebase db function
        const addData = await setDoc(doc(db, collectionName, id), dataWithTimestamp);
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

const uploadFile = async (file, fileName) => {
    try {
        // Create a storage reference with the specified file name
        const storageRef = ref(storage, fileName);

        // Upload the file to Firebase Storage
        const snapshot = await uploadBytes(storageRef, file);

        // Get the download URL of the uploaded file
        const downloadURL = await getDownloadURL(snapshot.ref);

        console.log(downloadURL, "=====================downloadURL")

        return {
            status: true,
            message: "File uploaded successfully",
            downloadURL: downloadURL
        };
    } catch (error) {
        return {
            status: false,
            message: error.message
        };
    }
};


export { signUp, login, addInDBById, getLoggedInUser, getData, updateData, uploadFile, getAllDataOrderedByTimestamp, logout, addInDB }