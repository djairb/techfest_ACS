import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState({

        id: 0,
        nome: "Fazer Login"

    });

    const toggleUser = (novoUsuario) => {
        
        setUser(novoUsuario);
    }

    return <UserContext.Provider value={{user, toggleUser}}>{children}</UserContext.Provider>


}