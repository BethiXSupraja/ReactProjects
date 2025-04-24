import { useState, useEffect, useContext, createContext} from "react";
import { auth, db } from "../../firebase";
import {createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut} from "firebase/auth"
import { doc, getDoc } from "firebase/firestore";

const AuthContext = createContext()
export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider(props){
    const {children} = props
    const [globalUser, setGlobalUser] = useState(null)
    const [globalData, setGlobalData] =useState(null)
    const [isLoading, setIsLoading] = useState(false)

    function signUp(email, password){
        return createUserWithEmailAndPassword(auth, email, password)
    }
    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }
    function restPassword(email){
        return sendPasswordResetEmail(auth,email)
    }
    function logout(){
        setGlobalUser(null)
        setGlobalData(null)
        return signOut(auth)
    }

    const value = { globalUser, globalData, setGlobalData, isLoading, signUp, login, logout }
    useEffect(()=>{
        
        const unsubscribe = onAuthStateChanged(auth, async(user)=>{
            console.log('CURRENT USER :', user)
            setGlobalUser(user)
            //if there's no user, empty the user state and return from this listener
            if(!user){ 
                console.log("No Active user")
                return
            }
            


            //if there is a user, then check if the user has data in the database, and if they do, the fetch said data and update the global state.

            try{
                setIsLoading(true)
                // first we created reference for the documnent (labelled json), and then we get the doc, 
                // and then we snapshot it to see if there's anything there

                const docRef = doc(db, 'users', user.uid)
                const docSnap = await getDoc(docRef)

                let firebaseData = {}
                if(docSnap.exists()){
                    console.log('Found user data', firebaseData)
                    firebaseData = docSnap.data()
                }
                setGlobalData(firebaseData)

            } catch(err){
                console.log(err.message)
            }finally{
                setIsLoading(false)
            }

        })
        return unsubscribe

    },[]
    )


    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )

}


