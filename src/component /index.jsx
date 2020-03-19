import React from 'react';
import '../css/styles.css'
import {Link} from 'react-router-dom'
import CoverPhoto from '../image/9.jpg'



function Index() {
  return (
    <div>
      <div className='Coverbox'>
        <img src={CoverPhoto} alt={{}} className='CoverPhoto' />
          <h1 className='companyName' >KAWOLEGAL</h1>
          <p className='CompanyTag'>A collaborative ecosystem for problem<br />solvers and support for startups.</p>
          <Link to='/register' style={{colour: "white"}} ><button className='button' >Register Now!</button></Link>
    </div>    
    </div>
    
  );
}

export default Index;
