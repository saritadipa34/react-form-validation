import { useState } from "react";

const App=()=>{
  const initialValues={name:"",email:"",password:""};
  const [inputValues,setInputValues]=useState(initialValues);
  const [errors,setErrors]=useState({});

const validate=()=>{

const newErrors={};

  if(!inputValues.name.trim()){
    newErrors.name="Please enter your name";
  }
 

  if(!inputValues.email){
    newErrors.email="Please enter Email";
   } else if(!/\S+@\S+\.\S+/.test(inputValues.email)){
newErrors.email="invalid email";
    }
  

 if(!inputValues.password){
  newErrors.password="Enter password";
 } else if(inputValues.password.length < 8){
  newErrors.password="atleast 8 characters";
 }

return newErrors;

}

const handleSubmit=(e)=>{
  e.preventDefault();
  const validateErrors=validate();
 setErrors(validateErrors);

 if(Object.keys(validateErrors).length === 0){
console.log("done");
 }
}

const handleChange=(e)=>{
  const {name,value}=e.target;
  setInputValues({...inputValues,[name]:value});
}

  return(
    <div className="app">
    <form action="" onSubmit={handleSubmit} >
      <h1>Login Form</h1>
      <label htmlFor="">Name:
        <br />
      <input type="text" name="name" value={inputValues.name} placeholder="Username" 
      onChange={handleChange}/>
      <br />
      </label>
{errors.name && <p style={{color:"red"}} >{errors.name}</p>}


      <br />
      <label htmlFor=""> Email:
        <br />
        <input type="email" name="email" value={inputValues.email} placeholder="Email"
        onChange={handleChange}/>
        <br />
      </label>
      {errors.email && <p style={{color:"red"}} >{errors.email}</p>}


      <br />
      <label htmlFor="">Password:
        <br />
        <input type="password" name="password" value={inputValues.password} placeholder="Password"
        onChange={handleChange}/>
      </label>
      {errors.password && <p style={{color:"red"}} >{errors.password}</p>}


      <button>Submit</button>
    </form>
    </div>
  )
}
export default App;