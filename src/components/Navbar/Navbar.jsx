import React, { useState } from 'react';
import Link from '../Link/Link';
import { AiOutlineMenu , AiOutlineClose} from 'react-icons/ai';


const Navbar = () => {
    const [open,setOpen]=useState(false);
    const reactPaths = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "Blog", path: "/blog" }
      ];
    return (
        <nav>
            <div className='md:hidden' onClick={()=>setOpen(!open)}>
                {
                    open === true ? <AiOutlineClose className='text-2xl'></AiOutlineClose>: <AiOutlineMenu className='text-2xl '></AiOutlineMenu>
                }
                
                
            </div>
            
            <ul className={`md:flex duration-1000 absolute md:static ${open ?'top-8':'-top-60'} bg-yellow-500 px-6 shadow-lg`}>
            {
            reactPaths.map(route => <Link key={route.id} route={route}></Link> )
            }
            </ul> 
        </nav>
    );
};

export default Navbar;