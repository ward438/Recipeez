import React, {useState} from 'react'
import '../styles/globals.css'
import { UserNameContext, UserNameFunc } from './contexts/userNameContext'
import { Provider } from 'react-redux';
import {store} from '../store';

export default function App({ Component, pageProps }) {  
  const [user, setUser] = useState({username: 'Robert'})

  return (
    <Provider store={store}>
      <UserNameContext.Provider value={{user, setUser}}>        
        <Component {...pageProps}/>        
      </UserNameContext.Provider>
    </Provider>
  )
}
