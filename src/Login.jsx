import {useState} from 'react'
import LoginForm from './Auth/LoginForm'
import SignUpForm from './Auth/SignUpForm'



const Login = ({onLogin, user}) => {

    const [showLogin, setShowLogin] = useState(true)

    return (
        <>
        <div className="auth-container">
            <div className='auth-card'>
                <div className='inner-card'>
                    {showLogin ? (
                    <div className= 'card-front'>   
                        <LoginForm onLogin={onLogin}/>               
                        <div>
                            <button onClick={() => { 
                                setShowLogin(false)
                            }}>
                        
                                Register Here
                            </button>
                        
                        </div>
                    </div>
                        ) : (
                    <div className='card-back'>
                        <SignUpForm user={user} onLogin={onLogin}/>
                        <div btn-class>
                            <button onClick={() => { 
                                setShowLogin(true);
                            }}>
                                Log In
                            </button>
                        </div>
                    </div>
                    )}
                </div>
            </div>  
        </div>
           
        </>
    )
}

export default Login





