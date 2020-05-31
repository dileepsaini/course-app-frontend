import React,{useState} from 'react';
import Firebase from '../firebase';
import Base from './base';

const Addlist = ()=>{
 const [data,setData] = useState({
     title:"",
     Address:"",
     imgUrl:"",
     url:"",
     courses:[],
     description:"",
     location:""
 });
 const [s,setS] = useState(false);
 const {courses,title} = data;
 const submit = ()=>{
     const arr = courses.split(" ");
     setData({...data,courses:arr});
     Firebase.firestore().collection("All").doc(title).set(data)
     .then((s)=>setS(true))
     .catch(err=>setS(false));
     setData({
        title:"",
        Address:"",
        imgUrl:"",
        url:"",
        courses:[],
        description:"",
        location:""
     });
     setS(false);
 };
 const successMsg = ()=>{
     if(s) return <h1>Data saved</h1>;
     else return <h1>data is not saved yet</h1>

 }
 const handlechange= name=>event=>{
    setData({...data,[name]:event.target.value});
      
}    
 return (
     <>
     <Base>
      {successMsg()}
      <input placeholder="title" onChange={handlechange("title")} type="text" />
      <input placeholder="Address" type="text" onChange={handlechange("Address")}  />
      <input placeholder="imgUrl" type="text" onChange={handlechange("imgUrl")} />
      <input placeholder="url" type="text" onChange={handlechange("url")} />
      <input placeholder="description" type="text" onChange={handlechange("description")} />
      <input placeholder="loaction" type="text" onChange={handlechange("location")} />
      <input placeholder="courses" type="text" onChange={handlechange("courses")} />
       <button onClick={submit}>
           submit
       </button>
      <p>{JSON.stringify(data)}</p>
      </Base>
     </>
 )

};
export default Addlist;