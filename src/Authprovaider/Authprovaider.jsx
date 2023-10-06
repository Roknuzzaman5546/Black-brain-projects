import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const Authcontext = createContext(null);

const Authprovaider = ({children}) => {
    const [ user, setUser] = useState(null)

    const userRegister = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userlogin =  (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userLogout = () =>{
        return signOut(auth);
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currenuser) =>{
                setUser(currenuser)
        })
        return() =>{
            unsubscribe();
        }
    },[])

    const authInfo ={
        user,
        userRegister,
        userlogin,
        userLogout,
    }
    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovaider;