import React from 'react'
import './navigation.css'
import Menu from '../menu/Menu'
import Logo from '../logo/Logo'

import Contents from '../content/Contents'



export default function Navigation() {
  return (
    <div className='container'>
        <div class="side1">
        <Menu/>
        
        </div>
      
        <div class="navigation">
        <Logo/>
        </div>
        <div class="main">
        <Contents/>

        </div>
      


    </div>
  )
}
