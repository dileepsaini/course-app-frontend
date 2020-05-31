import React,{useState,useEffect} from 'react';
import {Link,Redirect} from 'react-router-dom';

import Firebase from '../firebase';
const Header =()=>{
  const [islogged,setLogged] = useState(false);
  useEffect(()=>{
    Firebase.auth().onAuthStateChanged(
      user=>{
         if(user){
         
          setLogged(true);
         }
         else setLogged(false);
          
      }
     );
  });
  const signout=()=>{
    Firebase.auth().signOut();
  };

 
    return (
   <div className="col-12 p-0" style={{position:"fixed",zIndex:999}}>

  
     <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:'	rgba(228, 129, 203,0.5)'}}>
       <a className="navbar-brand font-weight-bold text-dark" >FTV Salon Academy</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
       aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
       </button>
     <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav " style={{textAlign:"center",margin:"0 auto",fontSize:"x-large",}}>
       
        <li className="nav-item active " key ="1">
         <Link to="/" className="nav-link " >Home <span className="sr-only">(current)</span></Link>
         </li>
       
        <li className="nav-item dropdown" key ="2">
          <p className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" 
          aria-haspopup="true" aria-expanded="false">
          Courses
         </p>
         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
           {
                  
           ["Hair","Makeup","Spa"].map((val,ind)=><a key = {ind} className="dropdown-item" >{val}</a>)

           }
          
        
          </div>
        </li>
         {
           !islogged && (
             <>
             <Link to="/signup">
            <li className="nav-item" key ="3">
            <a className="nav-link" >Singup</a>
           </li>
           </Link>

           <Link to="/signin">
           <li className="nav-item" key ="4">
            <a className="nav-link " >Signin</a>
           </li>
           </Link>

           </>
           )
         }
         {
           islogged && (
           <Link to="/">
            <li className="nav-item" onClick={signout} key ="5">
              <a className="nav-link" >Signout</a>
           </li>
           </Link>
           )
         }
        
      </ul>
     </div>
    </nav>
    </div>
        
    )

};
export default Header;