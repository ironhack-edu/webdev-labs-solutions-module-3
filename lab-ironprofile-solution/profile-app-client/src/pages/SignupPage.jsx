import { useState } from "react";
// import axios from 'axios';
import { useNavigate } from "react-router-dom";
import authMethods from "../services/auth.service"

const SignupPage = () => {
    const [user, setUser] = useState({username: '', password: '', campus: '', course: ''});
    const navigate = useNavigate()

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser(user => ({...user, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        ///
        authMethods.signUp(user)
            .then(() => navigate('/login'))
            .catch(err => console.error(err))
        
    }
  return (
    <div className="signUpContainer">
        <div className="ovalBackground">
            <div style={{ width: 'inherit'}}>   
                <form onSubmit={handleSubmit} className="signUpForm">
                    <div>
                        <h1>Sign up</h1> 
                        <label>Username</label>
                        <br />
                        <input type="text" name="username" value={user.username} onChange={handleChange} />
                        <br />
                        <label>Password</label>
                        <br />
                        <input type="password" name="password" value={user.password}  onChange={handleChange} />
                        <br />
                        <label>Campus</label>
                        <br />
                        <input type="text" name="campus" value={user.campus}  onChange={handleChange} />
                        <br />
                        <label>Course</label>
                        <br />
                        <input type="text" name="course" value={user.course}  onChange={handleChange} />
                    </div>

                    <div className="signUpRightSection">
                        <h2>Welcome to IronProfile</h2>
                        <div>
                            <p>If you signup, you agree with all our terms and conditions where we can do whatever we want with the data!</p>
                            <button type="submit"><b>Create the account</b></button>
                        </div>
                    </div>    
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignupPage