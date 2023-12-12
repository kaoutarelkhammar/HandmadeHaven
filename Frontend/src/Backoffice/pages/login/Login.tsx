import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate()
    const [Login , setLogin] = useState({username:'',password:''})
    const handleLogin = (e) => {
        setLogin({...Login , [e.target.name]:e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:4000/v1/users/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(Login),
        })
          .then((res) => res.json())
          .then((data) => localStorage.setItem("data" , JSON.stringify(data)));
        navigate('/');
          
    }


    return(
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 items-center border w-[35rem] h-[25rem] rounded shadow-md shadow-customColor'>
            <h1 className='mb-6  mt-8 text-2xl font-bold font-primary text-yellow-900'>Login</h1>
            <input onChange={handleLogin} name='username' type='text' placeholder='Enter userName' className='w-[30rem] rounded-sm font-primary'/>
            <input onChange={handleLogin} name='password' type='password' placeholder='Enter password' className='w-[30rem] rounded-sm font-primary'/>
            <button  type='submit' className='border rounded-md w-[30rem] h-[2.5rem] bg-customColor font-primary text-white hover:bg-customColorHover hover:text-yellow-900'>Login</button>
        </form>
    )
}
export default Login ;