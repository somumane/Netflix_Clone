import React, { useState} from 'react'
import '../Style/Signin.css'
import { Link } from 'react-router-dom'

const SignIn= () => {
 const [email, setemail] = useState()
 const [password, setpassword] = useState()

return(<div>
      <div className='SignIn'>
       <form>
       <h2>Sign In</h2>
       <input placeholder='Email' type='email' onChange={(e)=>setemail(e.target.value)}/>
       <input placeholder='Password' type='password' onChange={(e)=>setpassword(e.target.value)} />
      <Link to={'home'}><button type='submit' className='button-signin'>Sign In</button></Link>
       <h4><span className='grey'>New to Netflix? </span> <span className='signuplink' >Sign Up now</span></h4>
       </form>
       </div>
       </div>)
}

export default SignIn
