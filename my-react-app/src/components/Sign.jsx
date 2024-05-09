import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
const Sign = () => {
  return (
    <div className='mains'>
    <div className='Signup'>
        <form>
            <div className='text_area'>
                <input
                 type="NAME" 
                 id="NAME"
                 name="NAME"
                 defaultValue="NAME"
                 className="text_input"
                 ></input>

            </div>

            <div className='text_area'>
                <input
                 type="EMAIL" 
                 id="EMAIL"
                 name="EMAIL"
                 defaultValue="EMAIL"
                 className="text_input"
                 ></input>

            </div>

            <div className='text_areas'>
                <input
                 type="EMAIL" 
                 id="EMAIL"
                 name="EMAIL"
                 defaultValue="PHONE NUMBER"
                 className="text_input"
                 
                 ></input>

                 
            <input
            type="submit"
            value="SEND OTP"
            className="button"

          />

             

            </div>

            

            
            
            

            {/* <p>Didn't Receive It? RESEND </p>  */}

            <div className='text_area'>
                <input
                 type="phone" 
                 id="phone"
                 name="phone"
                 defaultValue="OTP"
                 className="text_input"
                 ></input>

                 
            
            </div>


            

            <input
            type="submit"
            value="SIGN UP"
            className="btn"

          />

          <p>Already have an account ? <Link to="/login" element={<Login></Login>}  style={{textDecoration:'none'}}>Login</Link></p>
        </form>
        
      
    </div>
    </div>
  )
}

export default Sign
