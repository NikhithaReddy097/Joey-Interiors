import {BrowserRouter,Route,Routes,Link }from 'react-router-dom'
import Contacts from './Contacts'
import About from './About'
import Mainpage from './Mainpage'
import Services from './Services'
import './App.css'

function App(){
    return(
        <BrowserRouter>
        
        <nav className="navbar navbar-expand-lg " style={{height:'60px',backgroundColor:'#888'}} >
    <div class="container-fluid">
    <Link className="navbar-brand"  to="/"> <h4 style={{color: 'black',letterSpacing: 4,
    fontWeight:'3000',paddingLeft:'10px', fontFamily:'Copperplate',paddingTop:'10px'}}><b>JOEY INTERIORS</b></h4></Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <h6 style={{color:"white"}} >
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/"> <h5 style={{color:'black' ,paddingTop:'15px',fontWeight:'1000',fontFamily:'	Garamond',paddingLeft:'10px'}}>HOME</h5></Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/about"><h5 style={{color:'black' ,paddingTop:'15px',fontWeight:'1000',fontFamily:'Garamond',paddingLeft:'10px'}}>ABOUT US</h5></Link>
                          </li>
                          <li className="nav-item">
                          <Link className="nav-link active" to="/services"> <h5 style={{color:'black' ,paddingTop:'15px',fontWeight:'1000',fontFamily:'Garamond',paddingLeft:'10px'}}>SERVICES</h5></Link>
                          </li>
                          <li className="nav-item">
                          <Link className="nav-link active" to="/contact"> <h5 style={{color:'black' ,paddingTop:'15px',fontWeight:'1000',fontFamily:'Garamond',paddingLeft:'10px'}}>CONTACT US</h5></Link>
                          </li>
        </ul>
      </div></h6>
    </div>
  </nav>

    
        <Routes>
            <Route path='/' element={<Mainpage/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/contact' element={<Contacts/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default App