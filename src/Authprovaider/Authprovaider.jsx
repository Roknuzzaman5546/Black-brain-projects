import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import PropTypes from 'prop-types';
export const Authcontext = createContext(null);
const provaider = new GoogleAuthProvider();

const Authprovaider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const userRegister = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userlogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, provaider);
    }

    const userLogout = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currenuser) => {
            setLoading(false)
            setUser(currenuser)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        userRegister,
        userlogin,
        userLogout,
        loading,
        userGoogle,
    }
    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

Authprovaider.propTypes ={
    children:PropTypes.object
}

export default Authprovaider;