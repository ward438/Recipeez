import UserNameContext from './contexts/userNameContext'
import {UserName} from './contexts/userNameContext'
import React, {useState, useContext} from 'react'
// import styles from '../styles/Home.module.css'
import TabHeader from './tab_header'




export default function Home() {  
  return (    
    <>
        <TabHeader>  
          <UserName/>
        </TabHeader>
        <p>Recipe Stuff</p>
    </>
  )
}
