import React, {useState, useContext,createContext} from "react"
// import { ThemeContext } from "@emotion/react";
// const userNameSample = "User's Name";

// export const UserNameContext = createContext(
//     // {userName: `${userNameSample}`}
//     {}
// )

const UserNameContext = createContext()

export function UserNameFunc({ ...children }) {
    const [userName, setUserName] = useState(['InitialName', 'GuestName']) 
    const updateName = 'Guest'

    return (   
        <UserNameContext.Provider value={{userName, updateName}}>                       
            {children.children}                       
        </UserNameContext.Provider>    
    )
}

