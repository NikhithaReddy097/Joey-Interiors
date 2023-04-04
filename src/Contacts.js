import React from 'react'
import './App.css'
function Contacts() {
  return (
    <>
    <div className="container">
               <div className="row mt-5 mt-5 text-center text-warning">
                   <h1 style={{fontFamily:'Garamond' ,color:'#888', letterSpacing:2}}><b>CONTACTS</b><br/></h1>
               </div>
                <div className="row mt-4 mb-4 text-center ">
                    <p>
                        We are available 24/7 by e-mail and by phone. You can also use our quick contact<br/>form to ask a question about our services and projects.
                    </p>
                </div>
               <div className="row text-left">
                   <hr></hr>
               </div>
               <div className="row mb-4 mt-4">
                 <div className="col-md-6">
                     <h2 align="center" className="text-blaack-50" style={{fontFamily:'Garamond',letterSpacing:1}}><b>Contact form</b></h2>
                    <form>
                    <div className="mb-3">
                      <label for="exampleInputName1" className="form-label">Name</label>
                      <input type="text" className="form-control" id="exampleInputName1" />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Email</label>
                      <input type="email" className="form-control" id="exampleInputEmail1"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPhone1" className="form-label">Phone number</label>
                        <input type="text" className="form-control" id="exampleInputPhone1"/>
                      </div>
                      <div className="mb-3">
                        <label for="exampleInputMessage1" className="form-label">Message</label>
                        <br/>
                        <textarea type="text" className="form-control" id="exampleInputMessage1">

                        </textarea>
                      </div>
                    <button type="submit" className="btn" style={{backgroundColor:'#888',fontFamily:'Monaco'}}>SEND MESSAGE</button>
                  </form>
                 </div>
                 <div className="col-md-6 text-center">
                    <div className="row mb-5 mt-5">
                        <br/>
                        <h6 className="text-dark" style={{fontFamily:'Georgia',letterspacing:1}}><h3>Phone number</h3></h6>
                        <br/>
                        <p className="text-dark">+91 8378187146</p>
                        <br/>
                        <hr></hr>
                        <br/>
                        <h3 className="text-dark" style={{fontFamily:'Georgia',letterspacing:1}}>Email</h3>
                        <br/><br/>
                        <p className="text-dark">info@interiordesigning.ac.in</p>
                        <br/>
                        <hr/>
                        <br/>
                        <h3 className="text-dark" style={{fontFamily:'Georgia',letterspacing:1}}>Address</h3>
                        <br/><br/>
                        <p className="text-dark"> 87/1388-5-1, YBBR Building,<br/> Mangalore Rd, beside Vinayaka Temple,<br/> Jaya Ram Nagar,Bangalore,<br/> Karnataka 560001</p>
                        <br/>
                        <br/>
                          
                    </div>
                   
                 </div>
               </div>
        </div>

        <div className='container-fluid' style={{backgroundColor:'#888', }}>
          <div className="row text-centre" >
                <div className="col-md-6" style={{color: 'black',letterSpacing: 4,
    fontWeight:'3000', fontFamily:'Lucida Console',padding:'50px',textShadow:'0px 0px 10px rgba(0,0,0,0.5)'}}><b><h3>JOEY<br/>INTERIORS<br/></h3></b></div>
                <div className="col-md-6">

                  <div className='row' style={{textAlign:'center'}}>
                  <div className='col text-centre' style={{paddingTop:'40px',borderLeft:'2e'}}> <b>Phone number</b><br/>
+91 8378187146</div>

                  <div className='col text-centre' style={{paddingTop:'40px',textAlign:'center'}}><b>Email</b>
<br/>
<a href='mailto:info@interiordesigning.ac.in' style={{color:'black',textDecoration:'none'}}>info@interiordesigning.ac.in</a></div>

                  <div className='col text-centre' style={{paddingTop:'40px'}}><b>Address</b><br/>Bangalore,<br/>
Karnataka 560001</div>
</div>
                
                </div>
            </div>
        
        </div>
    </>
  )
}

export default Contacts