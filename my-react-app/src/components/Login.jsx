import React from 'react'
import Sign from './Sign'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <div className='mains'>
    <div className="login">
        <h4></h4>
        <form>
          <div className="text_area">
            <input
              type="text"
              id="username"
              name="username"
              defaultValue="USERNAME"
              className="text_input"

            />
          </div>
          <div className="text_area">
            <input
              type="password"
              id="password"
              name="password"
              defaultValue="PASSWORD"
              className="text_input"

            />
          </div>
          <input
            type="submit"
            value="LOGIN"
            className="btn"

          />
          <p>Don't have an account ? <Link to="/sign" element={<Sign></Sign>}  style={{textDecoration:'none'}}>Signup</Link></p>
        </form>
        
      </div>
      </div>
    </>
  )
}

export default Login
