import React, {useState, useContext, createContext} from "react";
import Cookie from 'js-cookie';
import axios from "axios";
import endPoints from "services/api";


const AuthContext = createContext();



export function ProviderAuth ({ children}){
    const auth = useProvideAuth();
    return <AuthContext.Provider value={auth} >
        {children}
    </AuthContext.Provider>

}

export const useAuth = () =>{

    return useContext(AuthContext);
}

function useProvideAuth(){
    const [user, setUser] = useState(null);
    const options = {
        header: {
            accept: '*/*',
            'Content-Type': 'application/json'
        },
    }

    const signIn = async(email, password) => {

        const {data: acces_token} = await axios.post(endPoints.auth.login, {email, password}, options)
          
        console.log(acces_token);

        if (access_token) {
            const token = access_token.access_token;
            Cookie.set('token', token, { expires: 5 });
            axios.defaults.headers.Authorization = `Bearer ${token}`;
            const { data: use } = await axios.get(endPoints.auth.profile);
            console.log(use)
            setUser(use);
          }

    }

    const logout = () => {
        Cookie.remove('token');
        setUser(null);
        delete axios.defaults.headers.Authorization;
        window.location.href = '/login';
      };


    return {
        user, 
        signIn,
        logout,
       
    };
}