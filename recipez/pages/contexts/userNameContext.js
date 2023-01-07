import React, {useState, useContext,createContext} from "react"

const UserNameContext = createContext()

export function UserNameFunc({ ...children }) {
    const [userName, setUserName] = useState(['InitialName', 'GuestName']) 

    return (   
        <UserNameContext.Provider value={{userName, setUserName}}>                       
            {children.children}                       
        </UserNameContext.Provider>    
    )
}

export default UserNameContext;