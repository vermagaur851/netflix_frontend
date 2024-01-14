import { AccountCircle, ArrowDropDown, Notifications, Search } from '@mui/icons-material'
import './navbar.scss'
import { useState } from 'react';

export default function Navbar() {
const [isScrolled,setISscrolled] = useState(false)
  window.onscroll = () => {
    setISscrolled(window.scrollY <= 100 ? false:true);
    return () => (window.onscroll = null)
  };
  
  return (
    <div className={isScrolled ? "navbar scrolled":"navbar"}>
      <div className="container">
        <div className="left">
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" 
                alt="Netflix" 
            />
            <span>Homepage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and popular</span>
            <span>My List</span>
        </div>
        <div className="right">
            <Search className='icon'/>
            <span>KID</span>
            <Notifications className='icon'/>
            <img 
                src="https://imgs.search.brave.com/kwlx8ig_Ow7xJsAbJ3btfnGdJk6-9QNpjCisngedogA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly82NC5t/ZWRpYS50dW1ibHIu/Y29tLzJjZDA2NGRj/NDJlZTM2NDE4Yzc1/YmI1ZDRmYmM1NGM5/L2ZhM2M2YmE3Yjdl/ZWM2ZjQtOTAvczI1/MHg0MDAvYWM0YTgw/MGE3NmRjYjBhMzQ1/MDkwOGFjYzJhMGFj/ZGExNzkxY2U5MS5w/bmc" 
                alt="profile" 
            />
            <div className="profile">
                <ArrowDropDown className='icon'/>
                <div className="options">
                    <span>Settings</span>
                    <span>Logout</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
