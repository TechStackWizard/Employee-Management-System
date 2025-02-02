import React from 'react'
import { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function submitHandler(e){
        e.preventDefault()

        handleLogin(email,password)

        // console.log('email:', email);
        // console.log('password:', password);
        // console.log('form submitted');

        setEmail('');
        setPassword('');
    }

  return (
    <div className='flex justify-center items-center h-screen font-sans'>
        <div className="bg-transparent w-80 h-96 rounded-2xl border-2">
            <h2 className='text-center text-2xl uppercase p-4 bg-blue-600 rounded-t-2xl'>Employee Login</h2>
            <form action="" className='p-8' onSubmit={(e)=>{
                submitHandler(e);
            }}>
                <div className="mb-10">
                    
                    <input required type="text" name="email" id="email" placeholder="Email" value={email} onChange={(e)=>{
                        setEmail(e.target.value)
                    }} className="w-full p-2 border-b-4 text-2xl border-gray-400 bg-transparent outline-none placeholder:text-xl placeholder:text-gray-400"/>
                </div>
                <div className='mb-10'>
                    
                    <input required type="password" name="password" id="password" placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} className='w-full p-2 border-b-4 text-2xl border-gray-400 bg-transparent outline-none placeholder:text-xl placeholder:text-gray-400'/>
                </div>
                <div className="flex  justify-center items-center mt-16">

                <button type="submit" className='px-8 py-2 text-xl bg-blue-600 rounded-lg text-white font-bold items-center'>Submit</button>
                </div>
            </form>
        </div>
      
    </div>
  )
}

export default Login
