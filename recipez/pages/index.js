import { UserNameFunc } from './contexts/userNameContext'
import React, {useState, useContext} from 'react'
import styles from '../styles/Home.module.css'
import TabHeader from './tab_header'

// console.log('SampleContext',SampleContext)


export default function Home() { 

 


  return (    
    <>
      <UserNameFunc>
        <TabHeader/>
      </UserNameFunc>        
        <p>Recipe Stuff</p>
    </>
  )
}
