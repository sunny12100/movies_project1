import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div >
      <Header/>
      <div className='absolute'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_large.jpg" alt="" />
      </div>
      <form className='relative flex flex-col text-white'>
        <h1>Sign In</h1>
        <input type="text" placeholder='Email Address'/>
        <input type="text" placeholder='Password'/>
        <button>Sign In</button>
        <p>New to Netflix? Sign Up Now!</p>
      </form>
    </div>
  )
}

export default Login
