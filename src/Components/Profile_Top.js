import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Profile_Top() {
    let location = useLocation();

  React.useEffect(() => {
   
  }, [location]);
  return (
    <div>
       
         <nav class="nav profile-nav-borders">
        <Link class={`nav-link ${location.pathname==='/Profile_Profile'?"active":""}  ms-0`} to="/Profile_Profile" >Profile</Link>
        <Link class={`nav-link ${location.pathname==='/Profile_Security'?"active":""} `} to="/Profile_Security" >Security</Link>
        <Link class={`nav-link ${location.pathname==='/Profile_Recipe'?"active":""} `} to="/Profile_Recipe">Recipes</Link>
 
        
    </nav><hr class="mt-0 mb-2"/>
    </div>
  )
}
