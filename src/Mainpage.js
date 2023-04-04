import React from 'react'
import './App.css'
function Mainpage() {
  return (
    <>
    <div className="container-fluid">
          <div className="row">
              <div className="col-md-12">
                <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src="img/aa.jpg" style={{width:"600", height:"500"}} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                          <h1   style={{letterSpacing:2,fontFamily:'Verdana',fontWeight:'550'}}>Transforming Your Space</h1>
                          <p><h5 style={{letterSpacing:1,fontFamily:'Verdana',fontWeight:'540'}}>
                            Our company has been the leading provider of quality tiles and tile design services to customers since 1999. 
                            We pay attention to every aspect of our work.</h5>
                          </p>
                        </div>
                      </div>
                      <div className="carousel-item" >
                        <img src="img/bb.jpg" style={{width:"600", height:"500"}} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                          <h1 style={{letterSpacing:2,fontFamily:'Verdana',fontWeight:'550'}}>Creating Coziness</h1>
                          <h5 style={{letterSpacing:1,fontFamily:'Verdana',fontWeight:'540'}}> <p className="p1">Our company is an award-winning ceramic tiles manufacture and
                             design agency helping people across the USA to improve
                             their house's interior using the best ceramics.</p></h5>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img src="img/cc.jpg" style={{width:"600", height:"500"}} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                          <h1 style={{letterSpacing:2,fontFamily:'Verdana',fontWeight:'550'}}>Wide Product Variety</h1>
                          <h5 style={{letterSpacing:1,fontFamily:'Verdana',fontWeight:'540'}}>
                          <p className="p1">Our products have a variety of textures, finishes and 
                             performance features that allow you to choose just what you
                             need for your new interior.</p></h5>
                        </div>
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
              </div>
          </div>
        </div>
        <div className="container">
            <div className="row mt-4 mb-4">
                <div className="col-mid-12 text-center text-dark">
                    <h1 style={{ color:'black' ,padding:'30px',fontFamily:'Garamond',letterSpacing:2}}><b>Our Collections</b><hr></hr></h1>
                </div>
            </div>
            <div className="row mt-4 mt-4">
                <div className="col-12 col-sm-6 col-md-3 col-lg-3">
                    <div className="card">
                        <img src="img/a.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h3 className="card-title text-center">Balkan beige</h3>
                        </div>
                      </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3 col-lg-3">
                    <div className="card">
                        <img src="img/b.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h3 className="card-title text-center">Novabell</h3>
                        </div>
                      </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3 col-lg-3">
                    <div className="card">
                        <img src="img/c.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h3 className="card-title text-center">Calcutta Black</h3>
                        </div>
                      </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3 col-lg-3">
                    <div className="card">
                        <img src="img/d.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h3 className="card-title text-center">Grasmere</h3>
                        </div>
                      </div>
                </div>
            </div>
            <br></br>
            <hr></hr>
            <br></br>
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

export default Mainpage