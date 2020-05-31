import React from 'react';
import { categories } from '../categories';
import {Card} from 'antd';
import '../styles.css';
import { Link } from 'react-router-dom';

const CategoryCards = ()=>{
   const courseResult = ()=>{
         
  }

  return (
    
        <>
           
               {
                   categories.map((val,ind)=>{
                                return ( 
                                   
                                <div className="col-lg-2 col-md-2 col-sm-4 col-xs-4" onClick={courseResult}>
                                    <Link to={val}> 
                                     <div className="card" id="courseCard" >
                                     {val}
                                     </div>
                                  </Link>
                                </div>)
                                
                   })
                } 
           
          </> 
   

  )
};
export default CategoryCards;

