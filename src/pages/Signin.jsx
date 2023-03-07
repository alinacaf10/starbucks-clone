import React from 'react'
import '../styles/pages/signin.scss'
import Header from '../components/header'
const Signin = () => {
  return (
    <div>
      <Header/>
      
      <h2>Sign in or create an account</h2>
      <div className='contain'>
       <div className="signin">
      </div>
       <div className="signn">
      <form action="">
        <p><span>*</span> indicates required field</p>
      <input type="email" placeholder="Username or email address"></input>
      <input type="password"placeholder="Password"></input>
   
      </form>
      </div>
    </div>
    </div>
  )
}

export default Signin
