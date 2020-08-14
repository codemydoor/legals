import React from 'react';




function RegistrationForm() {
  return (
    <div className='PageViewHeights'>
    
     

<div className="container"> 
	<div className="row">
		<div className="col-md-3"></div>
		<div className="col-md-6 form">
     
		<form>
    <p className='WelcomeText' >Join Kawolegal. Sign up to get the Startup listed Now!</p>  
        <div className="form-group">
          <label htmlFor="disabledTextInput">Full Name</label>
          <input type="text" className="form-control" placeholder="Full Name" />
        </div>

        <div className="form-group">
          <label htmlFor="disabledTextInput">Email</label>
          <input type="text"  className="form-control" placeholder="Email" />
        </div>
        <div className="form-group">
          <label htmlFor="disabledTextInput">Password</label>
          <input type="Password"  className="form-control" placeholder="Password" required />
        </div>
        <div className="form-group">
          <label htmlFor="disabledTextInput">Confirm Password</label>
          <input type="Password"  className="form-control" placeholder="Confirm Password" />
        </div>
        <button type="submit" className="btn btn-primary">Sign up</button>
        </form>
        
      </div>
    
      <div className="col-md-3"></div>
  </div>
 
</div>

     
    </div>
    
  );
}

export default RegistrationForm;
