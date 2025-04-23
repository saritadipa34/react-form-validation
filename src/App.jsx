
const App=()=>{
  return(
    <div className="app">
    <form action="" >
      <h1>Login Form</h1>
      <label htmlFor="">Name:
        <br />
      <input type="text" id="name" value="" placeholder="Username" />
      <br />
      </label>
      <br />
      <label htmlFor=""> Email:
        <br />
        <input type="email" id="email" value="" placeholder="Email"/>
        <br />
      </label>
      <br />
      <label htmlFor="">Password:
        <br />
        <input type="password" id="password" value="" placeholder="Password"/>
      </label>
      <button>Submit</button>
    </form>
    </div>
  )
}
export default App;