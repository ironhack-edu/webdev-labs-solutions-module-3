import React, { useState, useEffect, createContext } from "react";
// import axios from "axios";
import authMethods from "../services/auth.service";
 
const AuthContext = createContext();
 
function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  
  const storeToken = (token) => {       //  <==  ADD
    localStorage.setItem('authToken', token);
  }

  const authenticateUser = () => {           //  <==  ADD  
    // Get the stored token from the localStorage
    const storedToken = localStorage.getItem('authToken');
    
    // If the token exists in the localStorage
    if (storedToken) {
      // We must send the JWT token in the request's "Authorization" Headers
      authMethods.verifyToken(storedToken)
      .then((userPayload) => {
      
       // Update state variables        
        setIsLoggedIn(true);
        setIsLoading(false);
        setUser(userPayload);        
      })
      .catch((error) => {
        // If the server sends an error response (invalid token) 
        // Update state variables         
        setIsLoggedIn(false);
        setIsLoading(false);
        setUser(null);        
      });      
    } else {
      // If the token is not available (or is removed)
        setIsLoggedIn(false);
        setIsLoading(false);
        setUser(null);      
    }   
  }

  const removeToken = () => {                    // <== ADD
    // Upon logout, remove the token from the localStorage
    localStorage.removeItem("authToken");
  }
 
 
  const logOutUser = () => {                   // <== ADD    
    // To log out the user, remove the token
    removeToken();
    // and update the state variables    
    authenticateUser();
  }  
 
  
  useEffect(() => {                                    
    authenticateUser();                   //  <==  ADD
   }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, isLoading, user, setUser, storeToken, authenticateUser, logOutUser }}>
      {props.children}
    </AuthContext.Provider>
  )
}
 
export { AuthProviderWrapper, AuthContext };