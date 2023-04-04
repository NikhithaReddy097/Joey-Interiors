import React from 'react'

function About() {
  return (
    <>
    <div class="container">
            <div class="row mt-4 mb-4">
                <div class="col-md-12 text-center " style={{fontFamily:'Garamond',letterSpacing:2 ,color:'#888'}}><h1><b>About us</b></h1></div>
            </div>
            <div class="row ">
                <div class="col-md-12 text-20px text-center" style={{color:'black'}}><p>We're a Park City based furniture store and interior design firm, specializing in staging
                    <br/> and furnishing high-end, luxury homes.</p></div> <br></br>
                    <hr/>
            </div>
            <div class="row " style={{padding:'10px'}} >
                <div class="col-md-6" style={{textAlign:'centre',padding:'150px'}}>

                    <div class="row text-center" style={{fontFamily:'Garamond',letterSpacing:2 ,color:'#888'}}><h1><b>Where we work</b><hr></hr></h1></div>
                    <div class="row  " style={{color:'black'}}><p align="center">
                        We work with clients across the country, and we bring our services wherever you are. We love working anywhere and everywhere with the ideas and styles native to each new place you invite us.
                    </p></div>
                </div>
                <div class="col-md-6">
                    <img src="img/xx.jpg" align="centre" style={{height:'520px',width:'420px' }}/>
                </div>
            </div>

            <hr/>
            <div class="row " style={{padding:'10px'}}>
                <div class="col-md-6">
                    <img src="img/xy.jpg" align="centre" style={{height:'520px',width:'420px' }}/>
                </div>
                <div class="col-md-6" style={{textAlign:'centre',padding:'150px'}}>
                    

                    <div class="row text-center" style={{fontFamily:'Garamond',letterSpacing:2,color:'#888'}}><h1><b>Why work with us</b><hr></hr></h1></div>
                    <div class="row " style={{color:'black'}}><p align="center">
                        The women in our family have been interior designers for generations, passing the tradition to their daughters.
                    
                        We want to share our creative heritage with you to design a beautiful home where you and your loved ones can gather.
                    </p></div>

                </div>
            </div>
        </div>
<br></br><br></br>
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

export default About