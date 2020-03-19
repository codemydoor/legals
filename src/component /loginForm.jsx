import React from 'react';
import '../css/login.css'


function LoginForm() {
  return (
    <div className='PageViewHeight'>
  <div className ='form'>
    <center><h3>Already a member? Login to add your Startup</h3></center>

<div className="container">
  <div className="row">
   <div className="col-md-3"></div>
   <div className="col-md-6">
    <form>
     <div className="form-group">
       <label htmlFor="disabledTextInput">Email address</label>
       <input type="text" id="disabledTextInput" className="form-control" placeholder="Email" />
     </div>
     <div className="form-group">
       <label htmlFor="disabledTextInput">Password</label>
       <input type="Password" id="disabledTextInput" className="form-control" placeholder="Password" />
     </div>
     <button type="submit" className="btn btn-primary">Login</button>
     </form>
   </div>
 
</div>
<div className="col-md-3"></div>
</div>
</div>
      
    </div>
    
  );
}

export default LoginForm;
