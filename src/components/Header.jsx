import "./Header.css";
import { useState } from "react";

import { MdCancel, MdMenuOpen } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";


export const Header = () => {
  const[ismenuopen,setmenuopen]=useState(false);
  const handlemenubtn=()=>{
    setmenuopen(!ismenuopen);
  }
  


  return (
    <>
    <div className="header-container">
  <div className="logo-container">
    <img src="/mylogo.png" alt="logo" className="myLogo"/>
  </div>

  {!ismenuopen && (
    <TiThMenu
      className="menu-icon"
      onClick={handlemenubtn}
    />
  )}

  {ismenuopen && (
    <MdCancel
      className="cancel-icon"
      onClick={handlemenubtn}
    />
  )}

  <nav className={ismenuopen ? "mobile-view" : ""}>
    <ul>
      <li><a href="#" onClick={()=>setmenuopen(false)}>Home</a></li>
      <li><a href="#education"onClick={()=>setmenuopen(false)} >Education</a></li>
      <li><a href="#skill" onClick={()=>setmenuopen(false)}>Skill</a></li>
      <li><a href="#project" onClick={()=>setmenuopen(false)}>Projects</a></li>
      <li><a href="#contact" onClick={()=>setmenuopen(false)}>Contact</a></li>
    </ul>
  </nav>
</div>





   </> 
  )
};
