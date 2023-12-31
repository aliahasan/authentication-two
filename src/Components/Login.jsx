import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {

    const {signInUser , signInWithGoogle} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)

        // signInWith user
        signInUser(email, password) 
        .then(userCredential =>{
            console.log(userCredential.user)
            e.target.reset()
            navigate('/')
        })
        .catch(error =>{
            console.error(error)
        })
        
    }

    const handleGoogleSignIn = ()=>{
        signInWithGoogle()
        .then(userCredential =>{
            console.log(userCredential.user)
        })
        .catch(error =>{
            console.error(error)
        })
    }
    



  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
           
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="">
                <h1>New to this website? Please go to <Link className="underline" to={`/register`}>Register</Link></h1>
            </div>
            <div>
            <p><button 
            onClick={handleGoogleSignIn}
            className="btn btn-ghost">Google
        
            </button></p>
            </div>
            </form>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
