import React,{useState,useEffect} from 'react';
import Base from './base';
import {Link} from 'react-router-dom';
import Firebase from '../firebase';


import '../styles/signup.css';

const Signup = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    success: false
  });

  const {  email, password, error, success } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    const auth = Firebase.auth();
   const promise= auth.createUserWithEmailAndPassword(email,password);
    promise.then((user)=>{
        console.log(user);
        setValues({...values,error:false,success:true});
    })
    .catch(err=>{console.log(err)
        setValues({...values,error:err.message,success:false});
         
    });
    
  };

  const signUpForm = () => {
    return (
      
      <div className="row container-fluid">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="">Email</label>
              <input
                className="form-control"
                onChange={handleChange("email")}
                type="email"
                value={email}
              />
            </div>

            <div className="form-group">
              <label className="">Password</label>
              <input
                onChange={handleChange("password")}
                className="form-control"
                type="password"
                value={password}
              />
            </div>
            <button onClick={onSubmit} className="btn  btn-primary btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>
     
    );
  };

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            New account was created successfully. Please
            <Link to="/signin">Login Here</Link>
          </div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  return (
    <Base >
       <h1 className="text-center text-white" style={{fontWeight:'lighter'}}>
         Signup
       </h1>
       <div className="signinback"> </div>
       <div className="signupcard">
       {successMessage()}
      {errorMessage()}
      {signUpForm()}
       </div>
    
     
    </Base>
  );
};

export default Signup;
