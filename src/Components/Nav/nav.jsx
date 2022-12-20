import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookBookmark} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageAltAdd} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav className='nav'>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav==="#" ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav==='#about' ? '#active' : ''}><AiOutlineUser /></a>
      <a href="#Experience" onClick={() => setActiveNav('#Experience')} className={activeNav==='#Experience' ? 'active' : ''}><BiBookBookmark /></a>
      <a href="#Services" onClick={() => setActiveNav('#Services')} className={activeNav==='#Services' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#Contacts" onClick={() => setActiveNav('#Contacts')} className={activeNav==='#Contacts' ? 'active' : ''}><BiMessageAltAdd /></a>
    </nav>
  )
}

export default Nav