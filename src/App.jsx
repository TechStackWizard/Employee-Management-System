import { useContext, useEffect, useState } from 'react'

import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'
import Loader from './components/OtherPages/Loader'

function App() {

  const [isLoading, setIsLoading] = useState(true);
  
  const [user, setUser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null)
  const [authData,setUserData] = useContext(AuthContext);
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)

    },3000)
  }, [])
  
  useEffect(function(){
    const loggedInUser = localStorage.getItem('loggedInUser')
  
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role);
      setloggedInUserData(userData.data)
    }
  },[])
    
  const handleLogin = (email,password)=>{
    
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}));
    }else if(authData){
      // console.log(authData.employees)
      const employee = authData.find(e=> e.email == email && e.password == password);
   
      if(employee){
        setUser('employee')
        setloggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}));
      }
      else{
        alert('Invalid Credentials');
      }
    }
    else{
      alert('Invalid Credentials');
    } 
  }  
  return (
    <>
      {isLoading ? <Loader/> : null}
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser}  data={{"firstname":"Admin"}}/> : (user == 'employee' ? <EmployeeDashboard  changeUser={setUser} data={loggedInUserData}/> : null)}
    
    </>
  )
}

export default App
