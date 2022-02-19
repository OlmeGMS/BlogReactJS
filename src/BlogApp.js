import { AppRouter } from "./routes/AppRouter"
import { AuthContext } from './reducer/authContext';
import { useEffect, useReducer } from "react";
import { authReducer } from "./reducer/authReducer";

const init = () => {
  return JSON.parse(localStorage.getItem('login')) || {logged: false};
}

export const BlogApp = () => {

  const [ user, dispatch] = useReducer( authReducer, {}, init);

  useEffect(() => {
    if(!user) return;
    localStorage.setItem('login', JSON.stringify(user));
  }, [])

  return (
    <AuthContext.Provider value={{user, dispatch}}>
      <AppRouter />
    </AuthContext.Provider>
  )
}
