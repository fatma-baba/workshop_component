import React from 'react'
import './Address.css'

const Address = () => {
    const user_address = "Tunis, 2000 Bardo, Khaznadar"
    return(
        <div className='address'>
            {user_address}
        </div>
    )
}


export default Address