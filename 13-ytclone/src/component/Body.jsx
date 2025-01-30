
import { Outlet } from 'react-router-dom'

import SideBar from './SideBar'


function Body() {
  return (
    <div className='flex'>
        <SideBar className="bg-black" />
        <Outlet />
        
    </div>
  )
}

export default Body