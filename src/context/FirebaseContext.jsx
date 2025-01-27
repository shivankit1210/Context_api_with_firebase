import { createContext,useContext } from "react";
import { app } from "../config/firebaseConfig";
import {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth"
import {getDatabase,set,ref} from "firebase/database"



// Initialise firebase app
const firebaseAuth = getAuth(app);
const database = getDatabase(app);

// Create context
export const firebaseContext = createContext(null);

// Use context
export const useFirebase = () => useContext(firebaseContext);

export const firebaseProvider = ({children}) =>{
//Function
    const signUpWithEmailAndPassword = (email,password) =>{
        return createUserWithEmailAndPassword(firebaseAuth,email,password);
    };

    const signInUserWithEmailAndPassword = (email,password) =>{
        return signInWithEmailAndPassword(firebaseAuth,email,password);
    }

    const putData = (key,data) =>{
        set(ref(database,key),data);
    };



    return(
        <firebaseContext.Provider 
        value={{signUpWithEmailAndPassword,signInUserWithEmailAndPassword,putData}}
        >
            {children}
        </firebaseContext.Provider>
    )
}



