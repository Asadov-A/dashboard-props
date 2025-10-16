import { useState } from 'react'
import './App.css'
import Customers from './components/main/customers/customers'
import LeftMenu from './components/left-menu/LeftMenu'

function App() {

  return (
    <>


  <main>
     <LeftMenu></LeftMenu>

     <Customers></Customers>
  </main>
    </>
  )
}

export default App
