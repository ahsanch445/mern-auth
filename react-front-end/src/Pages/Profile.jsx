import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
const Profile = () => {
    const [isUserExits, setisUserExits] = useState(false)
    let Cookie = Cookies.get('token')
   let navigate =  useNavigate()
    const handleLogout = ()=>{  
      
            Cookies.remove("token")
         
               navigate("/login")
            
        
    }
const getUserProfile = async()=>{
   
   

    
    try {
       let res = await axios.get("http://localhost:8000/api/userprofile",{
        headers:{
            Authorization: Cookie
        }
       })   
       setisUserExits(res.data.name)

     
    } catch (error) {
        console.log(error?.response?.data?.message)
        setisUserExits("")
    }
    
}
useEffect(() => {

getUserProfile()

}, [])

  return (
    
isUserExits ? <>
<div> Wellcome to my Profile</div>
<div className='bg-green-300 '>
<button style={{backgroundColor:"red"}}
className='p-2' onClick={handleLogout}> Logout</button>

</div>
</>:"helo"
    
  )
}

export default Profile