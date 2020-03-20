import React from 'react';
import Image7 from '../image/7.jpeg'
import Image6 from '../image/6.jpeg'
import Image4 from '../image/4.png'
import Image3 from '../image/3.jpg'
import Image2 from '../image/2.png'


function StartupPage() {
  return (
    <div>
       <div className="container-fluid">
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search Startup by name or industry" />
                    <span className="input-group-btn">
                    <button className="btn btn-primary" type="button">Search</button>
                    </span>
                </div> 
                </div>
                <div className="col-md-1"></div>
            </div>
        </div>

<div className="container">
    
  <div className="row">
    <div className="col-md-4">
      <img src={Image7} className="images" alt={{}}  />
    </div>
    <div className="col-md-8">
      <div className="labels">
       <a href={{}} style={{fontSize: 25, fontWeight: 'bolder'}}>tutahub</a>
       <p>a website for tutorials</p>
       <button type="button" className="btn btn-danger">See full details</button>
     </div>
   </div>
 </div>
</div>
<hr />

<div className="container">
  <div className="row">
    <div className="col-md-4">
      <img src={Image6} className="images" alt={{}} />
    </div>
    <div className="col-md-8">
      <div className="labels">
       <a href={{}} style={{fontSize: 25, fontWeight: 'bolder'}}>Anditer</a>
       <p>a website for tutorials</p>
       <button type="button" className="btn btn-danger">See full details</button>
     </div>
   </div>
 </div>
</div>
<hr />
<div className="container">
  <div className="row">
    <div className="col-md-4">
      <img src={Image4} className="images" alt={{}}  />
    </div>
    <div className="col-md-8">
      <div className="labels">
       <a href={{}} style={{fontSize: 25, fontWeight: 'bolder'}}>Think and zoom</a>
       <p>a website for tutorials</p>
       <button type="button" className="btn btn-danger">See full details</button>
     </div>
   </div>
 </div>
</div>
<hr />
<div className="container">
  <div className="row">
    <div className="col-md-4">
      <img src={Image3} className="images" alt ={{}} />
    </div>
    <div className="col-md-8">
      <div className="labels">
       <a href={{}} style={{fontSize: 25, fontWeight: 'bolder'}}>Slatecube</a>
       <p>a website for tutorials</p>
       <button type="button" className="btn btn-danger">See full details</button>
     </div>
   </div>
 </div>
</div>
<hr />
<div className="container">
  <div className="row">
    <div className="col-md-4">
      <img src={Image2} className="images" alt={{}} />
    </div>
    <div className="col-md-8">
      <div className="labels">
       <a href={{}} style={{fontSize: 25, fontWeight: 'bolder'}}>Sleekjob academy</a>
       <p>a website for tutorials</p>
       <button type="button" className="btn btn-danger">See full details</button>
     </div>
   </div>
 </div>
</div>
<hr />
      
    </div>
    
  );
}

export default StartupPage;
