import { useState } from "react";

const App=()=>{
  const initialValues={name:"",email:"",password:""};
  const [inputValues,setInputValues]=useState(initialValues);

const handleChange=(e)=>{
  const {name,value}=e.target;
  setInputValues({...inputValues,[name]:value})
  console.log(inputValues)
}

  return(
    <div className="app">
    <form action="" >
      <h1>Login Form</h1>
      <label htmlFor="">Name:
        <br />
      <input type="text" name="name" value={inputValues.name} placeholder="Username" 
      onChange={handleChange}/>
      <br />
      </label>
      <br />
      <label htmlFor=""> Email:
        <br />
        <input type="email" name="email" value={inputValues.email} placeholder="Email"
        onChange={handleChange}/>
        <br />
      </label>
      <br />
      <label htmlFor="">Password:
        <br />
        <input type="password" name="password" value={inputValues.password} placeholder="Password"
        onChange={handleChange}/>
      </label>
      <button>Submit</button>
    </form>
    </div>
  )
}
export default App;