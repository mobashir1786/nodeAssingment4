import React from 'react';
import { Link} from 'react-router-dom'

export default function Navbar() {
    
    return (
        <>
            <ul className='nav'>
                <li><Link to="/signup">signup</Link></li>
                <li><Link to="/login">login</Link></li>
            </ul>
        </>
    )
}