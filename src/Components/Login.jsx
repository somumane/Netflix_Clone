import React, { useState } from 'react'
import '../Style/Login.css'
import SignIn from './SignIn';

const Login = () => {
  const[signin,setsignin]=useState(false);
  return (
    <div className='loginScreen'>
    <div className='loginScreenbackground'>
<img  className='loginScreenlogo' src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt=''/>
<button className='signin_button' onClick={()=>setsignin(true)}>Sign In</button> 
  
<div className='gradient'/>
<div className='loginfotter'/>
</div>
<div className='loginScreenbody'>
{ signin?(<SignIn/>):(
<>
<p>Welcome back!</p>
<h2>Enjoy big movies, hit series and more from ₹ 1.</h2>
<p>Join today. Cancel anytime.</p>
<button className='finishup'>Finish Sign Up {`>`}</button>

<div className='loginScreeninput'>
<form>
<input type='email' placeholder='Email Address'></input>
<button className='startbutton' onClick={()=>setsignin(true)}>GET STARTED</button>
</form>

</div>
</>)}
</div>
    </div>
  )
}

export default Login
