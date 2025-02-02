import React from 'react'


const Header = (props) => {

    const logOut = ()=>{
        localStorage.setItem('loggedInUser','')
        // window.location.reload();
        // console.log(props.changeUser);
        
        props.changeUser(null);


    }

    
    return (
        <div className='flex justify-between items-end'>
            <h1 className='text-xl font-bold'>Hello <br /><span className='text-2xl font-bold'>{props.data.firstname} 🖐</span></h1>
            <button className='rounded p-2 bg-blue-600 font-bold' onClick={logOut}>Log Out</button>
        </div>
    )
}

export default Header
