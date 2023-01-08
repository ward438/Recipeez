import React, {useState} from 'react'
import { MainLayout } from './components/layouts/main';


export default function Home() {  
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (    
    <>
      {isLoggedIn && <MainLayout/>}
      {!isLoggedIn && <div>Todo - login page</div>}
    </>
  )
}
