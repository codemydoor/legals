import React from 'react';
import '../css/navbar.css'
import Logo from '../image/1.png'
import {Link} from 'react-router-dom'




function Navbar() {
  return (
       


  <nav className="navbar navbar-default">
  <div className="container-fluid">
  
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
    <Link className="navbar-brand" to ='/'><img src={Logo} className='logo' alt={{}} /></Link>
    </div>


    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      
      <ul className="nav navbar-nav">
      </ul>
      <ul className="nav navbar-nav navbar-right">
      <li><Link to='/' className='links'>Home</Link></li>
      <li><Link to='/startups' className='links'>Startup</Link></li>
      <li><Link to='/register'className='links' >Register</Link></li>
      <li ><Link to='/login' className='links' >Login</Link></li>
       
      </ul>
    </div>
  </div>
</nav>

  

   

  );
}

export default Navbar;
