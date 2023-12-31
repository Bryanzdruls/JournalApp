import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from '../../firebase/provider';
import { clearNotesLogout } from '../journal/journalSlice';
import {checkingCredentials, login, logout} from './'

export const checkingAuthentication = (email, password) =>{    
    return async (dispatch) => {

        dispatch( checkingCredentials({email,password}) );
    }
}
export const startGoogleSignIn = () =>{    
    return async (dispatch) => {

        dispatch( checkingCredentials() );
        const result = await signInWithGoogle();
        
        !result.ok ? dispatch( logout( result.errorMessage ) ): dispatch( login(result) );
    }
}

export const startCreatingUserWithEmailPassword = ({email,password,displayName}) =>{
    return async(dispatch) =>{
        dispatch( checkingCredentials());

        const {ok, uid, photoURL, errorMessage} = await registerUserWithEmailPassword({email,password,displayName})
        if (!ok) return dispatch( logout({errorMessage}) )
        
        dispatch( login({uid, displayName, email, photoURL}));
    }

}
export const startLoginWithEmailPassword = ({email,password})=>{
    return async (dispatch) => {
        dispatch( checkingCredentials());
        const {ok,uid,photoURL,errorMessage, displayName} = await loginWithEmailPassword({email,password})        
        if(!ok) return dispatch( logout({errorMessage}));
        
        dispatch( login( {uid, displayName,email,photoURL} ) )
    }
}

export const startLogout= () =>{
    return async(dispatch)=>{
        
        await logoutFirebase();
        dispatch( clearNotesLogout());

        dispatch( logout({}) );

    }
} 