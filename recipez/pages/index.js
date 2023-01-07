import UserNameContext, { UserNameFunc } from './contexts/userNameContext'
import React, {useState, useContext} from 'react'
// import styles from '../styles/Home.module.css'
import TabHeader from './tab_header'



console.log(UserNameContext)
export default function Home() { 
  const context = UserNameFunc().props.value.userName
  return (    
    <>
      {/* <UserNameContext.Provider value={UserNameFunc()}> */}
      <UserNameContext.Provider value={context}>
        <TabHeader/>
      </UserNameContext.Provider>        
        <p>Recipe Stuff</p>
    </>
  )
}
